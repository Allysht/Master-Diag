const close_btn = document.getElementById('close-btn');
const open_btn = document.getElementById('open-btn');
const pop_up = document.getElementById('pop-up');
const phone = document.getElementsByClassName('phone');

function openPopup() {
    pop_up.style.display = 'flex';
}

function closePopup() {
    pop_up.style.display = 'none';
}

open_btn.addEventListener('click', () => {
    openPopup();
});

close_btn.addEventListener('click', () => {
    closePopup();
});

phone[0].addEventListener('click',() => {
    window.open('tel:+40 761 404 093');
} )