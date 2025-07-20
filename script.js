const videoList = [
  "Videos/video1.mov",
  "Videos/video2.mov",
  "Videos/video3.mp4",
  "Videos/video4.mov",
  "Videos/video5.mov",
  "Videos/video6.mov",
  "Videos/video7.mov",
  "Videos/video8.mp4",
  "Videos/video9.mp4",
  "Videos/video10.mov",
  "Videos/video11.mov",
  "Videos/video12.mov",
  "Videos/video13.mov",
  "Videos/video14.mov",
  "Videos/video15.mov",
  "Videos/video16.mov",
  "Videos/video17.mov",
  "Videos/video18.mp4",
  "Videos/video19.mov",
  "Videos/video20.mov",
  "Videos/video21.mov",
  "Videos/video22.mov",
  "Videos/video23.mov",
  "Videos/video24.mov",
  "Videos/video25.mov",
  "Videos/video26.mov",
  
  
  
];

const container = document.getElementById("videoContainer");

videoList.forEach(src => {
  const video = document.createElement("video");
  video.src = src;
  video.controls = true;
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  container.appendChild(video);
});
