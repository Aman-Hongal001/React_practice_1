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



// import './App.css';
// import { Footer } from './Footer';
// import Header from './Header';
// // import Container from 'react-bootstrap/Container';
// // import Row from 'react-bootstrap/Row';
// // import Col from 'react-bootstrap/Col';
// // import Card from 'react-bootstrap/Card';
// // import Button from 'react-bootstrap/Button';
// import { Button, Row, Col, Card, Container} from 'react-bootstrap';

// function App() {

//   let someInfo = {
//       "name":"Aman",
//       "yname":"WSCube"
//   };
//   let num = 8924523534
//   return(
//     <div>
//       {/* calling header component */}
//       {/* passing the values to header using probs */}
//       <Header info={someInfo} num={num}/>

//       <div className='row'>
//         <CardDiv/>
//         <CardDiv/>
//         <CardDiv/>
//         <CardDiv/>
//         <CardDiv/>
//         <CardDiv/>
//         <CardDiv/>
//         <CardDiv/>
//         <CardDiv/>
//         <CardDiv/>
//         <CardDiv/>
//         <CardDiv/>
//       </div>
      
//       <div className='main'>
//         <Container fluid>
//           <Container>
//             <Row>
//               <Col lg='3' md='6'>
//                 <Card style={{ width: '18rem' }}>
//                   <Card.Img variant="top" src="holder.js/100px180" />
//                   <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                       Some quick example text to build on the card title and make up the
//                       bulk of the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col lg='3' md='6'>
//                 <Card style={{ width: '18rem' }}>
//                   <Card.Img variant="top" src="holder.js/100px180" />
//                   <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                       Some quick example text to build on the card title and make up the
//                       bulk of the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col lg='3' md='6'>
//                 <Card style={{ width: '18rem' }}>
//                   <Card.Img variant="top" src="holder.js/100px180" />
//                   <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                       Some quick example text to build on the card title and make up the
//                       bulk of the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col lg='3' md='6'>
//                 <Card style={{ width: '18rem' }}>
//                   <Card.Img variant="top" src="holder.js/100px180" />
//                   <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                       Some quick example text to build on the card title and make up the
//                       bulk of the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </Container>
//         </Container>
//       </div>

//       {/* calling footer component */}
//       <Footer info2={someInfo} num2={num}>
//         <h1>Welcome to footer section (Inside Footer tag)</h1>
//       </Footer>
//     </div>
//   )
// }

// export default App;

// function CardDiv(){
//   return(
//     <div className='cardItem'>
//       cardDiv
//     </div>
//   )
// }

import './App.css';
import { Footer } from './Footer';
import Header from './Header';
import { blog } from './Data/blog';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Button, Row, Col, Card, Container} from 'react-bootstrap';

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


      <Container fluid>
        <Container>
          <Row>
            { blog.map((v,i)=>{
              return(
                <ProductItem pitem={v} key={i}/>
              );
            }) 
            }
            
          </Row>
        </Container>
      </Container>

      
      {/* calling footer component */}
      <Footer info2={someInfo} num2={num}>
        <h1>Welcome to footer section (Inside Footer tag)</h1>
      </Footer>
    </div>
  )
}

export default App;

function ProductItem({pitem}){
  return(
    <div className='col-lg-3 mb-4'>
      
      <Card>
        <Card.Body>
          <Card.Title>{pitem.title}</Card.Title>
          <Card.Text>
            {pitem.body}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}