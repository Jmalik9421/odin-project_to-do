import './navbar.css';
import Icon from './to-do-list.png';

export default class Navbar {
    constructor() {
        this.projectContainer = document.querySelector('.project-container');
        this.navbarContainer = document.createElement('div');
        this.header = document.createElement('h1');
        this.icon = new Image();
    }

    async load() {
        this.loadNavbarContainer();
        this.loadIcon();
        this.loadHeader();
    };

    loadNavbarContainer() {
        this.navbarContainer.classList.add('navbar-container');
        this.projectContainer.appendChild(this.navbarContainer);
    };

    loadIcon() {
        this.icon.src = Icon;
        this.icon.classList.add('navbar-icon');
        this.navbarContainer.appendChild(this.icon);
    };

    loadHeader() {
        this.header.textContent = 'To-do list'
        this.header.classList.add('navbar-header');
        this.navbarContainer.appendChild(this.header);
    };
};