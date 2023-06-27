import React from 'react'
import "./App.css"

function App() {
  
  return (
    <div className="container">
    <div className="header">
      <div>My Todo List</div>
      <div>React</div>
    </div>
    <div className='input-container'>
    <div className='input-content'>
      제목 : <input type='text' value='title'></input>
      내용 : <input type='text' value='content'></input>
    </div>
    <button>추가하기</button>
    </div>
    <p>Working...🔥</p>
    <div className='to-do-list'></div>
    <p>Done..!🌞</p>
    <div className='done-list'></div>
    </div>
  )
}
export default App