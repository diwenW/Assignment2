document.addEventListener('DOMContentLoaded', function() {
document.querySelector('#new-task').onsubmit = function (event){
const li = document.createElement('li');

let task_text = document.querySelector('#task').value;
let priority = document.querySelector('#priority').value;
let status = document.querySelectorAll('[name=task-status]');

for (i = 0; i< status.length;i++){
if (status[i].checked){
task_status = status[i].value;
}}

let new_task_html = `
<div class = "new-task-html">
<span> (${task_text}) </span>
<span> (${priority}) </span>
<span> (${task_status}) </span>
</div>
<button class = "Complete"> Complete </button>
<button class = "remove"> Remove </button>`;

li.innerHTML = new_task_html

document.querySelector('#task_list').append(li);
document.querySelector('#task').value = '';

return false;
}

document.addEventListener('click', function(event){
element = event.target;
if (element.className === 'Complete'){
element.parentElement.querySelector('.new-task-html').style.textDecoration="line-through";
}
if (element.className === 'remove'){
element.parentElement.remove();
}
})
});
