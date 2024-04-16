var center = document.querySelector("#center");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

center.addEventListener("mousemove", throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("imageDiv");
    div.style.left = dets.x + "px";
    div.style.top = dets.y + "px";

    var img = document.createElement("img");
    img.setAttribute("src", `girl.jpg`);
    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img, {
      y: 0,
      ease: Power1,
      duration: 0.6,
    });
    gsap.to(img, {
      y: "100%",
      ease: Power2,
      delay: 0.8,
    });

    setTimeout(function () {
      div.remove();
    }, 3000);
  }, 300)
);
