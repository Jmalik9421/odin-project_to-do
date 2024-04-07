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
        this.text = document.createElement('p');
        this.deleteBtn = document.createElement('button');
        this.deleteBtnText = document.createElement('p');
    }

    // loading html elements in the dom
    load() {
        this.loadContainer();
        this.loadHeader();
        this.loadFieldContainer();
        this.loadCheckbox();
        this.loadText();
        this.loadDeleteBtn();
        // this.loadDueDate();
    };
    loadContainer() {
        this.container.classList.add('list-of-to-do-projects-container');
        this.projectContainer.appendChild(this.container);
    };
    loadHeader() {
        this.header.classList.add('to-do-header');
        this.header.textContent = 'Projects to-do';
        this.container.appendChild(this.header);
    };
    loadFieldContainer() {
        this.fieldContainer.classList.add('to-do-field-container');
        this.container.appendChild(this.fieldContainer);
    };
    loadText() {
        this.text.id = 'list-of-to-do-projects-text';
        // this.text.placeholder = 'Essay...'
        this.fieldContainer.appendChild(this.text);
    };
    loadDeleteBtn() {
        this.deleteBtn.classList.add('delete-project-btn');
        this.loadDeleteBtnText();
        this.fieldContainer.appendChild(this.deleteBtn);
    };
    loadDeleteBtnText() {
        this.deleteBtnText.id = 'delete-btn-text';
        this.deleteBtnText.textContent = 'Delete'
        this.deleteBtn.appendChild(this.deleteBtnText);
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
        console.log(list);
    }
};