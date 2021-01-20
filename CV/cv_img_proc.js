var initC = document.getElementById("canv-init");
var initCtx = initC.getContext("2d");
//for inverse
var invC = document.getElementById("canv-inv");
var invCtx = invC.getContext("2d");
//for greyscale with average
var gsAvgC = document.getElementById("canv-gs-avg");
var gsAvgCtx = gsAvgC.getContext("2d");
//for greyscale with formula
var gsFormC = document.getElementById("canv-gs-form");
var gsFormCtx = gsFormC.getContext("2d");

//for threshold with formula
var threshC = document.getElementById("canv-thresh");
var threshCtx = threshC.getContext("2d");

//for transformation mirror
var mirrorC = document.getElementById("canv-mirror");
var mirrorCtx = mirrorC.getContext("2d");

//for transformation upside down
var updownC = document.getElementById("canv-updown");
var updownCtx = updownC.getContext("2d");

//kernels
//for horizontal edges
var kHorizon = [1, 1, 1, 0, 0, 0, -1, -1, -1];
var edgehC = document.getElementById("canv-edgeh");
var edgehCtx = edgehC.getContext("2d");

//for vertical edges
var kVertical = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
var edgevC = document.getElementById("canv-edgev");
var edgevCtx = edgevC.getContext("2d");

//for outline
var kOutline = [-1, -1, -1, -1, 8, -1, -1, -1, -1];
var outlineC = document.getElementById("canv-outline");
var outlineCtx = outlineC.getContext("2d");

//for gaussian blur
var kGaussian = [1, 2, 1, 2, 4, 2, 1, 2, 1];
var gaussC = document.getElementById("canv-gauss");
var gaussCtx = gaussC.getContext("2d");

//for sharpen
var kSharp = [0, -1, 0, -1, 5, -1, 0, -1, 0];
var sharpC = document.getElementById("canv-sharp");
var sharpCtx = sharpC.getContext("2d");

//for emboss
var kEmboss = [-2, -1, 0, -1, 1, 1, 0, 1, 2];
var embossC = document.getElementById("canv-emboss");
var embossCtx = embossC.getContext("2d");

//for emboss
var embossrgbC = document.getElementById("canv-emboss-rgb");
var embossrgbCtx = embossrgbC.getContext("2d");

//canvas size
var cw = initC.width;
var ch = initC.height;

//scale image to canvas
function scaleImg(w, h, cw, ch) {
    let new_w = w;
    let new_h = h;
    if (w > h) {
        new_h = (cw * h) / w;
        new_w = cw;
    } else {
        new_w = (ch * w) / h;
        new_h = ch;
    }

    return [new_w, new_h];
}

//color inverse
function inverseImg(pxl){
    for (let i = 0; i < pxl.data.length; i+=4) {
        pxl.data[i + 0] = 255 - pxl.data[i + 0];
        pxl.data[i + 1] = 255 - pxl.data[i + 1];
        pxl.data[i + 2] = 255 - pxl.data[i + 2];
    }
}

//transform to greyscale with avg
function bwAvgImg(pxl) {
    for (let i = 0; i < pxl.data.length; i+=4) {

        var avg = (pxl.data[i + 0] + pxl.data[i + 1] + pxl.data[i+ 2]) / 3;

        pxl.data[i + 0] = avg;
        pxl.data[i + 1] = avg;
        pxl.data[i + 2] = avg;

    }
}

//transform to greyscale with formula
function bwFormImg(pxl) {
    for (let i = 0; i < pxl.data.length; i+=4) {

        var form = (0.3*pxl.data[i + 0] + 0.59*pxl.data[i + 1] + 0.11*pxl.data[i + 2]);

        pxl.data[i + 0] = form;
        pxl.data[i + 1] = form;
        pxl.data[i + 2] = form;

    }
}

//threshold image
function thresholdImg(pxl, threshold, high, low) {
    if (high == null) high = 255;
    if (low == null) low = 0;

    for (var i=0; i<pxl.data.length; i+=4) {
        var rgb = (0.3*pxl.data[i + 0] + 0.59*pxl.data[i + 1] + 0.11*pxl.data[i + 2]);
        var v = (rgb >= threshold) ? high : low;
        pxl.data[i + 0] = pxl.data[i + 1] = pxl.data[i + 2] = v;
    }
}

//mirror image
function mirrorImg(pxl) {
    var arPxl = new Array(pxl.data.length).fill(0);

    let w = pxl.width;
    let h = pxl.height;

    for (let i=0; i<h; i++) {
        for(let j=0; j<(w*4); j+=4){
            arPxl[(i*w*4)+(j)]= pxl.data[(i*w*4)+((w*4)-j-4)];
            arPxl[(i*w*4)+(j+1)]= pxl.data[(i*w*4)+((w*4)-j-4+1)];
            arPxl[(i*w*4)+(j+2)]= pxl.data[(i*w*4)+((w*4)-j-4+2)];
            arPxl[(i*w*4)+(j+3)]= pxl.data[(i*w*4)+((w*4)-j-4+3)];
        } 
    }
    for(let i=0; i<arPxl.length; i++){
        pxl.data[i] = arPxl [i];
    }
}

