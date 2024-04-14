import './list-of-to-do-projects.css';

export default class ListOfToDoProjects {
    constructor() {
        this.projectContainer = document.querySelector('.project-container');
        this.container = document.createElement('div');
        this.header = document.createElement('h1');
    }

    // loading html elements in the dom
    load() {
        this.loadContainer();
        this.loadHeader();
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

    // pushing added project to this list-of-to-do-project list
    renderList(list) {
        const fieldContainer = this.loadFieldContainer();
        this.loadCheckbox(fieldContainer);
        this.loadText(list, fieldContainer);
        this.loadDeleteBtn(fieldContainer);
        // this.loadDueDate();
        return list;
    }
    loadFieldContainer() {
        const fieldContainer = document.createElement('div');
        fieldContainer.classList.add('to-do-field-container');

        this.container.appendChild(fieldContainer);

        return fieldContainer;
    };
    loadCheckbox(fieldContainer) {
        // checkbox container
        const checkboxContainer = document.createElement('label');
        checkboxContainer.classList.add('checkbox-container');

        // checkbox input
        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';

        // checkbox
        const checkbox = document.createElement('span');
        checkbox.classList.add('checkbox');

        checkboxContainer.appendChild(checkboxInput);
        checkboxContainer.appendChild(checkbox);
        fieldContainer.appendChild(checkboxContainer);

        return [checkboxContainer, checkboxInput];
    };
    loadText(project, fieldContainer) {
        const text = document.createElement('p');
        text.id = 'list-of-to-do-projects-text';
        text.textContent = project;

        fieldContainer.appendChild(text);

        return text;
    };
    loadDeleteBtn(fieldContainer) {
        // delete btn
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-project-btn');

        // delete btn text
        const deleteBtnText = this.loadDeleteBtnText();

        deleteBtn.appendChild(deleteBtnText);
        fieldContainer.appendChild(deleteBtn);
        
        return deleteBtn;
    };
    loadDeleteBtnText() {
        const deleteBtnText = document.createElement('p');
        deleteBtnText.id = 'delete-btn-text';
        deleteBtnText.textContent = 'Delete'

        return deleteBtnText;
    };



    // i am here
    // need to:
    // render fieldContainer and all of its children when renderList is called 
    // need to associate index of added project in list to its html element
    // need to associate delete btn with each html element (try using data-values)
    // need to delete element at index of list when delete btn is pressed
    // 
};