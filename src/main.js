import './style.css';
import ProjectContainer from './view-components/project-container/project-container.js'
import Navbar from './view-components/navbar/navbar.js'
import AddProject from './view-components/add-project/add-project.js'
import ListOfToDoProjects from './view-components/list-of-to-do-projects/list-of-to-do-projects.js'
import AddTask from './view-components/list-of-to-do-projects/modal-list-of-tasks/add-task/add-task.js'
import ListOfToDoTasks from './view-components/list-of-to-do-projects/modal-list-of-tasks/list-of-to-do-tasks/list-of-to-do-tasks.js'
import ListOfCompletedTasks from './view-components/list-of-to-do-projects/modal-list-of-tasks/list-of-completed-tasks/list-of-completed-tasks.js'
import ListofCompletedProjects from './view-components/list-of-completed-projects/list-of-completed-projects.js'
import Footer from './view-components/footer/footer.js'

const projectContainer = new ProjectContainer;
projectContainer.load();

const navbar = new Navbar;
navbar.load();

const addProject = new AddProject;
addProject.load();
addProject.add();
let listOfToDoProjectsList = [];
let deleteBtns = [];

const listOfToDoProjects = new ListOfToDoProjects;
listOfToDoProjects.load();

document.addEventListener('projectAdded', (event) => {
    const projectToAdd = event.detail;
    listOfToDoProjectsList.push(projectToAdd);
    if (projectToAdd !== '') {
        listOfToDoProjects.renderProject(projectToAdd);
        const deleteBtn = document.querySelector('.delete-project-btn');
        deleteBtns.push(deleteBtn);
        // i am here
        // i need to add data-values with each of the delete btns when they are created
        // then i will be able to call the .delete() method to delete the entire field container associated with the delete btn
    };
});

const addTask = new AddTask;
addTask.load();

const listOfToDoTasks = new ListOfToDoTasks;
listOfToDoTasks.load();

const listOfCompletedTasks = new ListOfCompletedTasks;
listOfCompletedTasks.load();

const listofCompletedProjects = new ListofCompletedProjects;
listofCompletedProjects.load();

const footer = new Footer;
footer.load();
