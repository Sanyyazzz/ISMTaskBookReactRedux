import './UI/styles/App.css';
import TaskList from './UI/component/TaskList'
import InputTask from './UI/component/InputTask'

function App() {
  return (
    <div className="App">
        <InputTask/>
        <TaskList/>
    </div>
  );
}

export default App;
