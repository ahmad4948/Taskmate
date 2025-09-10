import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';


function App() {
  return (
    <>
    <Header />
      <AddTask/>
      <TaskList/>
    </>
  );
}

export default App;
