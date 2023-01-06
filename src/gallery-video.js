const videoThumbnails = document.querySelectorAll(".thumbnail__itembox");
const videoPlayer = document.querySelector(".video-frame");


const showVideo = (videoId) => {
    let videoUrl = `https://www.youtube.com/embed/${videoId}?controls=0`;
    videoPlayer.setAttribute("src", videoUrl);
};

videoThumbnails.forEach(v => {
    v.addEventListener("click", () => {
        showVideo(v.dataset.vid);
    });
});