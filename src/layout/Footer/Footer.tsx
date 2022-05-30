import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const alertFunction = () => {
        alert(`Привет ${email}, теперь ты будешь получать спам`);
    };

    return (
        <footer className="text-center text-white" style={{ backgroundColor: '#222222' }}>
            <div className="container p-4">
                <section className="mb-4">
                    <p className="btn btn-outline-light btn-floating m-1">
                        <i className="fa fa-facebook-f"></i>
                    </p>
                    <p className="btn btn-outline-light btn-floating m-1">
                        <i className="fa fa-twitter"></i>
                    </p>
                    <p className="btn btn-outline-light btn-floating m-1">
                        <i className="fa fa-google"></i>
                    </p>
                    <p className="btn btn-outline-light btn-floating m-1">
                        <i className="fa fa-instagram"></i>
                    </p>
                    <p className="btn btn-outline-light btn-floating m-1">
                        <i className="fa fa-github"></i>
                    </p>
                </section>
                <section className="">
                    <form action="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input
                                        value={email}
                                        id="alertTest"
                                        type="email"
                                        placeholder="Email address"
                                        className="form-control"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-auto">
                                <button
                                    onClick={alertFunction}
                                    type="button"
                                    className="btn btn-outline-light mb-4">
                                    Subscribe
                                </button>
                            </div>
                            <label className="form-label">Sign up for our newsletter</label>
                        </div>
                    </form>
                </section>
                <section className="mb-4">
                    <p>Фантазии на написание текста не хватило(((</p>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <p style={{ margin: '0' }}> © 2022</p>
            </div>
        </footer>
    );
};
export default Footer;
