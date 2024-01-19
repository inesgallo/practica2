const form = document.getElementById('ourForm');
const tbody = document.getElementById('ourTable').getElementsByTagName('tbody')[0];
const buttonLoadLIst = document.getElementById('loadList');


buttonLoadLIst.addEventListener('click', function () {
    alert('¡La lista se ha cargado exitosamente!')
})

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('inputName').value;
    const surname1 = document.getElementById('inputSurname1').value;
    const surname2 = document.getElementById('inputSurname2').value;
    const email = document.getElementById('inputEmail').value;
    const house = document.getElementById('selectCasa').value;
    const course = document.getElementById('inputCurso').value;
    const classValue = document.getElementById('inputClase').value;

    const buttonDelete = document.createElement("button");
    buttonDelete.type = 'button';
    buttonDelete.classList.add('d-none');
    buttonDelete.id = 'buttonDelete';

    let row = "<tr><td>" + name + "</td><td>" + surname1 + "</td><td>" + surname2 + "</td><td>" + email + "</td><td>" + house + "</td><td>" + course + "</td><td>" + classValue + "</td></tr>";

    const newRow = document.createElement('tr');
    newRow.innerHTML = row;

    const tdButton = document.createElement('td');
    tdButton.appendChild(buttonDelete);

    newRow.appendChild(tdButton);

    tbody.appendChild(newRow);

    buttonDelete.classList.remove('d-none');

    form.reset();

    buttonDelete.addEventListener('click', function deleteRow() {
        buttonDelete.closest('tr').remove();
    });
});

