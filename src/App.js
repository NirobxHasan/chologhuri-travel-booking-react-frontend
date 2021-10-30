import logo from './logo.svg';
import './App.css';
import NavBar from './components/Shared/NavBar/NavBar';
import HeaderBanner from './components/Home/HeaderBanner/HeaderBanner';
import Services from './components/Home/Services/Services';

function App() {
    return (
        <div>
            <NavBar />
            <HeaderBanner />
            <Services />
        </div>
    );
}

export default App;
