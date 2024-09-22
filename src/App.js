// import logo from './logo.svg';
// import './App.css';

// function App() {
//   let name="Aman";
//   let l = [10,20,30,40];
//   let obj = {
//     'name':"AmanHongal",
//     'cName':"MERN",
//     'desc':"React JS"
//   };
//   let status = true;
//   return(
//     <div className="App">
//       <h1>{name}</h1>
//       { l.map((v)=>{
//         return(
//           <div>{v}</div>
//         )
//       }) }
//       <div>
//         {obj.cName}
//       </div>
// {/* the below code is to check the condition using ternary operator if the status is true it will show the h1 tag else nothing will be shown..The left side of : will execute when its true and right will execute if false */}
//       {  (status ? 
//       <h1 style={{color:"red",backgroundColor:"yellow"}}>Ternary operator is True</h1>:""
//       )  }
//     </div>
//   )
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>

//   //   </div>
//   // );
// }

// export default App;



import './App.css';
import { Footer } from './Footer';
import Header from './Header';

function App() {

  let someInfo = {
      "name":"Aman",
      "yname":"WSCube"
  };
  let num = 8924523534
  return(
    <div>
      {/* calling header component */}
      {/* passing the values to header using probs */}
      <Header info={someInfo} num={num}/>

      <div className='row'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      {/* calling footer component */}
      <Footer info2={someInfo} num2={num}/>
    </div>
  )
}

export default App;

function Card(){
  return(
    <div className='cardItem'>
      cardDiv
    </div>
  )
}