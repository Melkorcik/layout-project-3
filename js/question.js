const boxQuestion = document.getElementById("#box-question");
const question = document.getElementById("#questionText");
const btnQuestion = document.getElementById("#openQuestion");

const handlerQuestion = (e) => {
  boxQuestion.style.transition = ".5s";
  boxQuestion.style.height = boxQuestion.offsetHeight === 41 ? "140px" : "41px";
  question.style.transition = boxQuestion.offsetHeight === 41 ? "1.5s" : ".3s";
  question.style.opacity = boxQuestion.offsetHeight === 41 ? "1" : "0";
};

btnQuestion.addEventListener("click", handlerQuestion);