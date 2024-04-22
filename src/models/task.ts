export type TaskModel = {
  id: number;
  title: string;
  isCompleted: boolean;
  createdDate: Date;
};

export type TaskListModel = TaskModel[] | [];
