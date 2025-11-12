let dialog = document.getElementById('mode-dialog');
let toggle = document.getElementById('mode-toggle');
let light = document.getElementById('light-mode');
let dark = document.getElementById('dark-mode');
let cancel = document.getElementById('cancel-dialog');
let body = document.body;

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