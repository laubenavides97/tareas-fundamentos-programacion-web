const menuLinks = document.querySelectorAll(".MenuOption, #MenuSelected");
const currentPath = window.location.pathname;

menuLinks.forEach(link => {
    if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href'))) {
        link.setAttribute('id', 'MenuSelected');
    } else {
        link.removeAttribute('id');
    }
});
