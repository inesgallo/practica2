function addRow() {
    // Declaramos variables: A las primeras, le damos el valor de los input con los id's y a la última, se crea una fila y se almacenan los valores de las 3 variables anteriores en cada celda de dicha fila

    let name = document.getElementById('name').value;
    let surname1 = document.getElementById('surname1').value;
    let surname2 = document.getElementById('surname2').value;
    let role = document.getElementById('role').value;
    let course = document.getElementById('course').value;
    let classValue = document.getElementById('class').value;
    let email = document.getElementById('email').valulet
    let row = "<tr><td>" + name + "</td><td>" + surname1 + "</td><td>" + surname2 + "</td><td>" + role + "</td><td>" + course + "</td><td>" + classValue + "</td><td>" + email + "</td></tr>";

    // Se agrega la fila anterior de la table con el id y nos situaciomos dentro del tag 'tbody'.
    document.getElementById('myTable').getElementsByTagName('tbody')[0].innerHTML += row;

    // Por último, se limpia los valores del Form
    document.getElementById('myForm').reset();
}