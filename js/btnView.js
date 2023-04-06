class BtnView {
  _parentEl = document.querySelector(".rate");
  btns = document.querySelectorAll(".btn");

  addHandlderRender(handler) {
    if (!this._parentEl) return;
    this._parentEl.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".btn");
        if (!btn) return;
        this.btns.forEach((el) => el.classList.remove("active"));
        btn.classList.add("active");
        handler(btn.dataset.tab);
      }.bind(this)
    );
  }
}

export default new BtnView();
