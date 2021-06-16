import React, { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")



  var buttons = document.getElementsByTagName('button')

  for (let i = 0; i < buttons.length; i++) {
    // buttonName 暴露於 global environment
    const buttonName = buttons[i].innerHTML
    buttons[i].addEventListener('click', function () {
      console.log(buttonName)
    })
  }


  return (

    <div>
      <button id="first">First</button>
      <button id="second">Second</button>
      <button id="third">Third</button>



      <input
        type="button"
        value="click"
        className="name"
      // onClick={()=>{

      //   setText(text=>'apple')
      //   console.log(text)

      //   //document.querySelector('.show').append(text)
      // }}
      />
      <hr />
      <div className="show"></div>
    </div>

  )
}

export default App
