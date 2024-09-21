import logo from './logo.svg';
import './App.css';

function App() {
  let name="Aman";
  let l = [10,20,30,40];
  let obj = {
    'name':"AmanHongal",
    'cName':"MERN",
    'desc':"React JS"
  }

  return(
    <div className="App">
      <h1>{name}</h1>
      { l.map((v)=>{
        return(
          <div>{v}</div>
        )
      }) }
      <div>
        {obj.cName}
      </div>
    </div>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>

  //   </div>
  // );
}

export default App;
