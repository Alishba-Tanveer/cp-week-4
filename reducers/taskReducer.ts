export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export type TaskAction =
  | {
      type: "add";
      payload: Task;
    }
  | {
      type: "toggle";
      payload: {
        id: string;
      };
    }
  | {
      type: "delete";
      payload: {
        id: string;
      };
    }
  | {
      type: "edit";
      payload: {
        id: string;
        title: string;
      };
    };

export function taskReducer(
  state: Task[],
  action: TaskAction
): Task[] {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "toggle":
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      );

    case "delete":
      return state.filter(
        (task) => task.id !== action.payload.id
      );

    case "edit":
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              title: action.payload.title.trim(),
            }
          : task
      );

    default:
      return state;
  }
}