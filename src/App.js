import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import TasksForm from './component/TasksForm';
import TasksLists from './component/TasksLists';

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
     <div className='flex items-center justify-center h-full'>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksLists/>} />
          <Route path='/create-task' element={<TasksForm/>} />
          <Route path='/edit-task/:id' element={<TasksForm/>} />
        </Routes>
      </BrowserRouter>
     </div>
    </div>
  );
}

export default App;
