// Movimento flutuante nas imagens
const imgs = document.querySelectorAll('.flutuante');

imgs.forEach(img => {
  let direcao = 1;
  let posicao = 0;

  setInterval(() => {
    posicao += direcao * 0.5;
    if (posicao > 10 || posicao < -10) direcao *= -1;
    img.style.transform = `translateY(${posicao}px)`;
  }, 50);
});
