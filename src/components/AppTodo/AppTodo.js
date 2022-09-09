import styleAppTodo from './AppTodo.module.css'
import {PropTypes} from 'prop-types'

let AppTodo = (props) => {
  return(
    <div className={styleAppTodo.app__todo}>
      {props.children}      
    </div>
  )
}
AppTodo.propTypes = {
  children : PropTypes.node
}
export default AppTodo;