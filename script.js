let video = document.querySelector("video");
let recordBtnCont = document.querySelector(".record-btn-cont");
let recordBtn = document.querySelector(".record-btn");
let captureBtnCont = document.querySelector(".capture-btn-cont");
let captureBtn = document.querySelector(".capture-btn");
let recordFlag = false;
let transparentColor = "transparent";

let recorder;
var chunks = [];     // to store video data in chunks

let constraints = {
    video: true,
    audio: true
}

// navigator -> global, browser info
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
        video.srcObject = stream;

        recorder = new MediaRecorder(stream);
        // for recording
        recorder.addEventListener('start', (e) => {    // when start new recording erasing the previous data
            chunks = [];
        })
        recorder.addEventListener('dataavailable', (e) => {
            chunks.push(e.data);
        })
        recorder.addEventListener('stop', (e) => {
            // conversion of media chunks to video
            var blob = new Blob(chunks, { 'type' : 'video/mp4' });
            var videoURL = URL.createObjectURL(blob);

            let a = document.createElement('a');
            a.href = videoURL;
            a.download = "stream.mp4";
            a.click();
        })
    })

recordBtnCont.addEventListener("click", (e) => {
    if (!recorder) return;

    recordFlag = !recordFlag;                       // same button will start and stop recording

    if (recordFlag) {                               // start recoding
        recorder.start();
        recordBtn.classList.add("scale-record");
        startTimer();
    }
    else {                                          // stop recoding
        recorder.stop();
        recordBtn.classList.remove("scale-record");
        stopTimer();
    }
})



