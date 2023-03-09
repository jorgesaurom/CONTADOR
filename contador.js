let count = 0;
const valor = document.querySelector("#valor");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("disminuye")) {
      count--;
    } else if (styles.contains("incrementa")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      valor.style.color = "green";
    }
    if (count < 0) {
      valor.style.color = "red";
    }
    if (count === 0) {
      valor.style.color = "black";
    }
    valor.textContent = count;
  });
});
