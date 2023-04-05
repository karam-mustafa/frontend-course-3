const calcBtn = document.querySelector(".calcBtn");

calcBtn.addEventListener("click", function () {
  const first_nu = document.querySelector(".first_nu");
  const second_nu = document.querySelector(".second_nu");
  const operator = document.querySelector(".operator");

  let result = eval(first_nu.value + operator.value + second_nu.value);

  const span = document.querySelector("span");
  span.innerText = result;
});
