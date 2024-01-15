function addRow(){
    // Declaramos 4 variables: A 3, le damos el valor de los input con los id's y a 1, crea una fila y se almacenan los valores de las 3 variables anteriores en cada celda de dicha fila
    let name = document.getElementById('name').value;
    let firstSurname = document.getElementById('firstSurname').value;
    let secondSurname = document.getElementById('secondSurname').value;
    let row = "<tr><td>" + name + "</td><td>" + firstSurname + "</td><td>" + secondSurname + "</td></tr>";
    // Se agrega la fila anterior de la table con el id y nos situaciomos dentro del tag 'tbody'.
    document.getElementById('tables').getElementsByTagName('tbody')[0].innerHTML += row;
    // Por último, se limpia los valores del Form
    document.getElementById('myForm').reset();
}

addRow();