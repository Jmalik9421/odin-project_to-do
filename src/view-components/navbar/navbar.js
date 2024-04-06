import './navbar.css';
import Icon from './to-do-list.png';

export default class Navbar {
    constructor() {
        this.projectContainer = document.querySelector('.project-container');
        this.container = document.createElement('div');
        this.header = document.createElement('h1');
        this.icon = new Image();
    }

    async load() {
        this.loadContainer();
        this.loadIcon();
        this.loadHeader();
    };

    loadContainer() {
        this.container.classList.add('navbar-container');
        this.projectContainer.appendChild(this.container);
    };

    loadIcon() {
        this.icon.src = Icon;
        this.icon.classList.add('navbar-icon');
        this.container.appendChild(this.icon);
    };

    loadHeader() {
        this.header.textContent = 'To-do list'
        this.header.classList.add('navbar-header');
        this.container.appendChild(this.header);
    };
};