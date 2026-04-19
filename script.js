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