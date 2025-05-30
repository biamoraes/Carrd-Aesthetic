document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = '<i class="fas fa-play"></i>';
    const pauseIcon = '<i class="fas fa-pause"></i>';
    
    // Check if audio is playing and update button
    audioPlayer.addEventListener('play', function() {
        playPauseBtn.innerHTML = pauseIcon;
    });
    
    audioPlayer.addEventListener('pause', function() {
        playPauseBtn.innerHTML = playIcon;
    });
    
    // Play/Pause button click handler
    playPauseBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });
    
    // Try to autoplay (may be blocked by browser)
    audioPlayer.play().catch(error => {
        console.log("Autoplay was prevented:", error);
    });
});