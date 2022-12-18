import {createEnemyNewRandomField, createMyNewRandomField, renderEnemyCell, renderMyCell} from "../../logic/seaBattle";
import "./game.css"
import {useState} from "react";
import LoginPage from "../login/login";


const GamePage = ({setCurrentPage, username, setUsername}) => {
    const my_field = createMyNewRandomField()
    const enemy_field = createEnemyNewRandomField()
    const [myField, setMyField] = useState(my_field)
    const [enemyField, setEnemyField] = useState(enemy_field)

    const resetUser = (event) => {
        event.preventDefault() /* не дает отправить запрос и перегрузить страницу*/
        setUsername(event.target[0].value) /* target - целевой html-элемент, он имеет два дочерних элемента input и button*/
        setCurrentPage('login')
    }

    return (
        <div id='game-page'>
            <header>
                <div style={{flex:1}}></div>
                <div id='lucky'>Морской бой - Проверь свою удачу</div>
                <div style={{display:"flex", flex:1, justifyContent: "end"}}>
                    <div id='username' >{username}</div>
                </div>
            </header>
            <div id='game-field'>
                <div style={{background: "black"}}>
                    <div className='field'>{myField.map((value, index) => renderMyCell(index, myField, setMyField))}</div>
                    <div style={{color: "white", paddingBottom: "10px"}}>Ваше поле</div>
                </div>
                <div style={{background: "black"}}>
                    <div className='field'>{enemyField.map((value, index) => renderEnemyCell(index, enemyField, setEnemyField))}</div>
                    <div style={{color: "white", paddingBottom: "10px"}}>Поле противника</div>
                </div>
            </div>

            <div id='button-reset' onClick={resetUser}>Начать игру заново</div>

        </div>

    )
}
export default GamePage
