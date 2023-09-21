const fireContainer = document.getElementById('fire-container')

function createParticles(fireContainer, num, leftSpacing) {
  for (let i = 0; i < num; i += 1) {
    let particle = document.createElement("div")
    particle.style.left = `calc((100% + 3em) * ${i / leftSpacing })`
    particle.setAttribute("class", "particle")
    particle.style.animationDelay = 2 * Math.random() + "s"
    fireContainer.appendChild(particle)
  }
}

createParticles(fireContainer, 70, 40)


const fireBtnContainer = document.getElementById('fire2-container')

function createBtnParticles(fireBtnContainer, num, leftSpacing) {
  for (let j = 0; j < num; j += 1) {
    let particleEl = document.createElement("div")
    particleEl.style.left = `calc((100% + 15em) * ${j / leftSpacing })`
    particleEl.setAttribute("class", "particleEl")
    particleEl.style.animationDelay = 8 * Math.random() + "s"
    fireBtnContainer.appendChild(particleEl)
  }
}

createBtnParticles(fireBtnContainer, 20, 30)

