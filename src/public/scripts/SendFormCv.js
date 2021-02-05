/**
 * Script con eventos para modificar texto del mensaje
 */

const txtName = document.querySelector("#txtName"); 
const txtCompanyName = document.querySelector("#txtCompanyName");
const txtMessage = document.querySelector("#txtMessage");
const txtMail = document.querySelector("#txtMail");

addEventListener("load", function() {
    // datos de ejemplo al cargar el html
    txtName.value = "Juan"; 
    txtCompanyName.value = "Empresa X";
    setMessage();
});

txtName.addEventListener("change", setMessage);
txtName.addEventListener("keydown", setMessage);
txtName.addEventListener("keyup", setMessage);

txtCompanyName.addEventListener("change", setMessage);
txtCompanyName.addEventListener("keydown", setMessage);
txtCompanyName.addEventListener("keyup", setMessage);

function setMessage() {

    const text = [
        "¡Hola! \n",
        "Mi nombre es " + txtName.value + "\n",
        "Te contacto de la empresa " + txtCompanyName.value + "\n",
        "Me comunico contigo para solicitarte una copia de tu Curriculum en PDF. \n",
        "Saludos!"
    ];

    txtMessage.value = "";
    txtMessage.value += text[0]
    if (txtName.value.length !== 0) txtMessage.value += text[1];
    if (txtCompanyName.value.length !== 0) txtMessage.value += text[2];
    txtMessage.value += text[3];
    txtMessage.value += text[4];

}

// REQUEST:
document.querySelector("#btnRequestForm").addEventListener("click", function(evt) {
    evt.preventDefault();
    // showAlert("sending", "Enviando solicitúd de currículum");

    if (txtMail.value && txtMessage.value) {

        fetch("/request-cv", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: txtMail.value,
                message: txtMessage.value
            })
        })
        .then((response) => {
            console.log(`Estado: ${response.status}`);

            if (response.status === 500) {
                throw "Error interno del servidor: No se pudo completar la "
                    + "solicitúd.\n Vuelva a intentarlo mas tarde.";
            } else if (response.status === 200) {
                showAlert("ok", "Solicitúd enviada con éxito");
                return response.json();
            }
        })
        .then(data => console.log(data))
        .catch(error => {
            console.error(error); 
            showAlert("error", "");
        });

    } else {
        console.error("data missing. form not send!");
        showAlert("error", "Error al enviar la solicitúd:\nDebe completar todos los datos solicitados");
    }

});

let requestAlert = document.getElementById("requestAlert");

function showAlert(typeAlert, message) {
    requestAlert.classList.remove("alert-danger", "alert-success");
    // delete child of requestAlert:
    if (requestAlert.firstChild)
        requestAlert.removeChild(requestAlert.firstChild);

    if (typeAlert === "error") {
        requestAlert.classList.add("alert-danger")
    } else {
        requestAlert.classList.add("alert-success");
    }

    requestAlert.appendChild(document.createTextNode(message));
    requestAlert.style.display = "block";  // set visibility

    setTimeout(() => {
        requestAlert.style.display = "none";
    }, 5000);

}
