// recupero la bacheca dall'HTML, qui dentro metterò le card
const cardsContainer = document.querySelector(".cards");

// url dell'API
const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";

// chiamo l'API con fetch
fetch(apiUrl)
    .then(function (response) {

        // controllo che la risposta sia andata a buon fine
        if (!response.ok) {
            throw new Error("Errore nella risposta del server: " + response.status);
        }

        // converto la risposta in JSON
        return response.json();
    })

    .then(function (pictures) {

        // stampo in console i dati ricevuti per verificare che siano corretti
        console.log("Dati ricevuti:", pictures);

        // ciclo su ogni foto e creo la card corrispondente
        pictures.forEach(function (picture) {

            // creo la card e la aggiungo alla bacheca
            const card = createCard(picture);
            cardsContainer.appendChild(card);
        });
    })
    .catch(function (error) {

        // se qualcosa va storto stampo l'errore in console
        console.error("Errore durante il caricamento:", error);

        // mostro un messaggio di errore nella pagina
        cardsContainer.innerHTML = "<p>Errore nel caricamento delle foto.</p>";
    })
    .finally(function () {
        console.log("Chiamata API terminata.");
    });