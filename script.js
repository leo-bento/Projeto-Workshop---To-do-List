const inputTitulo = document.getElementById("titulo");
const inputDescricao = document.getElementById("descricao");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputTitulo === '' || inputDescricao === '') {
        alert("Preencha os campos para registrar uma tarefa");
    }

    else {
        let registerTitulo = document.createElement("li");
        let registerDescricao = document.createElement("span");
        registerTitulo.innerHTML = inputTitulo.value;
        registerDescricao.innerHTML = inputDescricao.value;
        listContainer.appendChild(registerTitulo, registerDescricao); 
    }
    inputTitulo.value = "";
    inputDescricao.value = "";
}

