const usuarios = new Map();

usuarios.set("felip.fernandez@duocuc.cl", "ColoColo");
usuarios.set("felip.moya@duocuc.cl", "Felipe");
usuarios.set("javiera.banares@duocuc.cl", "Javiera");

const formLogin = document.querySelector("#form-login");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("emailInput").value.trim();
  const password = document.getElementById("passwordInput").value;

  
  if (!usuarios.has(email)) {
    alert("Usuario no encontrado.");
    return;
  }

  const passwordCorrecta = usuarios.get(email);

  if (passwordCorrecta !== password) {
    alert("Contraseña incorrecta.");
    return;
  }

  window.location.href = "index.html"

});
