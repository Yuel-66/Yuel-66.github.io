function checkAnswer() {
  var answer = document.getElementById("answer").value;
  var result = document.getElementById("result");
  // 检查答案并在结果框中显示
  if (answer === "金鱼") {
    result.innerHTML = "恭喜你，回答正确！";
  } else {
    result.innerHTML = "很遗憾，回答错误。";
  }
}
