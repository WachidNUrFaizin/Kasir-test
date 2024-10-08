import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { getProductBySearch } from '../features/ProductSlice';

function NavbarComponent(props) {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.elements.search.value;
        dispatch(getProductBySearch(query));
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
            <Container fluid>
                <Navbar.Brand href="#home">cashier</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Form className="d-flex" onSubmit={handleSearch}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            name="search"
                        />
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
