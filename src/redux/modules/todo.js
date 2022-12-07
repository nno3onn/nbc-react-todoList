// action const
const CREATE_TODO = "CREATE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

// action creator
export const createTodo = (payload) => ({ type: CREATE_TODO, payload });
export const updateTodo = (payload) => ({ type: UPDATE_TODO, payload });
export const deleteTodo = (payload) => ({ type: DELETE_TODO, payload });

// initialState
const initialState = [];

// reducer
const todo = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      return [payload, ...state];
    }
    case UPDATE_TODO: {
      const newState = state.map((todo) => {
        if (todo.id === payload) return { ...todo, isDone: !todo.isDone };
        return todo;
      });
      return newState;
    }
    case DELETE_TODO: {
      const newState = state.filter((todo) => todo.id !== payload);
      return newState;
    }
    default:
      return state;
  }
};

// export reducer
export default todo;
