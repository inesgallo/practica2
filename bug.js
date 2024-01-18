const form = document.getElementById('ourTable');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let transactionFormData = new FormData(form);
    let transactionObj = convertFormDataToTransactionObj(transactionFormData)

    if (isValid)
}
)

function isValid