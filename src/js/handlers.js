import { nanoid } from "nanoid";
import { refs } from "./refs";
import localStorageApi from "./local-storage-api";
import { renderTasks } from "./render-tasks";

export function onFormSubmit(e) {
    e.preventDefault();

    const name = e.target.elements.taskName.value.trim();
    const desctiption = e.target.elements.taskDescription.value.trim();

    if (!name || !desctiption) {
        return alert('Заповніть всі поля');
    };

    const task = {
        name,
        desctiption,
        id: nanoid(),
    }

    localStorageApi.saveTask(task);

    const tasks = localStorageApi.getTasks();
    renderTasks(tasks);

    refs.form.reset();
}

export function onTaskDelete(e) {
    if (e.target.nodeName !== 'BUTTON') return;
    
    const id = e.target.dataset.id;
    localStorageApi.deleteTask(id);

    const tasks = localStorageApi.getTasks();
    renderTasks(tasks);
}