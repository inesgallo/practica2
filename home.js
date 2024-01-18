
function addRow (){
    let nombre = document.getElementById('inputName').value;
    let surname1 = document.getElementById('inputSurname1').value;
    let surname2 = document.getElementById('inputSurname2').value;
    let email = document.getElementById('inputEmail').value;
    let home = document.getElementById('selectCasa').value;
    let course = document.getElementById('inputCurso').value;
    let classValue = document.getElementById('inputClase').value;


    let row = "<tr><td>" + nombre + "</td><td>" + surname1 + "</td><td>" + surname2 + "</td><td>" + email + "</td><td>" + home + "</td><td>" + course + "</td><td>" + classValue + "</td></tr>";
    
    console.log("Fila creada:", row);
    document.getElementById('ourTable').getElementsByTagName('tbody')[0].innerHTML += row;

    // Por último, se limpia los valores del Form
    document.getElementById('ourForm').reset();
}




 


