const initialState = [{
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
}];

const todoReducer = (state = initialState, action) =>{

    return state;

}

const todos = todoReducer();

const newTodo = {
    id: 2,
    todo: "Recolectar la piedra del Poder",
    done: false,
}

const addTodoAction = {
    type: "[Todo] add todo",
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);
console.log({state: todos})