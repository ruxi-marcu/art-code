const video = document.getElementById('video');

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
    // faceapi.nets.faceLandmark68Net.loadFromUri('/models_detect'),
    // faceapi.nets.faceRecognitionNet.loadFromUri('/models_detect'),
    // faceapi.nets.faceExpressionNet.loadFromUri('/models_detect')
    faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
    faceapi.nets.faceExpressionNet.loadFromUri('./models')
]).then(startVideo)

function startVideo(){
    navigator.getUserMedia(
        { video: {}},
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

startVideo();

video.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(video);
    // document.body.append(canvas);
    document.getElementById('fd-wrapper').append(canvas);
    canvas.id = "face-detect-canv";
    //make canvas the size of the video
    const displaySize ={ width: video.width, height: video.height};
    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video,
        new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
        // console.log(detections);

        //boxes properly resized to the video & canvas
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);

        //more results
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
        
    }, 100)
})