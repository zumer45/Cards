const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeStyle(panel);
    panel.classList.add("active");
  });
});

function removeStyle(panel) {
  panels.forEach((p) => {
    p.classList.remove("active");
  });
}
