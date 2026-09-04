const usuarios = new Map();

usuarios.set("felip.fernandez@duocuc.cl", {
  password: "ColoColo",
  nombre: "Felipe Fernandez",
  telefono: "+56912345678",
  mascotas: [
    { especie: "perro", nombre: "Lala" },
    { especie: "gato", nombre: "Lolo" }
  ]
});

usuarios.set("felip.moya@duocuc.cl", {
  password: "fmoyam",
  nombre: "Felipe Moya",
  telefono: "+56931435167",
  mascotas: [
    { especie: "gato", nombre: "Crema" }
  ]
});

usuarios.set("javiera.banares@duocuc.cl", {
  password: "jbanares",
  nombre: "Javiera Banares",
  telefono: "+56911223344",
  mascotas: [
    { especie: "hamster", nombre: "Toto" },
    { especie: "rata", nombre: "Ninja" },
    { especie: "perro", nombre: "Cachupin" }
  ]
});

const Login = document.querySelector("#form-login");

Login.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("emailInput").value.trim();
  const contra = document.getElementById("passwordInput").value;

  if (!usuarios.has(email)) {
    alert("Usuario no encontrado.");
    return;
  }

  const usuario = usuarios.get(email);

  if (usuario.password !== contra) {
    alert("Contraseña incorrecta.");
    return;
  }

  let pets = "Mascotas de " + usuario.nombre + ":\n";
    for (let i = 0; i < usuario.mascotas.length; i++) {
      pets += (i + 1) + ". " + usuario.mascotas[i].especie + " - " + usuario.mascotas[i].nombre + "\n";
    }
  alert(pets);
  window.location.href = "index.html";
});
