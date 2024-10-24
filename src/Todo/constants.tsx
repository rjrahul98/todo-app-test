export const FILTER_OPTIONS = {
  all: 0,
  completed: 1,
  incompleted: 2,
};

export type TodoType = {
  text: string;
  id: number;
  isCompleted: boolean;
};
