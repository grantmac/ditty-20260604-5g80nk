const primary = document.querySelector(".hero__headline--primary");

if (primary) {
  const on = () => primary.classList.add("is-vibey");
  const off = () => primary.classList.remove("is-vibey");

  primary.addEventListener("pointerenter", on);
  primary.addEventListener("pointerleave", off);
  primary.addEventListener("focus", on);
  primary.addEventListener("blur", off);
  primary.addEventListener("click", () => primary.classList.toggle("is-vibey"));
}