//upside down image
function updownImg(pxl) {
    var arPxl = new Array(pxl.data.length).fill(0);

    let w = pxl.width;
    let h = pxl.height;

    for (let i=0; i<h; i++) {
        for(let j=0; j<(w*4); j+=4){
            arPxl[(i*w*4)+(j)]= pxl.data[((h-i-1)*w*4)+(j)];
            arPxl[(i*w*4)+(j+1)]= pxl.data[((h-i-1)*w*4)+(j+1)];
            arPxl[(i*w*4)+(j+2)]= pxl.data[((h-i-1)*w*4)+(j+2)];
            arPxl[(i*w*4)+(j+3)]= pxl.data[((h-i-1)*w*4)+(j+3)];
        } 
    }
    for(let i=0; i<arPxl.length; i++){
        pxl.data[i] = arPxl[i];
    }
}

function scaleValues(val,min,max,a,b){
    return ((b-a)(val-min))/(max-min)+a;
}

//convolution 
function convImg(kpic, kernel) {

    var ksum = kernel.reduce(function(a, b){
        return a + b;
    }, 0);

    if (ksum != 0) {
        kernel.forEach((val, i, arr) => {
            arr[i] = val / ksum;
        });
    }

    var h = kpic.height;
    var w = kpic.width;

    var arPic = new Array(kpic.data.length).fill(0);

    for (let i = 0; i < h; i++) {  //lin
        for (let j = 0; j < (w * 4); j+=4) { //col

            let redPxl = 0;
            let greenPxl = 0;
            let bluePxl = 0;
            let alphaPxl = 0;

            for (let ki =-1; ki < 2; ki++) {
                for (let kj =-1; kj < 2; kj++) {
                    redPxl += kpic.data[((i + ki) * w * 4) + (j + (kj * 4))] * kernel[(ki+1) * 3 + (kj+1)]; //
                    greenPxl += kpic.data[((i + ki) * w * 4) + (j + (kj * 4) + 1)] * kernel[(ki+1) * 3 + (kj+1)]; //
                    bluePxl += kpic.data[((i + ki) * w * 4) + (j + (kj * 4) + 2)] * kernel[(ki+1) * 3 + (kj+1)]; //
                    alphaPxl += kpic.data[((i + ki) * w * 4) + (j + (kj * 4) + 3)] * kernel[(ki+1) * 3 + (kj+1)]; //

                }
            }
            arPic[(i * w * 4) + (j+0)] = redPxl;
            arPic[(i * w * 4) + (j+1)] = greenPxl;
            arPic[(i * w * 4) + (j+2)] = bluePxl;
            arPic[(i * w * 4) + (j+3)] = alphaPxl;
        }
    }

    for(let i=0; i<kpic.data.length; i++){
        kpic.data[i] = arPic[i];
    }

}

//convolution - edge detection
function edgeImg(kpic, kernel) {

    var ksum = kernel.reduce(function(a, b){
        return a + b;
    }, 0);

    if (ksum != 0) {
        kernel.forEach((val, i, arr) => {
            arr[i] = val / ksum;
        });
    }

    var h = kpic.height;
    var w = kpic.width;

    var arPic = new Array(kpic.data.length).fill(0);

    for (let i = 0; i < h; i++) {  //lin
        for (let j = 0; j < (w * 4); j+=4) { //col

            let redPxl = 0;
            // let greenPxl = 0;
            // let bluePxl = 0;
            // let alphaPxl = 0;

            for (let ki =-1; ki < 2; ki++) {
                for (let kj =-1; kj < 2; kj++) {
                    redPxl += kpic.data[((i + ki) * w * 4) + (j + (kj * 4))] * kernel[(ki+1) * 3 + (kj+1)]; //
                    // greenPxl += kpic.data[((i + ki) * w * 4) + (j + (kj * 4) + 1)] * kernel[(ki+1) * 3 + (kj+1)]; //
                    // bluePxl += kpic.data[((i + ki) * w * 4) + (j + (kj * 4) + 2)] * kernel[(ki+1) * 3 + (kj+1)]; //
                    // alphaPxl += kpic.data[((i + ki) * w * 4) + (j + (kj * 4) + 3)] * kernel[(ki+1) * 3 + (kj+1)]; //

                }
            }
            arPic[(i * w * 4) + (j+0)] = redPxl;
            arPic[(i * w * 4) + (j+1)] = redPxl;
            arPic[(i * w * 4) + (j+2)] = redPxl;
            arPic[(i * w * 4) + (j+3)] = 255; //alphaPxl;
        }
    }

    for(let i=0; i<kpic.data.length; i++){
        kpic.data[i] = arPic[i];
    }

}



