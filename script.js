const titleActive = document.querySelector(".title-active");
const titleClosed = document.querySelector(".title-closed");



titleActive.addEventListener("click", showActiveRequest);
function showActiveRequest() {
    titleActive.style.borderBottom = "2px solid #0098DA";
    titleClosed.style.borderBottom = "none";
}

            
titleClosed.addEventListener("click", showClosedRequest);
function showClosedRequest() {
    titleClosed.style.borderBottom = "2px solid #0098DA";
    titleActive.style.borderBottom = "none";
}

