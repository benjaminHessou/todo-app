const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Dark_Light theme
const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {
    const body = document.body;

    if(body.classList.contains('dark')) {
        body.classList.add('light');
        body.classList.remove('dark');
        btnToggle.src = "./images/icon-sun.svg";
    } else if (body.classList.contains('light')) {
        body.classList.add('dark');
        body.classList.remove('light');
        btnToggle.src = "./images/icon-moon.svg";
    }
})
// Dark_Light theme Fin


function addTask() {
    if(inputBox.value === "") {
        alert('Vous devez écrire quelque chose!');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();