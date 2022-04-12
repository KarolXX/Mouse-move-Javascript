class Animbg {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
    }

    listenCursorMove(event) {
        const { clientX, clientY } = event;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = clientX - centerX;
        const moveY = clientY - centerY;

        this.elements.forEach(element => this.moveElement(element, moveX, moveY))
    }

    moveElement = (el, moveX, moveY) => {
        const ratioX = el.getAttribute('ratioX');
        const ratioY = el.getAttribute('ratioY');
        console.log(ratioY, ratioX)
        el.style.transform = `translate(${moveX * ratioX}px, ${moveY * ratioY}px)`;
    }
}