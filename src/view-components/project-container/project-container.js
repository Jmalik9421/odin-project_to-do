import './project-container.css';

export default class ProjectContainer {
    load() {
        const body = document.querySelector('body');
        const container = document.createElement('div')
        container.classList.add('container');
        body.appendChild(container);
    };
};
