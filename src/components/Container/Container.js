import Stylecontainer from './Container.module.css'
import PropTypes from 'prop-types'


let Container = (props) => {
  return(
    <div className={Stylecontainer.container}>
       <h1 className={Stylecontainer.title__todo}>Todo List Simple</h1>
      {props.children}
    </div>
  )
}
Container.propTypes = {
  children : PropTypes.node
}
export default Container;