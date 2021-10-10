function inputValidate() {
  const button = document.getElementById("calc");
  if (isNaN(document.getElementById("a").value)) {
    document.getElementById("error-log").innerHTML = "Số đã điền không hợp lệ";
    button.disabled = true;
    return;
  }

  if (isNaN(document.getElementById("b").value)) {
    document.getElementById("error-log").innerHTML = "Số đã điền không hợp lệ";
    button.disabled = true;
    return;
  }

  document.getElementById("error-log").innerHTML = "";
  button.disabled = false;
}

function handleButtonClicked(input, options) {
  if (input.a.value == "") {
    if (input.b.value == "") {
      document.getElementById("error-log").innerHTML =
        "Bạn chưa điền cả hai số";
    } else {
      document.getElementById("error-log").innerHTML =
        "Bạn chưa điền số thứ nhất";
    }
    return;
  } else {
    if (input.b.value == "") {
      document.getElementById("error-log").innerHTML =
        "Bạn chưa điền số thứ hai";
      return;
    }
  }

  var result = 0;

  const firstNum = parseFloat(input.a.value);
  const secondNum = parseFloat(input.b.value);

  const option = options.arithmetic.value;

  switch (option) {
    case "ADD":
      result = firstNum + secondNum;
      break;
    case "SUB":
      result = firstNum - secondNum;
      break;
    case "MUL":
      result = firstNum * secondNum;
      break;
    case "DIV":
      result = firstNum / secondNum;
      break;
    default:
      document.getElementById("error-log").innerHTML =
        "Bạn chưa chọn phép tính";
      return;
  }

  input.result.value = result;
  document.getElementById("error-log").innerHTML = "Tính thành công";
}
