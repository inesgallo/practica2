const form = document.getElementById('ourForm');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('inputName').value;
    const surname1 = document.getElementById('inputSurname1').value;
    const surname2 = document.getElementById('inputSurname2').value;
    const email = document.getElementById('inputEmail').value;
    const house = document.getElementById('selectCasa').value;
    const course = document.getElementById('inputCurso').value;
    const classValue = document.getElementById('inputClase').value;
    const buttonDelete = document.getElementById('buttonDelete');
    //se crea una nueva fila de celdas en la tabla
    buttonDelete.classList.remove('d-none');
    let row = "<tr><td>" + name + "</td><td>" + surname1 + "</td><td>" + surname2 + "</td><td>" + email + "</td><td>" + house + "</td><td>" + course + "</td><td>" + classValue ;
    
    
    //limpiar form
    form.reset();
    
    document.getElementById('ourTable').getElementsByTagName('tbody')[0].innerHTML += row;
});
