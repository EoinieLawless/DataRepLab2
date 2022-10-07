import react from 'react';
import './App.css';


// imports 
import {Header} from './components/header';
import {Footer} from './components/footer';
import {Content} from './components/content';

//import for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//import for navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Routes, Route} 
from 'react-router-dom';



class App extends react.Component {
  render(){
  return (
    <Router>
    <div className="App">

    {/* NAVBAR code */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">home</Nav.Link>

            <Nav.Link href="/read">Read</Nav.Link>

            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    {/* Setting the Routes */}
      <Routes>
        <Route path ='/' element={<Content></Content>}></Route>
        <Route path ='/read' element={<Header></Header>}></Route>
        <Route path ='/create' element={<Footer></Footer>}></Route>
      </Routes>


      {/*<Header></Header>
     
       <Content></Content>

      <Footer></Footer>*/}

    </div>
    </Router>
  );
  }
}

export default App;
