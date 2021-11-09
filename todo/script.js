const body = document.body;
const inpt = document.getElementById('inpt');
const ul = document.getElementsByClassName('todo-list')[0];

const handler = (e) => {
  if(e.target.value === '') {
    null
  } else {
  if (e.keyCode === 13) {
    const li = document.createElement('li');
    // li.className = 'edit';
    const div = document.createElement('div');
    div.className = 'divWrapper';
    const input_checkBox = document.createElement('input');
    const btnCancel = document.createElement('button');
    const label = document.createElement('label');
    const input_todo = document.createElement('input');
    input_todo.className = 'input_todo';

    

    input_todo.style.display = "none";

    label.innerHTML = e.target.value;
    input_checkBox.type = 'checkbox';
    input_checkBox.classList.add('input_checkbox');
    input_checkBox.value = 'todo';
    inpt.value  = '';
    btnCancel.textContent = 'x';
    btnCancel.classList.add('btnCancel');

    div.addEventListener('dblclick', function(e) {
    const text = label.textContent;
    label.style.display = 'none'; 
    li.className = 'edditing';
    input_checkBox.style.display = 'none';
    input_todo.style.display = "block";
    input_todo.value = text;
    }, false)

    input_checkBox.addEventListener('dblclick', function(e) {
      e.stopPropagation()
    }, true)

    btnCancel.addEventListener('dblclick', function(e) {
      e.stopPropagation()
    }, true)

    input_todo.addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
      input_todo.style.display = 'none';
      label.style.display = 'block';
      label.textContent = input_todo.value;
      input_checkBox.style.display = "block"
      if (e.target.value === '') {
        div.remove()
        }
      } 
    })

    btnCancel.addEventListener('click', function(e) {
      div.remove()
    })

    input_checkBox.addEventListener('click', function(e) {
      if(input_checkBox.checked){
      li.style.backgroundImage = "url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E)"
      li.className = 'complited';
      } else {
      li.style.backgroundImage = "none";
      li.style.backgroundImage = "url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E)"

      }
    })

    
    ul.append(li);
    li.append(div);
    div.append(input_checkBox);
    div.append(label);
    li.append(input_todo);
    div.append(btnCancel);
  } 
 }
}

inpt.addEventListener('keydown', handler)

