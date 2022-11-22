const blocks = Array.from(document.body.querySelectorAll(".reveal"));

document.addEventListener("scroll", isVisible);

function isVisible(evnt) {
  blocks.forEach((block) => {
    const { top, bottom } = block.getBoundingClientRect();
    if (top < window.innerHeight && bottom > 0) {
      block.classList.add("reveal_active");
    } else {
      block.classList.remove("reveal_active");
    }
  });
}
