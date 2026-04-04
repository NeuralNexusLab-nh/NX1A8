function cal() {
  document.getElementById("rsl").innerHTML = "";
  const equ = document.getElementById("eqt").value;
  const resl = eval(equ);
  let i = 0;
  const interval = setInterval(() => {
    if (i < resl) {
      document.getElementById("rsl").innerHTML += (i + 1) + " ";
      i++;
    } else {
      clearInterval(interval);
      document.getElementById("rsl").innerHTML += "<hr>";
      document.getElementById("rsl").innerText += "The result is " + resl;
    }
  }, 333);
}
