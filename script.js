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
