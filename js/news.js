window.addEventListener('load', function () {
  // fetch('data/newsdata.json')
  //   .then((res) => res.json())
  //   .then((result) => console.log(result))
  //   .catch((err) => console.log(err));

  const getNews = async () => {
    try {
      let res = await fetch('data/newsdata.json');
      let result = await res.json();
      makeHtml(result);
    } catch (err) {
      console.error(err);
    }
  };

  const makeHtml = (_data) => {
    let html = ``;
    _data.forEach((data) => {
      let tag = /* html */ `
        <div class="swiper-slide">
          <div class="news-box">
            <a href="${data.link}">
              <span class="news-cate">${data.cate}</span>
              <p>${data.title}</p>
              <span class="news-date"><i class="fa-regular fa-clock"></i> ${data.date}</span>
            </a>
          </div>
        </div>
      `;

      html += tag;
    });

    const newsWrap = document.querySelector('.sw-news .swiper-wrapper');
    newsWrap.innerHTML = html;

    new Swiper('.sw-news', {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
        },
      },
    });
  };

  getNews();
});
