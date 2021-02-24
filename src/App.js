import './App.css';
import Header from "./components/jsx/Header";
import Navbar from "./components/jsx/Navbar";
import Profile from "./components/jsx/Profile";

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
