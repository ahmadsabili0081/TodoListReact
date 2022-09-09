import styleTodos from './Todos.module.css'
import PropTypes  from 'prop-types'

let Todos = (props) =>{
  return(
    <div className={styleTodos.todos}>
    {props.todos.map((itemTodo,index) => {
      return(
        <div key={index} className={styleTodos.todoList} id={itemTodo.id}>
          <div>{itemTodo.title}</div>
          <div className={styleTodos.buttonContainer}>
            <button onClick={() => {props.handleEditValue(index,itemTodo.id)}} className={styleTodos.buttonTodoList}>Edit</button>
            <button onClick={() => {props.handleClickDelete(index)}} className={styleTodos.buttonTodoList}>Delete</button>
          </div>
        </div>
      )
    })}
  </div>
  )
} 

Todos.propTypes = {
  todos : PropTypes.arrayOf(PropTypes.shape({
    title : PropTypes.string 
  })),
  handleEditValue : PropTypes.func,
  handleClickDelete : PropTypes.func
}
export default Todos