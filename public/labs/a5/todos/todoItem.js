const TodoItem = (todo) => {
    return(`
             <input type="checkbox"
        ${todo.done ? 'checked' : ''}/>
      ${todo.title}
      (${todo.status})</li>
   `);
}
export default TodoItem;