const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('audio');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

playBtn.addEventListener('click', () => {
  audio.play();
  updateMediaSession();
});

function updateMediaSession() {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: 'ලෙලෙන',
      artist: 'මනෝරංජන',
      album: 'සුන්දර සංගීතය',
      artwork: [{ src: 'https://example.com/lele.jpg', sizes: '512x512', type: 'image/jpeg' }]
    });

    navigator.mediaSession.setActionHandler('play', () => audio.play());
    navigator.mediaSession.setActionHandler('pause', () => audio.pause());
  }
}
