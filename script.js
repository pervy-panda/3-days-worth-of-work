let currentMessage = null;

function showMessage(messageId) {
    currentMessage = messageId;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById(messageId).style.display = 'block';
}

function closeMessage() {
    document.getElementById('overlay').style.display = 'none';
    if (currentMessage) {
        document.getElementById(currentMessage).style.display = 'none';
        currentMessage = null;
    }
}


function openlink(url) {
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');

    function playAudio() {
        audio.play().then(() => {
            console.log("Audio is playing");
        }).catch(error => {
            console.log("Error playing audio: ", error);
        });
        document.removeEventListener('click', playAudio);
        document.removeEventListener('touchstart', playAudio);
    }

    document.addEventListener('click', playAudio);
    document.addEventListener('touchstart', playAudio);
    document.addEventListener('touchend', playAudio);
    document.addEventListener('touchmove', playAudio);
});
