const todoContainer = document.querySelector(".todo-container");
const addTask = document.querySelector(".add-task");
const textBox = document.querySelector(".item");
textBox.addEventListener("click", function (e) {});
const listContainer = document.createElement("div");
todoContainer.append(listContainer);
const inputBox1 = document.querySelector(".input-boxes1");
const inputBox2 = document.querySelector(".input-boxes2");
const para = document.querySelector(".diki");

const list = function () {
  if (textBox.value) {
    const lip = document.createElement("li");
    lip.classList.add("liro");
    const wrapper = document.createElement("p");
    wrapper.style.color = "white";
    wrapper.classList.add("wrapper");
    wrapper.textContent = textBox.value;
    // wrapper.append(textBox.value);
    lip.append(wrapper);
    lip.style.backgroundColor = " rgb(8, 10, 14)";
    listContainer.append(lip);

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";
    const container = document.createElement("div");
    container.classList.add("sContainer");
    container.append(editButton, deleteButton);
    lip.append(container);

    deleteButton.addEventListener("click", function () {
      listContainer.removeChild(lip);
    });

    editButton.addEventListener("click", function () {
      const viki = prompt("EDIT TO-DO", wrapper.innerHTML);
      if (viki) {
        wrapper.textContent = viki;
      }
    });
  }
};

addTask.addEventListener("click", function () {
  list();
});

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Enter") {
    list();
  }
});


hosp