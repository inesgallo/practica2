const form = document.getElementById('ourForm');
const tbody = document.getElementById('ourTable').getElementsByTagName('tbody')[0];
const buttonLoadLIst = document.getElementById('loadList');


buttonLoadLIst.addEventListener('click',function(){
    alert('¡La lista se ha cargado exitosamente!')
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('inputName').value;
    const surname1 = document.getElementById('inputSurname1').value;
    const surname2 = document.getElementById('inputSurname2').value;
    const email = document.getElementById('inputEmail').value;
    const house = document.getElementById('selectCasa').value;
    const course = document.getElementById('inputCurso').value;
    const classValue = document.getElementById('inputClase').value;

    // CREACION DE BOTON
    const buttonDelete = document.createElement("button");
    buttonDelete.type = 'button';
    buttonDelete.classList.add('d-none'); 
    buttonDelete.id = 'buttonDelete';

    // Crear una nueva fila de celdas en la tabla
    let row = "<tr><td>" + name + "</td><td>" + surname1 + "</td><td>" + surname2 + "</td><td>" + email + "</td><td>" + house + "</td><td>" + course + "</td><td>" + classValue + "</td></tr>";

    // Crear un nuevo elemento tr y añadir las celdas
    const newRow = document.createElement('tr');
    newRow.innerHTML = row;

    // Crear una nueva celda para el botón y añadir el botón
    const tdButton = document.createElement('td');
    tdButton.appendChild(buttonDelete);
    
    // Añadir la celda del botón a la fila
    newRow.appendChild(tdButton);

    // Añadir la nueva fila al tbody
    tbody.appendChild(newRow);

    // Mostrar el botón después de llenar la tabla
    buttonDelete.classList.remove('d-none');

    // Limpiar el formulario
    form.reset();
    

    buttonDelete.addEventListener ('click', function deleteRow(){
        buttonDelete.closest('tr').remove();
    });
});

