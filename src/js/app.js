import '../scss/style.scss';
// Marquer un serveur comme favori
function marquerCommeFavori(serveur) {
    serveur.classList.toggle("favori");
    afficherNotification("Serveur est marqué comme favori !");
}

// Afficher une notification
function afficherNotification(message) {
    const notification = document.createElement("div");
    notification.classList.add("alerte");
    notification.textContent = message;
    document.body.appendChild(notification);

    // Supprimer la notification
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Boutons "Favoris"
const boutonsFavoris = document.querySelectorAll(".favoris-button");
boutonsFavoris.forEach((bouton) => {
    bouton.addEventListener("click", () => {
        marquerCommeFavori(bouton.parentElement);
    });
});


