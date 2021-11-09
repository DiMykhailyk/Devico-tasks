const body = document.body;
const inpt = document.getElementById('inpt');
const ul = document.getElementsByClassName('todo-list')[0];
console.log(inpt)
// ul.style.padding = '0px';
// ul.style.margin = '0px';


const handler = (e) => {
  if (e.keyCode === 13) {
    const li = document.createElement('li');
    const div = document.createElement('div')
    div.className = 'divWrapper'
    const input_checkBox = document.createElement('input');
    const btnCancel = document.createElement('button');
    const label = document.createElement('label');
    const input_todo = document.createElement('input');

    input_todo.style.display = "none";

    label.innerHTML = e.target.value;
    // input_checkBox.disabled = true;
    input_checkBox.type = 'checkbox';
    input_checkBox.class = 'todo';
    input_checkBox.value = 'todo';
    inpt.value  = '';
    

    div.addEventListener('dblclick', function(e) {
    const text = label.textContent 
    label.style.display = 'none'; // todo change style at style css when user press enter=> remove dispay none
    li.className = 'edditing';
    input_checkBox.style.display = 'none' // todo change style at style css when user press enter=> remove dispay none
    input_todo.style.display = "block";
    input_todo.focus();
    input_todo.value = text

      // label.value = '' 
      // input_checkBox.disabled = false;
    })

  
    ul.append(li);
    li.append(div);
    div.append(input_checkBox);
    div.append(label);
    li.append(input_todo);
    // div.append(btnCancel);
  } 
}


inpt.addEventListener('keydown', handler)

