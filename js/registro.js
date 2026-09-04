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
          <input type="text" class="form-control form-control-sm nombre-mascota" placeholder="Nombre" required>
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

    const contra = inputContra.value;
    const confirmarContra = inputConfirmarContra.value;

    if (contra !== confirmarContra) {
        alert("Las contraseñas no coinciden. Intenta de nuevo.");
        inputConfirmarContra.focus();
        return;
    }

    const listaMascotas = [];
    const nombresMascotas = contenedorMascotas.querySelectorAll(".nombre-mascota");
    const tiposMascotas = contenedorMascotas.querySelectorAll(".tipo-mascota");

    nombresMascotas.forEach((input, index) => {
        listaMascotas.push({
            nombre: input.value.trim(),
            tipo: tiposMascotas[index].value
        });
    });

    const datosUsuario = [
        inputNombre.value.trim(),
        inputEmail.value.trim(),
        inputTelefono.value.trim(),
        inputContra,
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