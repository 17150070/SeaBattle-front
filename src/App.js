import './App.css';
import LoginPage from "./pages/login/login";
import {useState} from "react";
import GamePage from "./pages/game/game";

export const App = () => {
  const [currentPage, setCurrentPage] = useState('login')
  const [username, setUsername] = useState(null)

  return (
    <div className="App">
      {currentPage === 'login'? <LoginPage setCurrentPage={setCurrentPage} setUsername={setUsername}/> :
          <GamePage setCurrentPage={setCurrentPage} username={username}/>} {/*Определение страницы*/}
    </div>
  );
}

