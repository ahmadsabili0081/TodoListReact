import styleTodos from './Form.module.css'
import PropTypes  from 'prop-types'

let Form = (props) => {
  return(
    <form className={styleTodos.form}>
    <input type="text" onChange={props.handleChangeValue} value={props.value} className={styleTodos.inputTodo} placeholder='write something...'></input>
    {props.edit ? <button onClick={props.handleEditBtn}  className={styleTodos.addTodo} type='button'>Edit</button> : <button onClick={props.handleSubmitAdd}  className={styleTodos.addTodo} type='button'>Add</button>}
  </form>
  )
}
Form.propTypes = {
  edit : PropTypes.bool,
  handleChangeValue : PropTypes.func,
  value : PropTypes.string,
  handleEditBtn : PropTypes.func,
  handleSubmitAdd : PropTypes.func
}
export default Form;