import './add-project.css';

export default class AddProject {
    constructor() {
        this.projectContainer = document.querySelector('.project-container');
        this.container = document.createElement('div');
        this.checkboxContainer = document.createElement('label');
        this.checkboxInput = document.createElement('input');
        this.checkbox = document.createElement('span');
        this.form = document.createElement('form');
        this.textInput = document.createElement('input');
    }

    load() {
        this.loadContainer();
        this.loadCheckbox();
        this.loadForm();
        // this.loadDueDate();
    };

    loadContainer() {
        this.container.classList.add('add-project-container');
        this.projectContainer.appendChild(this.container);
    }

    loadForm() {
        this.form.classList.add('add-project-form');
        this.loadTextInput();
        this.container.appendChild(this.form);
    }

    loadTextInput() {
        this.textInput.type = 'text';
        this.textInput.id = 'add-project-text-input';
        this.textInput.placeholder = 'Groceries...'
        this.form.appendChild(this.textInput);
    }

    loadCheckbox() {
        this.loadCheckboxContainer();
        this.loadCheckboxInput();

    }

    loadCheckboxContainer() {
        this.checkboxContainer.classList.add('checkbox-container');
        this.container.appendChild(this.checkboxContainer);
    }

    loadCheckboxInput() {
        this.checkboxInput.type = 'checkbox';
        this.checkbox.classList.add('checkbox');

        this.checkboxContainer.appendChild(this.checkboxInput);
        this.checkboxContainer.appendChild(this.checkbox);
    };
};