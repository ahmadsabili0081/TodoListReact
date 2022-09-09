import { useState } from 'react';
import Container from './components/Container/Container';
import AppTodo from './components/AppTodo/AppTodo';
import Todos from './components/Todos/Todos';
import Form from './components/Form/Form';
import Empty from './components/Empty/Empty';


function App() {

  function funcEdit(){
    return Math.round(Math.random() * 1000)
  }
  const [idEl,seTid] = useState(null)
  const[edit,setEdit] = useState(false)
  const [value,setValue] = useState("");
  const [todos,setTodos] = useState([
  ]);

  let handleChangeValue = (e) => {
    setValue(e.target.value);
  }
  
  let handleSubmitAdd = (e) => {
    e.preventDefault();
    if(!value){
      window.alert('isi form anda, jangan kosong !!');
    }else{
      let addTodo = [...todos,{
        id : funcEdit(),
        title : value
      }]
      setTodos(addTodo);
      setValue("");
    }
  }
  let handleClickDelete = (index) => {
    let deletedTodo = [...todos];
    deletedTodo.splice(index,1);
    setTodos(deletedTodo)
  }
  let handleEditValue = (index,id) =>{
    let EditTodo = [...todos];
    let getId = EditTodo.find((item) => {
      return item.id === id
    });
    setEdit(true)
    setValue(getId.title)
    seTid(id);
  }

  let handleEditBtn = (e) => {
    setValue(e.target.value);
    if(!value){
      window.alert('Mohon isi form edit dengan benar');
    }else{
      let newTodos = [...todos];
      setTodos(
        newTodos.map((itemNew) => {
          if(itemNew.id === idEl){
           return {...itemNew, title: value}
          }
          return itemNew
       })
      );
      setEdit(false)
    }

        
  }
  return (
    <>
      <Container>
        <AppTodo>
          {/* form input */}
          <Form 
            edit={edit}
            handleChangeValue={handleChangeValue}
            value={value}
            handleEditBtn={handleEditBtn}
            handleSubmitAdd={handleSubmitAdd}
          />
          {/* todos */}
            {todos.length > 0 ? 
            (
              <Todos
              todos={todos}
              handleEditValue={handleEditValue}
              handleClickDelete={handleClickDelete}
              />
            ):(
              <Empty />
            )}
        </AppTodo>
      </Container>
    </>
  );
}

export default App;
