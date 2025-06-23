function changeImage(src) {
  document.getElementById("main-image").src = src;
}

function selectVoltagem(button) {
  document.querySelectorAll(".voltagem button").forEach(btn => {
    btn.classList.remove("active");
  });
  button.classList.add("active");
}

function comprar() {
  alert("Obrigado por escolher a Lixoteca! Em breve você receberá um link de compra.");
}
