import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../types/types';
import { Container, Card, Form, Row, Button } from 'react-bootstrap';

const Login = () => {
    const [form, setForm] = useState<IUser>({ email: '', password: '' });

    const navigate = useNavigate();

    const user: IUser = {
        email: 'admin@mail.ru',
        password: '12345'
    };

    const registration = () => {
        if (user.password !== form.password) {
            alert('Неправильный password');
        } else if (user.email === form.email && user.password === form.password) {
            navigate('/movies');
        } else {
            alert('Неправильный email или password');
        }
    };

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto" style={{ color: '#198754' }}>
                    Авторизация
                </h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        value={form.email}
                        type="text"
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        onChange={(event) => {
                            setForm((prevState) => ({
                                ...prevState,
                                email: event.target.value
                            }));
                        }}
                    />
                    <Form.Control
                        value={form.password}
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        type="password"
                        onChange={(event) => {
                            setForm((prevState) => ({
                                ...prevState,
                                password: event.target.value
                            }));
                        }}
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <Button
                            onClick={registration}
                            className="align-self-end"
                            variant={'outline-success'}
                            size="sm">
                            Войти
                        </Button>{' '}
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};
export default Login;
