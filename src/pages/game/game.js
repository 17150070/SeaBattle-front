import {createNewRandomField, renderCell} from "../../logic/seaBattle";
import "./game.css"


const GamePage = ({setCurrentPage, username}) => {
    const field = createNewRandomField()

    return (
        <div id=''>
            <div id='username'>{username}</div>
            <div id='field'>{field.map(renderCell)}</div>
            <div id='field'>{field.map(renderCell)}</div>
        </div>

    )
}
export default GamePage
