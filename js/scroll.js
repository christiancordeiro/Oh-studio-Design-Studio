export default function initScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden")
        entry.target.classList.add("show")
      } else {
        entry.target.classList.remove("show")
      }
    })
  })

  const hiddenElement = document.querySelectorAll(".hidden")

  hiddenElement.forEach((item) => observer.observe(item))
}
