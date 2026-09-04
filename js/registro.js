const mapaRegistro = new Map();
let contadorRegistro = 1;

const formRegistro = document.querySelector("#form-registro");
const inputNombre = document.querySelector("#nombreInput");
const inputEmail = document.querySelector("#emailInput");
const inputTelefono = document.querySelector("#telefonoInput");
const inputContra = document.querySelector("#passwordInput");
const inputConfirmarContra = document.querySelector("#confirmPasswordInput");

const inputCantidad = document.querySelector("#cantidad_mascotas");
const contenedorMascotas = document.querySelector("#mascotas-container");

function validarContra(password) {
    const errores = [];

    if (password.length < 8) {
        errores.push("Debe tener al menos 8 caracteres");
    }
    if (!/[A-Z]/.test(password)) {
        errores.push("Debes incluir al menos una letra mayúscula");
    }
    if (!/[a-z]/.test(password)) {
        errores.push("Debe incluir al menos una letra minúscula");
    }
    if (!/[0-9]/.test(password)) {
        errores.push("Debes incluir al menos un número");
    }
    if (!/[@#$!%*?&]/.test(password)) {
        errores.push("Debe incluir al menos un carácter especial (@#$!%*?&)");
    }

    return errores;
}

function generarCamposMascotas(cantidad) {
    contenedorMascotas.innerHTML = "";
    const total = Math.min(Math.max(parseInt(cantidad) || 1, 1), 5);

    for (let i = 1; i <= total; i++) {
        const div = document.createElement("div");
        div.classList.add("p-3", "bg-light", "border", "rounded");
        div.innerHTML = `
      <h6 class="fw-bold small mb-2 text-secondary">Mascota #${i}</h6>
      <div class="row g-2">
        <div class="col-8">
          <input type="text" class="form-control form-control-sm nombre-mascota" placeholder="Nombre" maxlength="50" required>
        </div>
        <div class="col-4">
          <select class="form-select form-select-sm tipo-mascota">
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>
    `;
        contenedorMascotas.appendChild(div);
    }
}

generarCamposMascotas(inputCantidad.value);
inputCantidad.addEventListener("input", () => {
    generarCamposMascotas(inputCantidad.value);
});

formRegistro.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = inputNombre.value.trim();
    if (nombre === "") {
        alert("El nombre completo no puede estar vacío.");
        inputNombre.focus();
        return;
    }
    if (nombre.length > 50) {
        alert("El nombre completo no puede tener más de 50 caracteres.");
        inputNombre.focus();
        return;
    }
    if (!/^[a-zA-ZáéíóúñüÁÉÍÓÚÑÜ\s]+$/.test(nombre)) {
        alert("El nombre completo solo puede contener caracteres alfabéticos y espacios.");
        inputNombre.focus();
        return;
    }

    const email = inputEmail.value.trim();
    if (!email.endsWith("@duoc.cl")) {
        alert("El correo electrónico debe terminar en @duoc.cl");
        inputEmail.focus();
        return;
    }

    const contra = inputContra.value;
    const confirmarContra = inputConfirmarContra.value;

    const erroresContra = validarContra(contra);
    if (erroresContra.length > 0) {
        alert("La contraseña no cumple los requisitos:\n\n• " + erroresContra.join("\n• "));
        inputContra.focus();
        return;
    }

    if (contra !== confirmarContra) {
        alert("Las contraseñas no coinciden. Intenta de nuevo.");
        inputConfirmarContra.focus();
        return;
    }

    const listaMascotas = [];
    const nombresMascotas = contenedorMascotas.querySelectorAll(".nombre-mascota");
    const tiposMascotas = contenedorMascotas.querySelectorAll(".tipo-mascota");

    for (let i = 0; i < nombresMascotas.length; i++) {
        const nombreMascota = nombresMascotas[i].value.trim();

        if (nombreMascota === "") {
            alert(`El nombre de la mascota #${i + 1} no puede estar vacío.`);
            nombresMascotas[i].focus();
            return;
        }
        if (nombreMascota.length > 50) {
            alert(`El nombre de la mascota #${i + 1} no puede tener más de 50 caracteres.`);
            nombresMascotas[i].focus();
            return;
        }

        listaMascotas.push({
            nombre: nombreMascota,
            tipo: tiposMascotas[i].value
        });
    }

    const datosUsuario = [
        nombre,
        email,
        inputTelefono.value.trim(),
        contra,
        listaMascotas
    ];

    const clave = `usuario_${contadorRegistro}`;
    mapaRegistro.set(clave, datosUsuario);

    alert("Registro exitoso");

    console.log("Clave: " + clave);
    console.log("mapaRegistro.get(clave):", mapaRegistro.get(clave));
    console.log("mapaRegistro:", mapaRegistro);

    contadorRegistro++;
    formRegistro.reset();
    generarCamposMascotas(1);
});