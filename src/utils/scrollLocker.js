class ScrollLocker {
  constructor() {
    if (typeof document == "undefined") {
      return;
    }

    this.element = document.body;
  }

  lock() {
    this.element.style.overflow = "hidden";
  }

  unlock() {
    this.element.style.overflow = "";
  }
}

export const scrollLocker = new ScrollLocker();
