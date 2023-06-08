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
              <span>${data.cate}</span>
              <p>
                ${data.title}
              </p>
              <span><i class="fa-regular fa-clock"></i> ${data.date}</span>
            </a>
          </div>
        </div>
      `;

      html += tag;
    });

    console.log(html);
  };

  getNews();
});
