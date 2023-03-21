function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}import{assignID,createTask,createProject,currentDiv,getCurrentID,showProjects,showTasks,removeTask,pushProject,pushTask}from"./get.js";export function getUserName(){return document.getElementById("usernameInput").value}export function elementFromHtml(e){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstElementChild}export function addGrid(){var e=elementFromHtml('\n        <div class="grid-container">\n            <div id="welcome"></div>\n            <div id="details"></div>\n            <div id="projects">\n              <div>\n                <h1>Projects</h1>\n              </div>\n              <div id="projects-grid">\n                <div id=\'project0\' class="projectItem"><p>Default Project</p></div>\n              </div>\n              <button type="submit" id="createProject">Create New</button>\n            </div>\n            <div id="todos">\n              <div class="todosTitle">\n                <h1>To-dos</h1>\n                <button type="submit" id="createNewTask">Create a new task</button>\n              </div>\n\n              <div id="tasks">\n              </div>\n\n            </div>\n        </div>\n    ');document.body.appendChild(e),currentDiv("project1")}export function createNewTaskFunction(){document.getElementById("createNewTask").addEventListener("click",(function(){createToDoForm(),createTaskButtonFunction()}))}function createTaskButtonFunction(){var e=document.getElementById("submitForm"),t=document.getElementById("tasks"),n=document.getElementById("titleInput"),r=document.getElementById("dueDateInput"),o=document.getElementById("priorityInput"),i=document.getElementById("descriptionInput"),a=document.getElementById("notesInput");e.addEventListener("click",(function(e){e.preventDefault();var c=createTask(n.value,r.value,o.value,i.value,a.value,assignID());pushTask(c);var l,d=_createForOfIteratorHelper(showProjects());try{for(d.s();!(l=d.n()).done;){var u=l.value;if(u.id==getCurrentID()){u.pushTask(c);var s=elementFromHtml('\n            <div class="task-item '.concat(c.taskID,'">\n              <h3>Task-').concat(c.title,"</h3>\n              <p>Due: ").concat(c.dueDate,"</p>\n              <p>Priority: ").concat(c.priority,"</p>\n              <p>Description: ").concat(c.description,"</p>\n            </div>\n          "));t.appendChild(s)}}}catch(e){d.e(e)}finally{d.f()}showTaskDetail(),n.value="",r.value="",o.value="",i.value="",a.value=""}))}export function createToDoForm(){var e=document.getElementById("details"),t=elementFromHtml('\n  <form>\n    <div id="title-grid">\n      <label for="titleInput">Title</label> <br>\n      <input id="titleInput" name="titleInput" type="text">\n    </div>\n\n    <div id="description-grid">\n      <label for="descriptionInput">Description</label> <br>\n      <textarea id="descriptionInput" name="descriptionInput" type="text"></textarea>\n    </div>\n\n    <div id="dueDate-grid">\n      <label for="dueDateInput">Due Date</label> <br>\n      <input id="dueDateInput" name="dueDateInput" type="date">\n    </div>\n\n    <div id="priority-grid"> \n      <h3>Priority</h3>\n      <input id="priorityInput" type="text" placeholder="urgency...">\n    </div>\n\n    <div id="notes-grid">\n      <label for="notesInput">Extra Notes</label> <br>\n      <textarea  id="notesInput" name="notesInput" type="text"></textarea>\n    </div>\n\n    <div id="submitForm-grid">\n      <button id="submitForm">CREATE</button>\n    </div>\n  </form>\n  ');removeAllChildElements(e),e.appendChild(t)}export function welcomeTheUser(e){var t=document.getElementById("welcome"),n=document.createElement("p"),r=document.createElement("p"),o=(new Date).toDateString();n.innerHTML="Welcome, ".concat(e," <br> ").concat(o),r.innerHTML="You have # of tasks due TODAY",t.appendChild(n),t.appendChild(r);var i=createProject("Default","project1");pushProject(i),defaultProjectFunction()}export function createProjectButtonFunction(){var e=document.getElementById("createProject"),t=document.getElementById("projects-grid"),n=document.createElement("div"),r=document.createElement("input"),o=document.createElement("button");o.textContent="+",o.id="projectTitleSubmit",o.type="submit",r.id="projectTitleInput",e.addEventListener("click",(function(e){e.preventDefault(),t.appendChild(n),n.appendChild(r),n.appendChild(o),n.id=assignID(),n.style.display="block",o.addEventListener("click",(function e(i){i.preventDefault();var a=document.createElement("div"),c=document.createElement("p");c.classList.add("project-title");var l=createProject(r.value,assignID());pushProject(l),a.id=l.id,a.classList.add("projectItem"),t.appendChild(a),a.appendChild(c),a.addEventListener("click",(function(){currentDiv(l.id),lightUpDiv(l.id);var e=document.getElementById("tasks");removeAllChildElements(e);var t,n=_createForOfIteratorHelper(l.taskArray);try{for(n.s();!(t=n.n()).done;){var r=t.value,o=elementFromHtml('\n            <div class="task-item '.concat(r.taskID,'">\n              <h3>Task-').concat(r.title,"</h3>\n              <p>Due: ").concat(r.dueDate,"</p>\n              <p>Priority: ").concat(r.priority,"</p>\n              <p>Description: ").concat(r.description,"</p>\n            </div>\n          "));e.appendChild(o)}}catch(e){n.e(e)}finally{n.f()}deleteTaskButton()})),a.appendChild(removeProjectFunction()),removeButtonFunction(a.id),c.textContent=l.title,n.style.display="none",o.removeEventListener("click",e),r.value=""}))}))}function removeAllChildElements(e){for(;e.firstChild;)e.removeChild(e.firstChild)}export function removeProjectFunction(){var e=document.createElement("button");return e.className="deleteButton",e.textContent="-",e.type="submit",e}function lightUpDiv(e){for(var t=Array.from(document.querySelectorAll("div.projectItem")),n=document.getElementById("".concat(e)),r=n.querySelector("p"),o=0;o<t.length;o++)t[o].style.backgroundColor="rgba(255, 255, 255, 0.05)",t[o].querySelector("p").style.color="white";n.style.backgroundColor="white",r.style.color="blue"}export function removeButtonFunction(e){document.querySelectorAll(".deleteButton").forEach((function(t){return t.addEventListener("click",(function(){document.getElementById(e).remove()}))}))}export function defaultProjectFunction(){document.getElementById("project0").addEventListener("click",(function(){currentDiv("project1"),lightUpDiv("project0");var e=document.getElementById("tasks");removeAllChildElements(e);var t,n=_createForOfIteratorHelper(showProjects());try{for(n.s();!(t=n.n()).done;){var r=t.value;if("project1"==r.id){var o,i=_createForOfIteratorHelper(r.taskArray);try{for(i.s();!(o=i.n()).done;){var a=o.value,c=elementFromHtml('\n                <div class="task-item '.concat(a.taskID,'">\n                <h3>Task-').concat(a.title,"</h3>\n                <p>Due: ").concat(a.dueDate,"</p>\n                <p>Priority: ").concat(a.priority,"</p>\n                <p>Description: ").concat(a.description,"</p>\n              </div>\n                </div>\n              "));e.appendChild(c)}}catch(e){i.e(e)}finally{i.f()}}}}catch(e){n.e(e)}finally{n.f()}deleteTaskButton(),showTaskDetail()}))}function showTaskDetail(){for(var e=Array.from(document.querySelectorAll("div.task-item")),t=document.getElementById("details"),n=function(){var e=o[r];e.addEventListener("click",(function(){var n=showTasks();removeAllChildElements(t);var r,o=_createForOfIteratorHelper(n);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i.taskID==e.getAttribute("class").split(" ")[1]){var a=elementFromHtml("\n          <div class='task-detail'> \n            <h3>Title: ".concat(i.title,"</h3>\n            <p>Due: ").concat(i.dueDate,"</p>\n            <p>Priority: ").concat(i.priority,"</p>\n            <p>Description: ").concat(i.description,"</p>\n            <p>Notes: ").concat(i.notes,"</p>\n          </div>\n          "));t.appendChild(a)}}}catch(e){o.e(e)}finally{o.f()}}))},r=0,o=e;r<o.length;r++)n();deleteTaskButton()}function deleteTaskButton(){var e=Array.from(document.querySelectorAll("div.task-item")),t=showTasks(),n=document.createElement("button");n.textContent="delete",n.classList.add("deleteTaskButton"),e.forEach((function(e){return e.appendChild(n)})),n.addEventListener("click",(function(){for(var r=n.parentElement.getAttribute("class").split(" ")[1],o=0,i=e;o<i.length;o++){var a=i[o];if(a.getAttribute("class").split(" ")[1]==r){a.remove();var c,l=_createForOfIteratorHelper(t);try{for(l.s();!(c=l.n()).done;){var d=c.value;d.taskID==r&&removeTask(d)}}catch(e){l.e(e)}finally{l.f()}}}}))}