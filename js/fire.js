const fireContainer = document.getElementById("fire-container")

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