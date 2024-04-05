import projectContainer from './view-components/project-container/project-container.js'
import navbar from './view-components/navbar/navbar.js'
import addProject from './view-components/add-project/add-project.js'
import listOfToDoProjects from './view-components/list-of-to-do-projects/list-of-to-do-projects.js'
import addTask from './view-components/list-of-to-do-projects/modal-list-of-tasks/add-task/add-task.js'
import listOfToDoTasks from './view-components/list-of-to-do-projects/modal-list-of-tasks/list-of-to-do-tasks/list-of-to-do-tasks.js'
import listOfCompletedTasks from './view-components/list-of-to-do-projects/modal-list-of-tasks/list-of-completed-tasks/list-of-completed-tasks.js'
import listofCompletedProjects from './view-components/list-of-completed-projects/list-of-completed-projects.js'
import footer from './view-components/footer/footer.js'

projectContainer();
navbar();
addProject();
listOfToDoProjects();
addTask();
listOfToDoTasks();
listOfCompletedTasks();
listofCompletedProjects();
footer();
