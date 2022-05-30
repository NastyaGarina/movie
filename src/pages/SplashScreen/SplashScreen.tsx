import { useNavigate } from 'react-router-dom';
import './SplashScreen.css';

const SplashScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="splashScreen">
            <img className="image" src="./images/splashScreen.jpeg" alt="dont img" />
            <button className="button" onClick={() => navigate('/topMovies')}>
                Get Started
            </button>
        </div>
    );
};
export default SplashScreen;
