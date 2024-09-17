function classBg() {
  const rad = document.querySelectorAll('.rad');



  rad.forEach((ra) => {
    ra.addEventListener('click', () => {
      removeRa()
      ra.classList.add('bg');
    })

  })

  const removeRa = () => {
    rad.forEach((ra) => {
      ra.classList.remove('bg')
    })
  }
}
export {classBg}