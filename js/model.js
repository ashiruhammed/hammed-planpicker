export const state = {};

export const setClickedBtn = function (data) {
  state.clickedBtn = data;
  localStorage.setItem("clickedBtn", JSON.stringify(state.clickedBtn));
};

export const getClickedBtn = function () {
  const click = JSON.parse(localStorage.getItem("clickedBtn"));
  state.clickedBtn = click;
};
