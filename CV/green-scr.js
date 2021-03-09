let video,video2,c1,ctx1,c_tmp,ctx_tmp; 
let widthVid, heightVid;
let vidw, vidh;
let divsize;

// console.log(screen.width);

function init() {
        video = document.getElementById('gr-video');
        divsize = document.getElementById('gr-div-4-video');

        vidw = video.getBoundingClientRect().width;
        vidh =  video.getBoundingClientRect().height;
        // console.log("w "+vidw+"--> h "+vidh);


        // widthVid = video.getBoundingClientRect().width;
        // heightVid = video.getBoundingClientRect().height;



        // widthVid = divsize.getBoundingClientRect().width;
        // heightVid = divsize.getBoundingClientRect().height;

        widthVid = 800;
        heightVid = 450;

        video2 = document.createElement('video');
        video2.src = "../img/cv/fire.mp4"
        video2.muted = true;
        video2.autoplay = true;

        // video.src="fire.mp4";

        c1 = document.getElementById('gr-output-canvas');
        ctx1 = c1.getContext('2d');

        c_tmp = document.createElement('canvas');
        c_tmp.setAttribute('width', widthVid);
        c_tmp.setAttribute('height', heightVid);

        // console.log(widthVid+" <--> "+heightVid);
        ctx_tmp = c_tmp.getContext('2d');

        video.addEventListener('play', computeFrame );
      }
   function computeFrame() {

    if (video.paused || video.ended) {
      return;
    }
    video2.play();

        //   widthVid = video.getBoundingClientRect().width;
        // heightVid = video.getBoundingClientRect().height;
        // console.log(widthVid+" <--> "+heightVid);
        widthVid = 800;
        heightVid =450;

    // console.log(video2.paused + " "+ video2.ended);

    ctx_tmp.drawImage(video, 0, 0, widthVid , heightVid );
    let frame = ctx_tmp.getImageData(0, 0, widthVid , heightVid );
    // console.log("bla "+video.videoWidth)

    ctx_tmp.drawImage(video2, 0, 0, widthVid , heightVid );
    let frame2 = ctx_tmp.getImageData(0, 0, widthVid , heightVid );

    // for (let i=0; i<frame.data.length /4; i++){
    // frame.data[i * 4 + 0] = 255 - frame.data[i * 4 + 0];
    // frame.data[i * 4 + 1] = 255 - frame.data[i * 4 + 0];
    // frame.data[i * 4 + 2] = 255 - frame.data[i * 4 + 0];
    // }

    // console.log(frame.data.length);
    // 1,440,000 / 4 = 360,000 = 800 x 450
    //8,294,400 = 3840 x 2160

    for (let i = 0; i < frame.data.length /4; i++) {
      let r = frame.data[i * 4 + 0];
      let g = frame.data[i * 4 + 1];
      let b = frame.data[i * 4 + 2];

      if (r > 70 && r < 160 && g > 95 && g < 220 && b > 25 && b < 150) 
      {  
          frame.data[i * 4 + 0] = frame2.data[i * 4 + 0];
          frame.data[i * 4 + 1] = frame2.data[i * 4 + 1];
          frame.data[i * 4 + 2] = frame2.data[i * 4 + 2];
      }
    }
    ctx1.putImageData(frame, 0, 0);
    setTimeout(computeFrame, 0);
  }

    document.addEventListener("DOMContentLoaded", () => {
      init();
    });