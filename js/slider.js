const btn = document.getElementById("#next-slide");
const step = document.getElementById("#step");
const container = document.getElementById("#container");

const handler = (e) => {
  let numberStep = parseInt(step.textContent.match(/\d+/)[0]);
  container.children[2].children[numberStep - 1].style.transition = ".5s";
  container.children[2].children[numberStep - 1].style.opacity = "0";
  container.children[2].children[
    numberStep === 3 ? numberStep - 3 : numberStep
  ].style.transition = ".5s";
  container.children[2].children[
    numberStep === 3 ? numberStep - 3 : numberStep
  ].style.opacity = "1";
  let index =
    numberStep === container.children[2].childElementCount
      ? numberStep - 2
      : numberStep + 1;
  step.textContent = "Шаг " + String(index);
};
btn.addEventListener("click", handler);