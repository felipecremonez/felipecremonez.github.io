document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', function() {
    navList.classList.toggle('active');
  });

  const navListItems = document.getElementsByClassName('nav-list-item');

  for (const item of navListItems) {
    item.addEventListener('click', () => {
      navList.classList.toggle('active');
    });    
  }
});

// document.querySelectorAll('.projetos, .projetosRotate').forEach(function(element) {
//   element.addEventListener('mouseenter', function() {
//     this.style.transform = 'rotateY(15deg) rotateX(10deg)';
//   });

//   element.addEventListener('mouseleave', function() {
//     this.style.transform = 'rotateY(0deg) rotateX(0deg)';
//   });
// });



// Comando para deixar as Box 3d ------------------------------------------------- 
// VanillaTilt.init(document.querySelectorAll(".especialidades_box"), {
//   max: 25,
//   speed: 400,
//   glare: true,
//   "max-glare": 0.1,
//   scale: 1.1
// })
