function cal() {
  const rsl = document.getElementById("rsl");
  rsl.innerHTML = "";
  const equ = document.getElementById("eqt").value;
  const resl = eval(equ);
  let i = 0;
  const interval = setInterval(() => {
    if (i < resl) {
      rsl.innerText += (i + 1);
      i++;
    } else {
      clearInterval(interval);
      rsl.innerHTML += "<hr>";
      rsl.innerText += "The result is " + resl;
    }
  }, 333);
}
