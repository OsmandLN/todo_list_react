import { useState } from 'react'


// App 父元件
const App = () => {
  const [list, setList] = useState([])

  const onAddClicked = (message) => {
    let newList = [...list, message]
    setList(newList)
  }

  return (
    <>
      <AddPanel onAddClicked={onAddClicked} />
      {/*前後重複是必然的嗎? 還是只是偶然呢?*/}
      <TodoList list={list} />
    </>


  );
}
export default App

// AddPanel 子元件
const AddPanel = ({ onAddClicked }) => {
  {/*從父層傳入onAddClicked方法供子元件使用 => props*/ }
  const [message, setMessage] = useState('')

  //建立輸入框輸入事件的處理
  const onMessageInput = (event) => {
    setMessage(event.target.value)
  }

  const addTodo = (event) => {
    onAddClicked(message)
    setMessage('') /*內容清空*/
  }
  return (
    <>
      <input value={message} onChange={onMessageInput} />
      {/*onChange 為內建事件 */}
      <button onClick={addTodo}>Add</button>
    </>
  )
}

// TodoList 子元件
const TodoList = ({ list }) => (
  /*調用props傳過來的list(陣列)*/
  < ul >
    {
      list.map((todoItem) => {
        return (
          <>
            <li>{todoItem} <button>X</button></li >
          </>
        )
      })
    }
  </ul >
)
console.log(TodoList)