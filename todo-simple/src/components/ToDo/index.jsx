import React, { useState } from 'react';

function Todo() {
  const [task, setTask] = useState('');
  const [itemsList, setItemList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;

    setTask(inputTask);
  }

  function handleAddItemToList(event) {
    event.preventDefault();

    if (!task) {
      return;
    };

    setItemList([...itemsList, task]);
    setTask('');
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={handleAddItemToList}>
        <input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task} />

        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {itemsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;