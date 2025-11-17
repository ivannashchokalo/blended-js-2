const STORAGE_KEY = 'tasks';

function getTasks() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveTask(task) {
    const tasks = getTasks();
    tasks.push(task);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function initTasks() {
    const tasks = getTasks() ?? [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function deleteTask(id) {
    const tasks = getTasks();
    const filteredTasks = tasks.filter(task => task.id !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredTasks));
}

export default {
    getTasks,
    saveTask,
    initTasks,
    deleteTask,
}