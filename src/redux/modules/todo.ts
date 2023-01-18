enum ActionType {
  CREATE_TODO = "CREATE_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  DELETE_TODO = "DELETE_TODO",
}
interface TodoAction {
  type: ActionType;
  payload: TodoType | number;
}

// action creator
export const createTodo = (payload: TodoType) => ({ type: ActionType.CREATE_TODO, payload });
export const updateTodo = (payload: number) => ({ type: ActionType.UPDATE_TODO, payload });
export const deleteTodo = (payload: number) => ({ type: ActionType.DELETE_TODO, payload });

// initialState
const initialState: TodoType[] = [];

// reducer
const todo = (state: TodoType[] = initialState, action: TodoAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.CREATE_TODO: {
      return [payload, ...state];
    }
    case ActionType.UPDATE_TODO: {
      const newState = state.map((todo) => {
        if (todo.id === payload) return { ...todo, isDone: !todo.isDone };
        return todo;
      });
      return newState;
    }
    case ActionType.DELETE_TODO: {
      const newState = state.filter((todo) => todo.id !== payload);
      return newState;
    }
    default:
      return state;
  }
};

// export reducer
export default todo;
