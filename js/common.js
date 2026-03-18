document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  const html = document.querySelector('html'),
    globalWrap = document.querySelector('.global-wrap'),
    body = document.querySelector('body'),
    hamburger = document.querySelector(".vjsmag-nav__hamburger"),
    navLinks = document.querySelector(".vjsmag-nav__links"),
    searchOpenButton = document.querySelector(".search-button"),
    searchCloseIcon = document.querySelector(".icon__search__close"),
    searchOverlay = document.querySelector(".search__overlay"),
    searchInput = document.querySelector(".search__text"),
    search = document.querySelector(".search"),
    btnScrollToTop = document.querySelector(".top");


  /* =======================================================
  // Menu + Search
  ======================================================= */
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-open");
      navLinks.classList.toggle("is-open");
    });
  }

  if (searchOpenButton) {
    searchOpenButton.addEventListener("click", () => {
      searchOpen();
    });
  }

  if (searchCloseIcon) {
    searchCloseIcon.addEventListener("click", () => {
      searchClose();
    });
  }

  if (searchOverlay) {
    searchOverlay.addEventListener("click", () => {
      searchClose();
    });
  }


  // Search
  function searchOpen() {
    if (search) search.classList.add("is-visible");
    if (body) body.classList.add("search-is-visible");
    if (globalWrap) globalWrap.classList.add("is-active");
    if (hamburger) hamburger.classList.remove("is-open");
    if (navLinks) navLinks.classList.remove("is-open");
    setTimeout(function () {
      if (searchInput) searchInput.focus();
    }, 250);
  }

  function searchClose() {
    if (search) search.classList.remove("is-visible");
    if (body) body.classList.remove("search-is-visible");
    if (globalWrap) globalWrap.classList.remove("is-active");
  }

  document.addEventListener('keydown', function(e){
    if (e.key == 'Escape') {
      searchClose();
    }
  });


  /* ================================================================
  // Stop Animations During Window Resizing
  ================================================================ */
  let disableTransition;

  window.addEventListener("resize", () => {
    stopAnimation();
  });

  function stopAnimation() {
    document.body.classList.add("disable-animation");
    clearTimeout(disableTransition);
    disableTransition = setTimeout(() => {
      document.body.classList.remove("disable-animation");
    }, 100);
  };


  // =====================
  // Simple Jekyll Search
  // =====================
  SimpleJekyllSearch({
    searchInput: document.getElementById("js-search-input"),
    resultsContainer: document.getElementById("js-results-container"),
    json: "/search.json",
    searchResultTemplate: '<div class="search-results__item"><a href="{url}" class="search-results__image" style="background-image: url({image})"></a> <a href="{url}" class="search-results__link"><time class="search-results-date" datetime="{date}">{date}</time><div class="search-results-title">{title}</div></a></div>',
    noResultsText: '<div class="no-results">No results found...</div>'
  });


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");


  /* =======================
  // LazyLoad Images
  ======================= */
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  })


  /* =======================
  // Zoom Image
  ======================= */
  const lightense = document.querySelector(".page__content img, .post__content img, .gallery__image img"),
  imageLink = document.querySelectorAll(".page__content a img, .post__content a img, .gallery__image a img");

  if (imageLink) {
    for (const i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
    for (const i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  };

  if (lightense) {
    Lightense(".page__content img:not(.no-lightense), .post__content img:not(.no-lightense), .gallery__image img:not(.no-lightense)", {
    padding: 60,
    offset: 30
    });
  };


  // =====================
  // Load More Posts
  // =====================
  var load_posts_button = document.querySelector('.load-more-posts');

  load_posts_button&&load_posts_button.addEventListener("click",function(e){e.preventDefault();var o=document.querySelector(".pagination"),e=pagination_next_url.split("/page")[0]+"/page/"+pagination_next_page_number+"/";fetch(e).then(function(e){if(e.ok)return e.text()}).then(function(e){var n=document.createElement("div");n.innerHTML=e;for(var t=document.querySelector(".grid"),a=n.querySelectorAll(".grid__post"),i=0;i<a.length;i++)t.appendChild(a.item(i));new LazyLoad({elements_selector:".lazy"});pagination_next_page_number++,pagination_next_page_number>pagination_available_pages_number&&(o.style.display="none")})});


  /* =======================
  // Scroll Top Button
  ======================= */
  if (btnScrollToTop) {
    btnScrollToTop.addEventListener("click", function () {
      if (window.scrollY != 0) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      }
    });
  }

});
