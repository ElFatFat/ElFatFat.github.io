window.addEventListener('scroll', function() {
    if (window.scrollY > 1) {
      document.querySelector('#header').classList.add('headerScroll');
    } else {
      document.querySelector('#header').classList.remove('headerScroll');
    }
  });