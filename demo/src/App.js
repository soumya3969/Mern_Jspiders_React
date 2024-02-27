import './App.css';
import ClassComponent from './ClassComponent';
import Home from './Home';

function App() {
  let fruits=['apple','banana','grapes']
  console.log(fruits)
  return (
    <div className="App">
      <ClassComponent name="soumya" address='chennai' wicket='5' >
        {
          {
            msg:'im a children prop'
          }
        }
      </ClassComponent>
      <Home fruits={fruits}> hello world</Home>
    </div>
  );
}

export default App;
