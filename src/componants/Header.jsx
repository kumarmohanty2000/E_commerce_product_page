import { Navbar, Nav, Container } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar style={ {backgroundColor: 'blue'}} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Fashion Retail Store</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
