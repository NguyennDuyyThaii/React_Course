import React from 'react'
import ReactDOM from 'react-dom'
function getButtonText(){
    return 'click on me'
}

const App = () => {
    //const buttonText = 'click Me'
    const labelText = 'Enter name'
    return  (
        <div>
            <label class="lable" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color: 'white'}}>{getButtonText()}</button>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector("#root")
)