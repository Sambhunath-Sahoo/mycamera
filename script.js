let video = document.querySelector("video");

let constraints = {
    video: true,
    audio: true,
};

// navigator is a global object which contains the info of browser
// The MediaDevices.getUserMedia() method prompts the user for permission to use a media input
// navigator.mediaDevices.getUserMedia(constraints)
//     .then((stream) => {
//         video.srcObject= stream;

//     })
//     .catch(function (err) {
        
//     });

