const cards = document.querySelectorAll('.card');

cards.forEach(card => {

card.addEventListener('mouseenter', ()=>{

card.style.transform = "scale(1.05)";

});

card.addEventListener('mouseleave', ()=>{

card.style.transform = "scale(1)";

});

});
function openPopup() {
    document.getElementById("paymentPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("paymentPopup").style.display = "none";
}

window.onclick = function(event) {
    let popup = document.getElementById("paymentPopup");

    if (event.target == popup) {
        popup.style.display = "none";
    }
}
function payTelma(tool, amount) {

    // Manokatra MVola
    window.location.href =
    "tel:*111*1*2*0341088432*" + amount + "%23";

    // Rehefa afaka 3 segondra dia misokatra WhatsApp
    setTimeout(function(){

        let message =
        "Bonjour, j'ai payé " + tool +
        " - " + amount +
        " Ar. Voici ma preuve de paiement.";

        window.open(
        "https://wa.me/261335492313?text=" +
        encodeURIComponent(message),
        "_blank"
        );

    }, 3000);
}

function toggleMenu(){
    document.getElementById("sideMenu").classList.toggle("active");
}
// ===== SEARCH TOOL =====
const searchInput = document.getElementById("searchTool");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();
        const cards = document.querySelectorAll(".right .card");

        cards.forEach(function(card) {
            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}
function toggleActivation(btn) {
    const menu = btn.nextElementSibling;

    document.querySelectorAll(".activation-menu").forEach(item => {
        if (item !== menu) {
            item.style.display = "none";
        }
    });

    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function pay(duration, price) {

    localStorage.setItem("duration", duration);
    localStorage.setItem("price", price);

    window.location.href = "tel:*111*1*2*0341088432*" + price + "%23";
}

window.addEventListener("focus", function () {

    let duration = localStorage.getItem("duration");
    let price = localStorage.getItem("price");

    if (duration) {

        let message =
            "Salama,\n\n" +
            "Vita ny paiement Instant Activation.\n\n" +
            "Durée : " + duration + "\n" +
            "Montant : " + price + " Ar\n\n" +
            "Ity ny preuve.";

        document.getElementById("whatsappBtn").href =
            "https://wa.me/261335492313?text=" + encodeURIComponent(message);

        document.getElementById("proofPopup").style.display = "flex";

        localStorage.removeItem("duration");
        localStorage.removeItem("price");
    }

});

function closePopup() {
    document.getElementById("proofPopup").style.display = "none";
}