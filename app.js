function addRow() {
    // Declaramos variables: A las primeras, le damos el valor de los input con los id's y a la última, se crea una fila y se almacenan los valores de las 3 variables anteriores en cada celda de dicha fila

    var name = document.getElementById('name').value;
    var surname1 = document.getElementById('surname1').value;
    var surname2 = document.getElementById('surname2').value;
    var role = document.getElementById('role').value;
    var course = document.getElementById('course').value;
    var classValue = document.getElementById('class').value;
    var email = document.getElementById('email').value;

    var row = "<tr><td>" + name + "</td><td>" + surname1 + "</td><td>" + surname2 + "</td><td>" + role + "</td><td>" + course + "</td><td>" + classValue + "</td><td>" + email + "</td></tr>";

    // Se agrega la fila anterior de la table con el id y nos situaciomos dentro del tag 'tbody'.
    document.getElementById('myTable').getElementsByTagName('tbody')[0].innerHTML += row;

    // Por último, se limpia los valores del Form
    document.getElementById('myForm').reset();
}