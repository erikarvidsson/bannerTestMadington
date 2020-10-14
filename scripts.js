let active = false;
let thisUrl = window.location.href;
let urlValues = thisUrl.substring(thisUrl.indexOf("?") + 1);
let splitUrlValues = urlValues.split("&");
let urlValuesArray = Object.values(splitUrlValues).map((value) => {
  return value.split("=");
});

urlValuesArray.map((values) => {
  document.documentElement.style.setProperty(
    `--${values["0"]}`,
    `${values["1"]}px`
  );
});

let documentWidth = document.documentElement.style.getPropertyValue("--width");
let documentHeight = document.documentElement.style.getPropertyValue(
  "--height"
);

console.log(documentHeight.split("px")[0]);

if (documentWidth.split("px")[0] < documentHeight.split("px")[0]) {
  Object.values(document.querySelectorAll(".content-image")).map((images) => {
    images.style.width = "auto";
    images.style.height = "var(--height)";
  });
}


document.querySelector(".scroller").addEventListener("mousedown", function () {
  active = true;
  document.querySelector(".scroller").classList.add("scrolling");
});


document.body.addEventListener("mouseup", function () {
  active = false;
  document.querySelector(".scroller").classList.remove("scrolling");
});
document.body.addEventListener("mouseleave", function () {
  active = false;
  document.querySelector(".scroller").classList.remove("scrolling");
});


document.body.addEventListener("mousemove", function (e) {
  if (!active) return;
  let x = e.pageX;
  x -= document.querySelector(".wrapper").getBoundingClientRect().left;
  scrollIt(x);
});


function scrollIt(x) {
  let transform = Math.max(
    0,
    Math.min(x, document.querySelector(".wrapper").offsetWidth)
  );
  document.querySelector(".after").style.width = transform + "px";
  document.querySelector(".scroller").style.left = transform - 25 + "px";
}

scrollIt(documentWidth.split("px")[0] / 2);



document.querySelector(".scroller").addEventListener("touchstart", function () {
  active = true;
  document.querySelector(".scroller").classList.add("scrolling");
});
document.body.addEventListener("touchend", function () {
  active = false;
  document.querySelector(".scroller").classList.remove("scrolling");
});
document.body.addEventListener("touchcancel", function () {
  active = false;
  document.querySelector(".scroller").classList.remove("scrolling");
});
