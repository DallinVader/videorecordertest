function StartVideo(){
    navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(stream => {
        document.getElementById("video").srcObject = stream;
    })
}

function StopVideo(){
    document.getElementById("video").srcObject = null;
    navigator.mediaDevices.getUserMedia({audio: false, video: false});
}