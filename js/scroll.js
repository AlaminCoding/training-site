window.addEventListener("scroll", function () {
  let scrollPos = document.documentElement.scrollTop;
  const sticky = document.getElementById("sticky-nav");
  if (scrollPos > 100) {
    sticky.style.backgroundColor = "rgb(0,0,0,0.9)";
  }
  if (scrollPos < 100) {
    sticky.style.backgroundColor = "transparent";
  }
});
