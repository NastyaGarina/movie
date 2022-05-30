import { Container } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}>
            <div>
                <div className="textError">404</div>
                <div className="textError">Not Found</div>
            </div>
        </Container>
    );
};
export default NotFound;
