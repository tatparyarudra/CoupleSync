document.getElementById("emotion-slider").addEventListener("input", function() {
    document.getElementById("emotion-level").textContent = this.value;
});

function startGame(cardType) {
    let message = "";

    switch(cardType) {
        case 'communication':
            message = "Let's improve communication skills!";
            break;
        case 'trust':
            message = "Building trust is key!";
            break;
        default:
            message = "Let's work on our relationship!";
            break;
    }

    alert(message);
}
