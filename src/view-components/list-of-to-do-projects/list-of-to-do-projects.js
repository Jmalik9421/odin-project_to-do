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
    renderProject(project) {
        const fieldContainer = this.loadFieldContainer();
        this.loadCheckbox(fieldContainer);
        this.loadText(project, fieldContainer);
        this.loadDeleteBtn(fieldContainer);
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

    // delete project
    delete() {
        console.log('this is working');
        // const deleteBtnList = document.querySelectorAll('.delete-project-btn');
        // Array.from(deleteBtnList).forEach((btn) => {
        //     btn.addEventListener('click', () => {
        //         console.log('this is working');
        //     });
        // });

    };
};