import './App.css';
import Courses from './Components/Courses';
import Student from './Components/Student';
import { MernContextAPI } from './Context/MernContext';
import studentContext from './Context/StudentContext';

function App() {
  let student={
    name:'soumya',
    age:'23',
    address:'Odisha'
  }
  return (
    <>
    <MernContextAPI>
      <studentContext.Provider value={student}>
      <student></student>
      <Courses/>
      </studentContext.Provider>
    </MernContextAPI>
    <Student/>
    </>
  );
}

export default App;
