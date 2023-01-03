// Trova il pulsante
var button = document.getElementById("myButton");

// Aggiungi un gestore di eventi al pulsante che chiama la funzione scrollDown quando viene premuto
button.addEventListener("click", scrollDown);

function scrollDown() {
  // Inizia a scorrere la pagina verso il basso a un tasso di 10 pixel al frame
  var scrollStep = 20;

  // Chiama la funzione scrollStep con requestAnimationFrame
  function scroll() {
    // Fai scendere la pagina di scrollStep pixel
    window.scrollBy(0, scrollStep);

    // Se la posizione dello scroll è inferiore a 1000 pixel (o qualsiasi altra altezza desiderata)
    if (window.pageYOffset < 820) {
      // Richiama scroll con requestAnimationFrame per continuare a scorrere la pagina
      requestAnimationFrame(scroll);
    }
  }

  // Inizia la funzione scroll
  scroll();
}
