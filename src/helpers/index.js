import { colletedTasks } from "../constants";

export const colletedTasksExist = selectedProject =>
  colletedTasks.find(task => task.key === selectedProject)
