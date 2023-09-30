export default function imgDetails() {
  const imgContainers = document.querySelectorAll(".imgs-container")

  function mouseOver(event) {
    const details = event.currentTarget.querySelector(".details")
    if (details) {
      details.classList.add("activate")
    }
  }

  function mouseOut(event) {
    const details = event.currentTarget.querySelector(".details")
    if (details) {
      details.classList.remove("activate")
    }
  }

  imgContainers.forEach((container) => {
    container.addEventListener("mouseover", mouseOver)
    container.addEventListener("mouseout", mouseOut)
  })
}
