import "./login.css"

const LoginPage = ({setCurrentPage, setUsername}) => {
    const loginUser = (event) => {
        event.preventDefault() /* не дает отправить запрос и перегрузить страницу*/
        setUsername(event.target[0].value) /* target - целевой html-элемент, он имеет два дочерних элемента input и button*/
        setCurrentPage('game')
    }

    return (
        <div id='block-login'>
            <div id = 'login-form'>
                <h2>Морской бой</h2>
                <form
                    onSubmit={loginUser}>{/*переход на страницу Game*/}
                    <div id='sea-battle-form-content'>
                        <label htmlFor="sea-battle-username">Введите имя: </label>
                        <input required minLength={2} maxLength={20} type="text" id='sea-battle-username'/>
                    </div>
                    <div>
                        <button id='button-login' type='submit'>Начать игру</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginPage
