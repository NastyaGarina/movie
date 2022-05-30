import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            style={{ backgroundColor: 'rgb(34, 34, 34)' }}>
            <Container>
                <Navbar.Brand className="logo">VT Movie</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="ref" to="/movies">
                            Filter Movies
                        </Link>
                        <Link className="ref" to="/topMovies">
                            Top Movies
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to="/login" className="ref">
                            Войти
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
