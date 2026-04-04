(function () {
  document.getElementById("tit").innerHTML = "AIMC - Artificial Intelligence Math Calculator";
  document.getElementById("des").innerHTML = "AIMC is a math caculator, it use AI to calculate.";
  document.getElementById("eq").innerHTML = "EQUATION:";
  localStorage.setItem("isExe", "False");
})()
function cal() {
  if (localStorage.getItem("isExe") == "True") {
    return;
  }
  localStorage.setItem("isExe", "True");
  document.getElementById("rsl").innerHTML = "";
  const equ = document.getElementById("eqt").value;
  try {
    resl = eval(equ);
  } catch (e) {
    localStorage.setItem("isExe", "False");
    alert("Error input");
    return;
  }
  let i = 0;
  const interval = setInterval(() => {
    if (i < resl) {
      document.getElementById("rsl").innerHTML += (i + 1) + " ";
      i++;
    } else {
      clearInterval(interval);
      alert("The result is " + resl);
      localStorage.setItem("isExe", "False");
    }
  }, 333);
}
