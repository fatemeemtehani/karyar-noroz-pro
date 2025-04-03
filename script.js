window.onscroll = function () {
  stickyMenu();
};

var menu = document.getElementById("myMenu");
var sticky = menu.offsetTop;

function stickyMenu() {
  if (window.pageYOffset > sticky) {
    menu.classList.add("fixed");
  } else {
    menu.classList.remove("fixed");
  }
}

// کد مربوط به گالری عکس
const photos = [
  { src: "images/fine-meat-kebabs.jpg", title: "Fine Meat Kebabs" },
  { src: "images/ground-beef-ourshop.jpg", title: "The Best Ground Beef" },
  { src: "images/fresh-milk.jpg", title: "Fresh Milk" },
  { src: "images/organic-free-range-chicken.jpg", title: "Free Range Chicken" },
  { src: "images/cow-center.jpg", title: "Cow Center" },
];

let currentIndex = 0;

function updatePhoto() {
  const photoElement = document.getElementById("photo");
  const titleElement = document.getElementById("photo-title");

  photoElement.src = photos[currentIndex].src;
  titleElement.textContent = photos[currentIndex].title;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
  updatePhoto();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
  updatePhoto();
});

updatePhoto();
function toggleMenu() {
  const menuList = document.getElementById("menuList");
  const hamburger = document.getElementById("hamburger");
  menuList.classList.toggle("show");
  hamburger.classList.toggle("active"); // افزودن کلاس فعال برای تبدیل به ضربدر
}
