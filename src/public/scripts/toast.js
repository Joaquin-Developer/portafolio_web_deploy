
// funcion para cerrar el toast
function hideToast() {
    var toast = document.getElementById("myToast");
    toast.className = "close";
    toast.className = toast.className.replace("close", "");
}