

import { useState, useRef } from 'react';

import { v4 as uuid } from 'uuid';

import {
  Container, ToDoList, Input, Button, ListItem, Check, Trash, ContainerLabel,
  ContainerButton, CheckInfo, TrashInfo
} from './styled';



function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState()
  const myinput = useRef()
  const inputfocus = () => {
    myinput.current.focus()
  }


  function inputValue(event) {
    setInputTask(event.target.value)
    
  }

  function addTask() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    } else {
      alert('Por favor digite uma tarefa!')

    }

    setInputTask("")
  }

  function finishTask(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)

  }

  function deleteTask(id) {

    const newList = list.filter(item => item.id !== id)

    setList(newList)

  }


  return (

    <Container>
      <ToDoList>

        <Input value={inputTask} ref={myinput} onChange={(e) => {setInputTask(e.target.value) ; {inputValue}}} placeholder="O que tenho para fazer..." />
        
        <Button onClick={() => { addTask(); inputfocus(); }} > Adicionar </Button>

        <ul>

          {
            list.length > 0 ? (

              list.map((item) => (

                <ListItem $isfinished={item.finished} key={item.id} >

                  <li >{item.task}</li>

                  <ContainerButton >
                    <CheckInfo $isfinished={item.finished} >

                      <Check onClick={() => finishTask(item.id)} />
                    </CheckInfo>

                    <TrashInfo >
                      <Trash onClick={() => deleteTask(item.id)} />
                    </TrashInfo>


                  </ContainerButton>

                </ListItem>
              ))
            ) : (
              <ContainerLabel>
                <h3>Não há itens na lista</h3>
              </ContainerLabel>
            )
          }

        </ul>

      </ToDoList>

    </Container>

  )


}


export default App
