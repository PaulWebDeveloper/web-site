/**          Nav-drop-menu          */
const dropMenu = document.querySelector('nav ul');
let count = 1;

document.getElementById('tab').onclick = () => {
    if (count) {
        dropMenu.className = 'nav__drop-menu';
        count = 0;
    } else {
        dropMenu.className = '';
        count = 1;
    }
};
