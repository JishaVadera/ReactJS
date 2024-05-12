import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Gray table-1

// function AutoLayoutExample() {
//   return (
//     <div className='main'>
//     <Container>
//       <Row>
//         <Col className='box' md={1}>col-md-1</Col>
//         <Col className='box' md={1}>col-md-1</Col>
//         <Col className='box' md={1}>col-md-1</Col>
//         <Col className='box' md={1}>col-md-1</Col>
//         <Col className='box' md={1}>col-md-1</Col>
//         <Col className='box' md={1}>col-md-1</Col>
//         <Col className='box' md={1}>col-md-1</Col>
//         <Col className='box' md={1}>col-md-1</Col>
//         <Col className='box' md={1}>col-md-1</Col>
//         <Col className='box' md={1}>col-md-1</Col>
//         <Col className='box' md={1}>col-md-1</Col>
//         <Col className='box' md={1}>col-md-1</Col>
//       </Row>
//       <Row>
//       <Col className='box1' md={{ span: 8 }}>col-md-8</Col>
//       <Col className='box1' md={{ span: 4}}>col-md-4</Col>       
//       </Row>
//       <Row>
//       <Col className='box2' md={{ span: 4 }}>col-md-4</Col>
//       <Col className='box2' md={{ span: 4}}>col-md-4</Col>  
//       <Col className='box2' md={{ span: 4}}>col-md-4</Col>       
//       </Row>
//       <Row>
//       <Col className='box3' md={{ span: 6}}>col-md-6</Col>
//       <Col className='box3' md={{ span: 6}}>col-md-6</Col>         
//       </Row>
//     </Container>
//     </div>
//   );
// }

// export default AutoLayoutExample;

// table-2

// function AutoLayoutExample() {
//     return (
//       <div className='main'>
//       <div className='container-fluid'>
//         <Row>
//           <Col className='box' md={1}>col 1</Col>
//           <Col className='box' md={1}>col 1</Col>
//           <Col className='box' md={1}>col 1</Col>
//           <Col className='box' md={1}>col 1</Col>
//           <Col className='box' md={1}>col 1</Col>
//           <Col className='box' md={1}>col 1</Col>
//           <Col className='box' md={1}>col 1</Col>
//           <Col className='box' md={1}>col 1</Col>
//           <Col className='box' md={1}>col 1</Col>
//           <Col className='box' md={1}>col 1</Col>
//           <Col className='box' md={1}>col 1</Col>
//           <Col className='box' md={1}>col 1</Col>
//         </Row>
//         <Row>
//         <Col className='box1' md={{ span: 3 }}>col3</Col>
//         <Col className='box1' md={{ span: 3}}>col3</Col>  
//         <Col className='box1' md={{ span: 3}}>col3</Col>       
//         <Col className='box1' md={{ span: 3}}>col3</Col>       
//         </Row>
//         <Row>
//         <Col className='box2' md={{ span: 4 }}>col4</Col>
//         <Col className='box2' md={{ span: 4}}>col4</Col>  
//         <Col className='box2' md={{ span: 4}}>col4</Col>       
//         </Row>
//         <Row>
//         <Col className='box3' md={{ span: 8 }}>col8</Col>
//         <Col className='box3' md={{ span: 4}}>col4</Col>        
//         </Row>
//         <Row>
//         <Col className='box4' md={{ span: 2 }}>col2</Col>
//         <Col className='box4' md={{ span: 2}}>col2</Col>  
//         <Col className='box4' md={{ span: 4}}>col4</Col> 
//         <Col className='box4' md={{ span: 2 }}>col2</Col>
//         <Col className='box4' md={{ span: 2}}>col2</Col>       
//         </Row>
//         <Row>
//         <Col className='box5' md={{ span: 6}}>col6</Col>
//         <Col className='box5' md={{ span: 6}}>col6</Col>         
//         </Row>
//         <Row>
//         <Col className='box6' md={{ span: 12}}>col12</Col>        
//         </Row>
//       </div>
//       </div>
//     );
//   }
  
//   export default AutoLayoutExample;

// table3

// function AutoLayoutExample() {
//     return (
//       <div className='main'>
//       <div className='container-fluid'>
//       <Row>
//         <Col className='box' md={{ span: 12}}></Col>        
//       </Row>

//       <Row>
//         <Col className='box1' md={{ span: 1}}></Col> 
//         <Col className='box1' md={{ span: 11}}></Col>       
//       </Row>
//       <Row>
//         <Col className='box1' md={{ span: 2}}></Col> 
//         <Col className='box1' md={{ span: 10}}></Col>       
//       </Row>
//       <Row>
//         <Col className='box1' md={{ span: 3}}></Col> 
//         <Col className='box1' md={{ span: 9}}></Col>       
//       </Row>
//       <Row>
//         <Col className='box1' md={{ span: 4}}></Col> 
//         <Col className='box1' md={{ span: 8}}></Col>       
//       </Row>
//       <Row>
//         <Col className='box1' md={{ span: 5}}></Col> 
//         <Col className='box1' md={{ span: 7}}></Col>       
//       </Row>
//       <Row>
//         <Col className='box1' md={{ span: 6}}></Col> 
//         <Col className='box1' md={{ span: 6}}></Col>       
//       </Row>
      
//       </div>
//       </div>
//     );
//   }
  
//   export default AutoLayoutExample;

// table4

function AutoLayoutExample() {
      return (
        <div className='main'>
        <div className='container-fluid'>
          <Row>
            <Col className='box' md={1}>1</Col>
            <Col className='box' md={1}>1</Col>
            <Col className='box' md={1}>1</Col>
            <Col className='box' md={1}>1</Col>
            <Col className='box' md={1}>1</Col>
            <Col className='box' md={1}>1</Col>
            <Col className='box' md={1}>1</Col>
            <Col className='box' md={1}>1</Col>
            <Col className='box' md={1}>1</Col>
            <Col className='box' md={1}>1</Col>
            <Col className='box' md={1}>1</Col>
            <Col className='box' md={1}>1</Col>
          </Row>
          <Row>
          <Col className='box' md={{ span: 4 }}>4</Col>
          <Col className='box' md={{ span: 4}}>4</Col>  
          <Col className='box' md={{ span: 4}}>4</Col>       
          </Row>
          <Row>
          <Col className='box' md={{ span: 4}}>4</Col>       
          <Col className='box' md={{ span: 8 }}>8</Col>
          </Row>
          <Row>
          <Col className='box' md={{ span: 6}}>6</Col>
          <Col className='box' md={{ span: 6}}>6</Col>         
          </Row>
          <Row>
          <Col className='box' md={{ span: 12}}>12</Col>         
          </Row>
          <Row>
          <Col className='box' md={{ span: 4}}>4</Col>
          <Col className='box' md={{ span: 4, offset: 4 }}> span: 4, offset: 4</Col>
          </Row>
          <Row>
          <Col className='box' md={{ span: 3, offset: 3 }}>span: 3, offset: 3</Col>
          <Col className='box' md={{ span: 3, offset: 3 }}> span: 3, offset: 3</Col>
          </Row>
          <Row>
          <Col className='box' md={{ span: 4, offset: 4 }}> span: 4, offset: 4</Col>
          </Row>
        </div>
        </div>
      );
    }

    export default AutoLayoutExample;