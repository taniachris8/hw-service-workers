export default class ErrorMessage {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.errorMessageEl = document.createElement("div");
    this.errorMessageEl.classList.add("error-message-element");
    this.errorMessageEl.innerHTML = `
        <p>Не удалось загрузить данные</p>
        <p>Проверьте подключение и обновите страницу</p>
        `;
    this.parentEl.append(this.errorMessageEl);
  }

  remove() {
    this.errorMessageEl.remove();
  }
}
