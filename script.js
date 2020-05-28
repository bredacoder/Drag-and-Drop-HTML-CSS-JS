/**help */
function log(message) {
    console.log('> ' + message)
}

//*app */
const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    log('CARD: Start draggin')
}

function drag() {
    log('CARD: Is dragging')
}

function dragend() {
    log('CARD:Stop drag')
}