export default class News {
  constructor(parentEl, date, image, title) {
    this.parentEl = parentEl;
    this.date = date;
    this.image = image;
    this.title = title;
  }

  bindToDOM() {
    this.news = document.createElement("div");
    this.news.classList.add("news");
    this.news.innerHTML = `
        <time class="date">${this.formatDate()}</time>
        <div class="news-wrapper">
        <img alt="News image" src=${this.image} class="news-image">
        <p class="news-title">${this.title}</p>
        </div>
        `;

    this.parentEl.prepend(this.news);
  }

  formatDate() {
    const date = new Date(this.date);
    const dateStr = date.toLocaleDateString("ru-RU");
    const timeStr = date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${timeStr} ${dateStr}`;
  }
}
