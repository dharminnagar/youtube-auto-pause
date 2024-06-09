function pauseVideo() {
  const video = document.querySelector('video');
  if (video) {
    video.pause();
  }
}

function resumeVideo() {
  const video = document.querySelector('video');
  if (video) {
    video.play();
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "pauseVideo") {
    pauseVideo();
  } else if (request.action === "resumeVideo") {
    resumeVideo();
  }
});
