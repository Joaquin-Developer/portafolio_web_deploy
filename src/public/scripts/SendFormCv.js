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
            if (response.ok) {
                return response.json();
            } else {
                throw "Error al realizar request";
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });

    } else {
        // show alert div error
        console.error("data missing. form not send!");
    }

});
