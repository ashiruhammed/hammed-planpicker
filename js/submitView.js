class SubmitBtnView {
  _parentEl = document.querySelector(".submit");

  addHandlderRender(handler) {
    if (!this._parentEl) return;
    this._parentEl.addEventListener("click", function () {
      handler();
    });
  }
}

export default new SubmitBtnView();
