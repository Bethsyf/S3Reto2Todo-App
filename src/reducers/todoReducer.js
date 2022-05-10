import { types } from "../type/types"


const initialState = [
    {
      id: 1,
      text: "Complete online JavaScript course",
      completed: true,
    },
    {
      id: 2,
      text: "Jog around the park 3x",
      completed: false,
    },
    {
      id: 3,
      text: "10 minutes meditation",
      completed: false,
    },
    {
      id: 4,
      text: "Read for 1 hour",
      completed: false,
    },
    {
      id: 5,
      text: "Pick up groceries",
      completed: false,
    },
    {
      id: 6,
      text: "Complete Todo App on Frontend Mentor",
      completed: false,
    },
  ];

  const nextId = todos => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
  };

export const todoReducer = (state = initialState, action) => {
  switch(action.type) {
      case types.Add:
          return [
            ...state,
            { id: nextId(state), text: action.payload, completed: false },
          ];
        case types.Delete:
            return state.filter(item => item.id !== action.payload);

    case types.Complete:
      return state.map(item => {
        if (item.id !== action.payload) return item;
        return { ...item, completed: !item.completed };
      });

    case types.Clear:
      return state.filter(item => !item.completed);

    default:
      return state;
  }
};
