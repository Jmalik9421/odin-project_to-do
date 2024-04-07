import './list-of-to-do-projects.css';

export default class ListOfToDoProjects {
    constructor() {
        this.projectContainer = document.querySelector('.project-container');
        this.container = document.createElement('div');
        this.header = document.createElement('h1');
        this.fieldContainer = document.createElement('div');
        this.checkboxContainer = document.createElement('label');
        this.checkboxInput = document.createElement('input');
        this.checkbox = document.createElement('span');
        this.form = document.createElement('form');
        this.textInput = document.createElement('input');
    }

    // loading html elements in the dom
    load() {
        this.loadContainer();
        this.loadHeader();
        this.loadFieldContainer();
        this.loadCheckbox();
        this.loadForm();
        // this.loadDueDate();
    };
    loadContainer() {
        this.container.classList.add('list-of-to-do-projects-container');
        this.projectContainer.appendChild(this.container);
    };
    loadHeader() {
        this.header.classList.add('list-of-to-do-projects-header');
        this.header.textContent = 'Projects to-do';
        this.container.appendChild(this.header);
    };
    loadFieldContainer() {
        this.fieldContainer.classList.add('add-field-container');
        this.container.appendChild(this.fieldContainer);
    };
    loadForm() {
        this.form.classList.add('list-of-to-do-projects-form');
        this.loadTextInput();
        this.fieldContainer.appendChild(this.form);
    };
    loadTextInput() {
        this.textInput.type = 'text';
        this.textInput.id = 'list-of-to-do-projects-text-input';
        this.textInput.placeholder = 'Essay...'
        this.form.appendChild(this.textInput);
    };
    loadCheckbox() {
        this.loadCheckboxContainer();
        this.loadCheckboxInput();
    };
    loadCheckboxContainer() {
        this.checkboxContainer.classList.add('checkbox-container');
        this.fieldContainer.appendChild(this.checkboxContainer);
    };
    loadCheckboxInput() {
        this.checkboxInput.type = 'checkbox';
        this.checkbox.classList.add('checkbox');

        this.checkboxContainer.appendChild(this.checkboxInput);
        this.checkboxContainer.appendChild(this.checkbox);
    };

    // pushing added project to this list-of-to-do-project list
    renderList(list) {
        console.log(listOfToDoProjects);
    }
};