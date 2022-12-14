// Get Out Elements
const videoPlayer = document.querySelector(".main-bar");
const player = document.querySelectorAll(".player");

// });
player.forEach((p) => {
  p.addEventListener("click", function (e) {
    // console.log(e.target);
    const video = p.querySelector(".viewer");
    const progress = p.querySelector(".progress");
    const progressBar = p.querySelector(".progress__filled");
    const toggle = p.querySelector(".toggle");
    const skipButtons = p.querySelectorAll("[data-skip]");
    const ranges = p.querySelectorAll(".player__slider");
    const fullScreenBtn = p.querySelector(".full_screen");

    if (
      e.target === video ||
      // e.target === progress ||
      e.target === progressBar ||
      e.target === toggle ||
      e.target === skipButtons ||
      e.target === ranges ||
      e.target === fullScreenBtn
    ) {
      video.muted = false;
      // Build our functions
      function togglePlay() {
        const method = video.paused ? "play" : "pause";
        video[method]();
      }
      function updateButton() {
        const icon = this.paused ? "►" : "❚ ❚";
        toggle.textContent = icon;
      }

      function skip() {
        video.currentTime += parseFloat(this.dataset.skip);
      }

      function handleRangeUpdate() {
        video[this.name] = this.value;
      }

      function handleProgress() {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${percent}%`;
      }
      function fullScreen() {
        video.requestFullscreen();
      }

      // Hook up the event listeners
      togglePlay();
      video.addEventListener("play", updateButton);
      video.addEventListener("pause", updateButton);
      video.addEventListener("timeupdate", handleProgress);

      skipButtons.forEach((button) => button.addEventListener("click", skip));
      ranges.forEach((range) =>
        range.addEventListener("change", handleRangeUpdate)
      );
      ranges.forEach((range) =>
        range.addEventListener("mousemove", handleRangeUpdate)
      );
      fullScreenBtn.addEventListener("click", fullScreen);
      // if (e.target === progress) {
      //   function scrub() {
      //     const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
      //     video.currentTime = scrubTime;
      //   }
      //   // console.log(e.target)
      //   scrub();
      // }
    }
  });
});
