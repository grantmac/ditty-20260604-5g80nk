(function () {
  const primary = document.querySelector(".hero__headline--primary");
  if (!primary) return;

  const on = () => primary.classList.add("is-vibey");
  const off = () => primary.classList.remove("is-vibey");

  primary.addEventListener("mouseenter", on);
  primary.addEventListener("mouseleave", off);
  primary.addEventListener("focus", on);
  primary.addEventListener("blur", off);
})();
