import News from "./News";
import Skeleton from "./Skeleton";
import ErrorMessage from "./ErrorMessage";

const container = document.querySelector(".container");
const newsContainer = document.querySelector(".news-container");
const updateBtn = document.querySelector(".update-btn");
const url = `https://server-for-hw-service-worker.onrender.com`;

let errorEl;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => console.log("SW registered"))
    .catch((err) => console.log("SW registration failed", err));
}

function fetchNews(callback) {
  if (errorEl) errorEl.remove();
  const skeleton = new Skeleton(newsContainer);

  fetch(`${url}/news`)
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      if (skeleton) skeleton.remove();
      if (callback) callback(data);
    })
    .catch((err) => {
      setTimeout(() => {
        errorEl = new ErrorMessage(container);
      }, 10000);
      console.log(err);
    });
}
const createNews = (data) => {
  newsContainer.innerHTML = "";

  data.news.forEach((item) => {
    const newsEl = new News(newsContainer, item.date, item.image, item.title);
    newsEl.bindToDOM();
  });
};

fetchNews(createNews);

updateBtn.addEventListener("click", () => {
  newsContainer.innerHTML = "";
  fetchNews(createNews);
});
