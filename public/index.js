const button = document.querySelector('button')

const changeColor = () => {
  button.classList.add('blue')
}

button.addEventListener('click', changeColor)
