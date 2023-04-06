"use strict";
import * as model from "./model.js";
import btnView from "./btnView.js";
import submitView from "./submitView.js";

const planEl = document.querySelector(".plan");
const handleClick = function (data) {
  model.setClickedBtn(data);
};

const controlClick = function () {
  btnView.addHandlderRender(handleClick);
};
const controlSubmit = function () {
  if (!model.state.clickedBtn) return;
  window.location.pathname = "/link.html";
};
const controlGetClickedBtn = function () {
  if (window.location.pathname !== "/link.html") return;
  model.getClickedBtn();
  planEl.textContent = model.state.clickedBtn;
};

const init = function () {
  controlClick();
  controlSubmit();
  submitView.addHandlderRender(controlSubmit);
  controlGetClickedBtn();
};

init();
