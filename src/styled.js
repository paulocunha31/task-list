import styled from "styled-components";

import { FcCheckmark, FcFullTrash } from "react-icons/fc";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const ToDoList = styled.div`
    background: white;
    padding: 30px 20px;
    border-radius: 5px;
    background: #FFFFFF;


ul{
    padding: 0;
    margin-top: 60px;

    h3{
        
    }
}
`

export const Input = styled.input`
    border-radius: 5px;
    border: 2px solid rgba(209, 211, 212, 0.40);
    height: 40px;
    margin-right: 10px;
    outline: none;
    width: 340px;
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0 0 0 10px;

`

export const Button = styled.button`
    border-radius: 5px;
    background: #8052EC;
    height: 40px;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    border: none;
    color: #ffffff;
    width: 156px;
    cursor: pointer;

&:hover{
    opacity: 0.9;
}
&:active{
    opacity: 0.6;
}

`

export const ListItem = styled.div`
    border-radius: 5px;
    background: ${(props) => (props.$isfinished && '#E8FF8B')} ;
    box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.20);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 60px;
    margin-bottom: 25px;
    width: 500px;
    
   

li{
    list-style: none;

}

`

export const Trash = styled(FcFullTrash)`
    cursor: pointer;
    width: 30px;
    height: 30px;

&:hover{
    opacity: 0.9;
}
&:active{
    opacity: 0.6;
}

`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
    width: 30px;
    height: 30px;

`
export const ContainerLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: brown; 

`

export const ContainerButton = styled.div`
    display: flex;
    gap: 25px;

    
`

export const CheckInfo = styled.span`
position: relative;
&:hover::after {
    content: ${(props) => (props.$isfinished ? '"Retornar"': '"Concluir"')};
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #7B68EE;
    color: red;
    padding: 5px;
    border-radius: 5px;
    font-size: 12px;
    opacity: 0.9;
    white-space: nowrap;
    color: white;
}

`
export const TrashInfo = styled.span`
    position: relative;
&:hover::after {
    content: 'Excluir';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #FF0000;
    padding: 5px;
    border-radius: 5px;
    font-size: 12px;
    opacity: 1;
    white-space: nowrap;
    color: white;
}


`