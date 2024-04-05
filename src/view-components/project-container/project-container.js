import './project-container.css';

export default class ProjectContainer {
    constructor() {
        this.projectContainer = document.createElement('div');
    }

    load() {
        const body = document.querySelector('body');
        this.projectContainer.classList.add('project-container');
        body.appendChild(this.projectContainer);
    };
};
