let video,video2,c1,ctx1,c_tmp,ctx_tmp; 
let widthVid, heightVid;
let vidw, vidh;
let divsize;

console.log(screen.width);

function init() {
       

        video = document.getElementById('gr-video');
        divsize = document.getElementById('gr-div-4-video');

        vidw = video.getBoundingClientRect().width;
        // console.log("something");
        // console.log(vidw);
        vidh =  video.getBoundingClientRect().height;

        widthVid = 800;
        heightVid = 450;

        // widthVid = 100;
        // heightVid = 100;

        video2 = document.createElement('video');
        video2.src = "../img/cv/short.mp4"
        video2.muted = true;
        video2.autoplay = true;

        // video.src="short.mp4";

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
    

    let vtim = video.currentTime;
    // console.log("time= "+tim);

    let hsq, wsq;
    if(vtim<3){
        hsq=100;
        wsq=100;
    }
    if ((vtim>=3)&&(vtim<6)){
        hsq=50;
        wsq=50;
    }

    if ((vtim>=6)&&(vtim<9)){
        hsq=20;
        wsq=20;
    }
    if ((vtim>=9)&&(vtim<12)){
        hsq=5;
        wsq=5;
    }
    if ((vtim>=12)&&(vtim<15)){
        hsq=0;
        wsq=0;
    }


    if(hsq>0){
    //just change here size of square
    //    let hsq = 20;
    //    let wsq = 20;

       let r=0,g=0,b=0;


       for (let i = 0; i < heightVid; i += hsq) {   //heightVid

        for (let j = 0; j < ((widthVid) * 4); j += (wsq*4)) {  //(widthVid*4)

            r = frame.data[((i * widthVid * 4) + (j)) + 0];
            g = frame.data[((i * widthVid * 4) + (j)) + 1];
            b = frame.data[((i * widthVid * 4) + (j)) + 2];

            for(let ki=0; ki<hsq; ki++){
                for(let kj=0; kj<(wsq*4); kj+=4){
                    frame.data[(((i+ki) * widthVid * 4) + (j+kj)) + 0] = r;
                    frame.data[(((i+ki) * widthVid * 4) + (j+kj)) + 1] = g;
                    frame.data[(((i+ki) * widthVid * 4) + (j+kj)) + 2] = b;
                }
            }

        }
    }
}


    // console.log(frame.data.length);
    // 1,440,000 / 4 = 360,000 = 800 x 450
    //8,294,400 = 3840 x 2160

    // console.log(frame.data.length);


    ctx1.putImageData(frame, 0, 0);
    setTimeout(computeFrame, 0);
  }

    document.addEventListener("DOMContentLoaded", () => {
      init();
    });