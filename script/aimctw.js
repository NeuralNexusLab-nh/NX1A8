function cal() {
  if (localStorage.getItem("isExe") == "True") {
    return;
  }
  localStorage.setItem("isExe", "True");
  document.getElementById("rsl").innerHTML = "";
  const equ = document.getElementById("eqt").value.replaceAll("^", "**");
  try {
    resl = eval(equ);
  } catch (e) {
    localStorage.setItem("isExe", "False");
    alert("Error input");
    return;
  }
  let i = 0;
  time = Math.floor(10000 / resl);
  if (time < 20) {
    time = 0.1;
  }
  if (time > 2700) {
    time = 800;
  }
  document.getElementById("rsl").innerHTML += "AI: 讓我數一數... <br>";
  const interval = setInterval(() => {
    if (i < resl) {
      document.getElementById("rsl").innerHTML += (i + 1) + " ";
      i++;
    } else {
      clearInterval(interval);
      alert("數學運算結果為: " + resl);
      localStorage.setItem("isExe", "False");
    }
  }, time);
}
