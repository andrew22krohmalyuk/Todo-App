export const addTodo = (text) => {
  return {
      type: "ADD_TODO",
      id: Date.now(),
      payload: text
  }
}

export const deleteTodo = (id) => {
  return {
      type: "DELETE_TODO",
      id
  }
}
