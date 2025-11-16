// THEME TOGGLE
let dialog = document.getElementById('mode-dialog');
let toggle = document.getElementById('mode-toggle');
let light = document.getElementById('light-mode');
let dark = document.getElementById('dark-mode');
let cancel = document.getElementById('cancel-dialog');
let body = document.body;

toggle.style.display = 'block';
document.addEventListener('DOMContentLoaded', defaultMode);

function applyMode(mode) {
    if (mode == 'dark')  {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

function defaultMode() {
    let localMode = localStorage.getItem('theme');
    applyMode(localMode);
}

toggle.addEventListener('click', () => dialog.showModal());

light.addEventListener('click', () => {
    applyMode('light');
    dialog.close();
});

dark.addEventListener('click', () => {
    applyMode('dark');
    dialog.close();
});  

cancel.addEventListener('click', () => dialog.close());

// VIEW TRANSITION API
const kioskImgs = document.getElementById('kiosk-images');
const galleryView = document.querySelector('.gallery-view');
const projectImg = galleryView.querySelector('img');
const sources = galleryView.querySelectorAll(' source');

kioskImgs.addEventListener('click', updateView);

function updateView(event) {
    event.preventDefault();

    const clickedImg = event.target.closest('img');

    const newAlt = clickedImg.alt;
    const imgName = clickedImg.src.match(/([^/]+)\.png$/)[1];
    const newSrc = `images/${imgName.replace(/-s$/, '')}`;

    const displayNewImg = () => {
        projectImg.src = `${newSrc}-m.png`;
        projectImg.alt = newAlt;

        sources[0].srcset = `${newSrc}.png`; 
        sources[1].srcset = `${newSrc}.png`; 
        sources[2].srcset = `${newSrc}.png`;

    if (!document.startViewTransition) {
        displayNewImg();
        return;
    }
}
    document.startViewTransition(() => displayNewImg());
}