function processImg(img){
     //scale the img to canvas
     let newDim = scaleImg(img.width, img.height, cw, ch);

     //draw background image
     initCtx.drawImage(img, 0, 0, newDim[0], newDim[1]);
 
     //get data from img
     //let pxl = initCtx.getImageData(0, 0, newDim[0], newDim[1]);
 
     //inverseImg
     let invPxl = initCtx.getImageData(0, 0, newDim[0], newDim[1]);
     inverseImg(invPxl);
     invCtx.putImageData(invPxl, 0, 0);
 
     //greyscale
     //with average
     let gsAvgPxl = initCtx.getImageData(0, 0, newDim[0], newDim[1]);;
     bwAvgImg(gsAvgPxl);
     gsAvgCtx.putImageData(gsAvgPxl, 0, 0);
 
     //greyscale
     //with formula (v = 0.3*r + 0.59*g + 0.11*b)
     let gsFormPxl = initCtx.getImageData(0, 0, newDim[0], newDim[1]);;
     bwFormImg(gsFormPxl);
     gsFormCtx.putImageData(gsFormPxl, 0, 0);
 
     //threshold
     let threshPxl = initCtx.getImageData(0, 0, newDim[0], newDim[1]);;
     thresholdImg(threshPxl, 128);
     threshCtx.putImageData(threshPxl, 0, 0);
 
     //image transform mirror
     let mirrorPxl = initCtx.getImageData(0, 0, newDim[0], newDim[1]);;
     mirrorImg(mirrorPxl);
     mirrorCtx.putImageData(mirrorPxl, 0, 0);
 
     //image transform upside down
     let updownPxl = initCtx.getImageData(0, 0, newDim[0], newDim[1]);;
     updownImg(updownPxl);
     updownCtx.putImageData(updownPxl, 0, 0);
 
     //image convolution - edge h
     //get bw data
     let edgehPxl = initCtx.getImageData(0, 0, newDim[0], newDim[1]);;
     // let edgehPxl = gsFormCtx.getImageData(0, 0, newDim[0], newDim[1]);
     // convImg(edgehPxl,kHorizon);
     edgeImg(edgehPxl,kHorizon);
     edgehCtx.putImageData(edgehPxl, 0, 0);
 
     //image convolution - edge v
     //get bw data
     let edgevPxl = gsFormCtx.getImageData(0, 0, newDim[0], newDim[1]);
     edgeImg(edgevPxl,kVertical);
     edgevCtx.putImageData(edgevPxl, 0, 0);
 
     //image convolution - outline
     //get bw data
     let outlinePxl = gsFormCtx.getImageData(0, 0, newDim[0], newDim[1]);
     edgeImg(outlinePxl,kOutline);
     outlineCtx.putImageData(outlinePxl, 0, 0);
 
 
     //image convolution - gaussian blur
     let gaussPxl = initCtx.getImageData(0, 0, newDim[0], newDim[1]);;
     convImg(gaussPxl,kGaussian);
     gaussCtx.putImageData(gaussPxl, 0, 0);
 
     //image convolution - sharp
     let sharpPxl = initCtx.getImageData(0, 0, newDim[0], newDim[1]);;
     convImg(sharpPxl,kSharp);
     sharpCtx.putImageData(sharpPxl, 0, 0);
 
     //image convolution - emboss
     let embossPxl = gsFormCtx.getImageData(0, 0, newDim[0], newDim[1]);
     convImg(embossPxl,kEmboss);
     embossCtx.putImageData(embossPxl, 0, 0);
 
 
     //image convolution - emboss - color
     let embossrgbPxl = initCtx.getImageData(0, 0, newDim[0], newDim[1]);;
     convImg(embossrgbPxl,kEmboss);
     embossrgbCtx.putImageData(embossrgbPxl, 0, 0);
 
}

var img = new Image();

//drawing of the test image - img
img.onload = function () {
    processImg(img);
}
img.src = '../img/cv/tiger.jpg';
// img.src = 'img/StripedCat.png';

// CLICK IMAGE 
var sampleImages = document.getElementsByClassName("sample-img");
for(let i=0; i<sampleImages.length; i++){
    sampleImages[i].addEventListener('click',function (){
        clearAllCanvases();
        img.src=sampleImages[i].src;
        processImg(img);
        
    })
}


//LOAD USER IMG
var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) {
        img.onload = function () {
            clearAllCanvases();
            processImg(img);
        }

        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

function clearAllCanvases() {
    //clear all canvases
    var allCanv = document.getElementsByTagName("canvas");
    for (let i = 0; i < allCanv.length; i++) {
        let allCtx = allCanv[i].getContext("2d");
        allCtx.clearRect(0, 0, allCanv[i].width, allCanv[i].height);
    }
}


//tests for delete
let tst = document.getElementsByClassName('img-wrap');
for(let i=0; i<tst.length; i++){
   // console.log(tst[0].getBoundingClientRect());
}

