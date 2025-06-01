//Auto CD size fix
let out = document.getElementById("out");
setInterval(() => {
  if (window.innerWidth <= 600) {
    out.style.width = `${window.innerWidth}px`;
    out.style.height = `${window.innerWidth}px`;
  } else if (window.innerHeight <= 600) {
    out.style.width = `${window.innerHeight}px`;
    out.style.height = `${window.innerHeight}px`;
  }
}, 500);

//dropdown
let dropdown = document.getElementById("dropdown");
let drop = document.getElementById("drop").addEventListener("click", () => {
  dropdown.style.display = "inline-block";
});
let close = document.getElementById("close").addEventListener("click", () => {
  dropdown.style.display = "none";
});

//Audio Funations
let mainaudio=document.getElementById("main");
let audios=document.querySelectorAll("#audiobox audio");
audios.forEach((audio)=>{
  audio.addEventListener("play",()=>{
    audios.forEach((audio)=>{
      audio.pause();
      audio.currentTime=0;
    })
    mainaudio.src=audio.src;
    dropdown.style.display = "none";
    mainaudio.play();
  })
})