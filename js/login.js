const usuarios = new Map();

usuarios.set("felip.fernandez@duocuc.cl", "ColoColo");
usuarios.set("felip.moya@duocuc.cl", "Felipe");
usuarios.set("javiera.banares@duocuc.cl", "Javiera");

const Login = document.querySelector("#form-login");

Login.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("emailInput").value.trim();
  const contra = document.getElementById("passwordInput").value;

  if (!usuarios.has(email)) {
    alert("Usuario no encontrado.");
    return;
  }

  const contraCorrecta = usuarios.get(email);

  if (contraCorrecta !== contra) {
    alert("Contraseña incorrecta.");
    return;
  }

  window.location.href = "index.html"

});
