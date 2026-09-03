// ampliar registro segun cantidad de mascotas

const container = document.getElementById('mascotas-container');
const cantidadInput = document.getElementById('cantidad_mascotas');

function generarMascotas(cantidad) {
  container.innerHTML = '';
  for (let i = 1; i <= cantidad; i++) {
    const div = document.createElement('div');
    div.className = 'mascota-bloque mb-4';

    const especieLabel = document.createElement('label');
    especieLabel.className = 'form-label fw-semibold small';
    especieLabel.textContent = 'Especie mascota #' + i + ':';
    especieLabel.htmlFor = 'especie_' + i;

    const select = document.createElement('select');
    select.id = 'especie_' + i;
    select.name = 'especie_' + i;
    select.className = 'form-control rounded-0 border-dark-subtle';

    const grupos = [
      { label: 'Mamíferos', opciones: [['perro', 'Perro'], ['gato', 'Gato']] },
      { label: 'Aves', opciones: [['loro', 'Loro'], ['cuervo', 'Cuervo'], ['lechuza', 'Lechuza']] },
      { label: 'Roedores', opciones: [['rata', 'Rata'], ['hamster', 'Hamster']] },
      { label: 'Otros', opciones: [['otro', 'Criatura misteriosa']] }
    ];

    grupos.forEach(grupo => {
      const optgroup = document.createElement('optgroup');
      optgroup.label = grupo.label;
      grupo.opciones.forEach(opcion => {
        const option = document.createElement('option');
        option.value = opcion[0];
        option.textContent = opcion[1];
        optgroup.appendChild(option);
      });
      select.appendChild(optgroup);
    });

    const nomLabel = document.createElement('label');
    nomLabel.className = 'form-label fw-semibold small';
    nomLabel.textContent = 'Nombre mascota #' + i + ':';
    nomLabel.htmlFor = 'nom_mascota_' + i;

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'nom_mascota_' + i;
    input.name = 'nom_mascota_' + i;
    input.className = 'form-control rounded-0 border-dark-subtle';

    div.appendChild(especieLabel);
    div.appendChild(select);
    div.appendChild(document.createElement('br'));
    div.appendChild(nomLabel);
    div.appendChild(input);
    div.appendChild(document.createElement('br'));

    container.appendChild(div);
  }
}

cantidadInput.addEventListener('input', function () {
  let cantidad = parseInt(this.value, 10);
  if (isNaN(cantidad)) cantidad = 1;
  if (cantidad < 1) cantidad = 1;
  if (cantidad > 5) cantidad = 5;
  this.value = cantidad;
  generarMascotas(cantidad);
});

generarMascotas(parseInt(cantidadInput.value, 10) || 1);

// usuarios hardcodeados para login

const usuarios = new Map();

usuarios.set("felipe1@ejemplo.cl", {
  password: "ColoColo",
  nombre: "Felipe Fernandez",
  telefono: "+56912345678",
  mascotas: [
    { especie: "perro", nombre: "TepoTepo" },
    { especie: "gato", nombre: "YoNoFui" }
  ]
});

// validar login

const botonIngresar = document.getElementById('#boton-ingresar');
if (botonIngresar) {
  botonIngresar.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.getElementById('emailInput').value.trim();
    const password = document.getElementById('passwordInput').value;

    console.log("Email ingresado:", email);
    console.log("Contraseña ingresada:", password);

    if (!usuarios.has(email)) {
      alert('Usuario no encontrado.');
      return;
    }

    const usuario = usuarios.get(email);
    if (usuario.password !== password) {
      alert('Contraseña incorrecta.');
      return;
    }

    let pets = "Mascotas de " + usuario.nombre + ":\n";
    for (let i = 0; i < usuario.mascotas.length; i++) {
      pets += (i + 1) + ". " + usuario.mascotas[i].especie + " - " + usuario.mascotas[i].nombre + "\n";
    }
    alert(pets);
  });
}

// validacion registro 

const mapaRegistro = new Map();

let contadorRegistro = 1;

const formRegistro = document.querySelector('form-registro');
const inputNombre = document.querySelector('#nombreInput');
const inputEmail = document.querySelector('#emailInput');
const inputTelefono = document.querySelector('#telefonoInput');
const inputPassword = document.querySelector('#passwordInput');
const inputConfirmPassword = document.querySelector('#confirmPasswordInput');

if (formRegistro) {
  formRegistro.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const datosUsuario = [
      inputNombre.value.trim(),
      inputEmail.value.trim(),
      inputTelefono.value.trim(),
      inputPassword.value(),
      inputConfirmPassword.value()
    ];

    const clave = `usuario_${contadorRegistros}`;
    mapaRegistro.set(clave, datosUsuario);

    alert(`Registro exitoso para ${datosUsuario[0]} con email ${datosUsuario[1]}.`);
    console.log(`Clave: ${clave}`);
    console.log("mapaRegistro.get:", mapaRegistro.get(clave));
    console.log("mapaRegistro:", mapaRegistro);

    contadorRegistro++;
    formRegistro.reset();
  });
}
