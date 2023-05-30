window.addEventListener('load', function (event) {
  const swVisualWrap = document.querySelector('.sw-visual .swiper-wrapper');

  // const xhr = new XMLHttpRequest();
  // xhr.addEventListener('readystatechange', function (event) {
  //   let req = event.target;
  //   if (req.readyState === XMLHttpRequest.DONE) {
  //     let data = JSON.parse(req.response);
  //     makeVisualHTML(data);
  //   }
  // });
  // xhr.open('GET', 'data/visualdata.json');
  // xhr.send();
  fetch('data/visualdata.json')
    .then((res) => res.json())
    .then((result) => makeVisualHTML(result))
    .catch((err) => console.error(err));

  function makeVisualHTML(_data) {
    let html = ``;
    _data.img.forEach((data) => {
      let temp = `<div class="swiper-slide" style="background-image: url(images/${data})"></div>`;
      html += temp;
    });

    swVisualWrap.innerHTML = html;

    const swVisual = new Swiper('.sw-visual', {
      loop: true,
      effect: 'fade',
      speed: 800,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.sw-visual-pg',
        pagination: {
          el: '.sw-visual-pg',
          clickable: true,
        },
      },
    });
  }
});
