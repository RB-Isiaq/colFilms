const toggleBtn = document.getElementById("toggle_btn");
const sideBar = document.querySelector(".side-bar");
const mainBar = document.querySelector(".main-bar");

const openAndCloseSideBar = function () {
  if (sideBar.style.display === "none") {
    sideBar.style.display = "block";
    mainBar.style.marginLeft = "auto";
  } else {
    sideBar.style.display = "none";
    mainBar.style.width = "100%";
    mainBar.style.marginLeft = "0";
  }
};

toggleBtn.addEventListener("click", openAndCloseSideBar);
