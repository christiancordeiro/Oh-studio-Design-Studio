export default function initHeader() {
  const headerList = document.querySelectorAll("ul li")

  function handleClick(event) {
    headerList.forEach((item) => {
      item.classList.remove("selecionado")
    })

    const clique = event.target
    clique.classList.add("selecionado")
  }

  headerList.forEach((item) => {
    item.addEventListener("click", handleClick)
  })
}
