import './add-project.css';

export default class AddProject {
    constructor() {
        this.projectContainer = document.querySelector('.project-container');
        this.container = document.createElement('div');
        this.header = document.createElement('h1');
        this.fieldContainer = document.createElement('div');
        this.checkboxContainer = document.createElement('label');
        this.checkboxInput = document.createElement('input');
        this.checkbox = document.createElement('span');
        this.textInput = document.createElement('input');
        this.addBtn = document.createElement('button');
    }

    // loading html elements in the dom
    load() {
        this.loadContainer();
        this.loadHeader();
        this.loadFieldContainer();
        this.loadCheckbox();
        this.loadTextInput();
        this.loadAddBtn();
        // this.loadDueDate();
    };
    loadContainer() {
        this.container.classList.add('add-project-container');
        this.projectContainer.appendChild(this.container);
    }
    loadHeader() {
        this.header.classList.add('add-project-header');
        this.header.textContent = 'Add project';
        this.container.appendChild(this.header);
    };
    loadFieldContainer() {
        this.fieldContainer.classList.add('add-field-container');
        this.container.appendChild(this.fieldContainer);
    };
    loadTextInput() {
        this.textInput.type = 'text';
        this.textInput.id = 'text-input';
        this.textInput.placeholder = 'Groceries...'
        this.fieldContainer.appendChild(this.textInput);
    };
    loadAddBtn() {
        this.addBtn.classList.add('add-project-btn');
        this.addBtn.textContent = 'Add';
        this.fieldContainer.appendChild(this.addBtn);
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

    // specifying logic to add project
    add() {
        this.addBtn.addEventListener('click', () => {
            const project = this.textInput.value;
            this.emitAddedProjectEvent(project); // emit event when project is added
            this.clearTextInputField();
        });
    }
    emitAddedProjectEvent(project) {
        const event = new CustomEvent('projectAdded', { detail: project });
        document.dispatchEvent(event);
    }
    clearTextInputField() {
        this.textInput.value = ''
    }
};