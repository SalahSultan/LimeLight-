const planet = document.querySelector('.planet');
const planet2 = document.querySelector('.planet2');
const asteroids = document.querySelector('.asteroids');
const comets = document.querySelector('.comets');
const astronaut = document.querySelector('.astronaut');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;

  planet.style.transform = `translateY(${scroll * 0.3}px)`;
  planet2.style.transform = `translateY(${scroll * 0.35}px)`;
  asteroids.style.transform = `translateY(${scroll * 0.45}px)`;
  comets.style.transform = `translateY(${scroll * 0.6}px)`;
  astronaut.style.transform = `translateY(${scroll * 0.6}px)`;

  planet.style.opacity = scroll > 100 ? 1 : 0;
  planet2.style.opacity = scroll > 150 ? 1 : 0;
  asteroids.style.opacity = scroll > 200 ? 1 : 0;
  comets.style.opacity = scroll > 250 ? 1 : 0;
  astronaut.style.opacity = scroll > 200 ? 1 : 0;
});
