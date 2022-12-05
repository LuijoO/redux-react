import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "task 1",
    description: "descrip task 1",
    complete: false,
  },
  {
    id: "2",
    title: "task 2",
    description: "descrip task 2",
    complete: false,
  },
];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
       const taskFound = state.find(task => task.id === action.payload)
       if (taskFound) {
        state.splice(state.indexOf(taskFound), 1)
       }
    },
    editTask: (state, action) => {
      const {id, title, description} = action.payload

      const founTask = state.find(task => task.id === id)

      if(founTask) {
        founTask.title = title
        founTask.description = description
      }
    }
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
