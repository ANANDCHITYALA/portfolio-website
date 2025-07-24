const carousel = document.getElementById("carousel");
const wrapper = document.getElementById("carouselWrapper");

const certificateImages = [
  "./Walmart_Global_Tech_INTERNSHIP_Certificate.jpeg",
  "./microsoft_frontend_bootcamp_certificate.png",
  "./microsoft_backend_bootcamp_certificate.png",
  "./FSWD_Completion_Certificate.png",
  "./FSWD_Training_Certificate.png",
  "./Gfg_Summer_Workshop_Certificate.png",
  "./FSWD_Project_Certificate.png",
  "./gdsc_frontend_certificate.png",
  "./Naukri_Campus_AINCAT_Aptitude_Certificate.png",
  "./NIIT_Foundation_Digital_Productivity_Certificate.png",
];

certificateImages.forEach((src, i) => {
  const div = document.createElement("div");
  div.className = "carousel__item";
  div.innerHTML = `<img src="${src}" alt="Certificate ${i + 1}" />`;
  carousel.appendChild(div);
});

const items = document.querySelectorAll(".carousel__item");
const itemCount = items.length;
const angle = 360 / itemCount;
let currentIndex = 0;

function positionItems() {
  items.forEach((item, index) => {
    const itemAngle = index * angle;
    item.style.transform = `rotateY(${itemAngle}deg) translateZ(500px)`;
    const normalizedIndex = (index - currentIndex + itemCount) % itemCount;
    item.classList.toggle("front", normalizedIndex === 0);
  });
}

function rotateToCurrent() {
  const rotationY = -currentIndex * angle;
  carousel.style.transform = `rotateY(${rotationY}deg)`;
  positionItems();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % itemCount;
  rotateToCurrent();
}

positionItems();
rotateToCurrent();
wrapper.addEventListener("click", nextImage);
wrapper.addEventListener("touchstart", nextImage);
