import { useState } from "react"
import styled from "styled-components"

const Tr = styled.tr`
    &.off {
        background: #eee;
        color: #ccc;
    }
`
const Td = styled.td`
    width: 25%;
    height: 70px;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 26px;
    &:first-child {
        width: 10%;
    }
`
const Checkinput = styled.input`
    
`
const TbButton = styled.button`
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    border: 0 none;
    border-radius: 6px;
    padding: 10px 20px;
    color: #fff;
    background-color: dodgerblue;
`
const DeleteBtn = styled.button`
    margin-left: 10px;
    color: #fff;
    background-color: firebrick;
`

const Word = ({ word }) => {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    const toggleShow = () => {
        setIsShow(!isShow)
    }
    const toggleDone = () => {
        setIsDone(!isDone)
    }
    return <>
        <Tr className={isDone ? "off" : ""}>
            <Td>
                <Checkinput type="checkbox" checked={isDone} onChange={toggleDone}/>
            </Td>
            <Td>{word.eng}</Td>
            <Td>{isShow && word.kor}</Td>
            <Td>
                <TbButton onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</TbButton>
                <DeleteBtn>삭제</DeleteBtn>
            </Td>
        </Tr>
    </>
}

export default Word