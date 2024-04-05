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
const navbar = new Navbar;
const addProject = new AddProject;
const listOfToDoProjects = new ListOfToDoProjects;
const addTask = new AddTask;
const listOfToDoTasks = new ListOfToDoTasks;
const listOfCompletedTasks = new ListOfCompletedTasks;
const listofCompletedProjects = new ListofCompletedProjects;
const footer = new Footer;

projectContainer.load();
navbar.load();
addProject.load();
listOfToDoProjects.load();
addTask.load();
listOfToDoTasks.load();
listOfCompletedTasks.load();
listofCompletedProjects.load();
footer.load();
