// import React, { usestate } from "react"
import styled from "styled-components"

const Button = styled.button`

`
const Input = styled.input`

`

const Hello = () => {
    const showGame = () => {
        console.log('test')
    }
    const showAge = (age) => {
        console.log(age)
    }
    // const showText = (txt) => {
    //     // console.log(e.target.value);
    //     console.log(txt);
    // }

    return <>
        <Button onClick={showGame}>show name</Button>
        <Button onClick={()=> {
            showAge(10)
        }}>show age</Button>
        {/* <Input type="text" onChange={showText}/> */}
        <Input type="text" onChange={(e) => {
            const txt = e.target.value;
            console.log(txt);
        }}/>
    </>
}
export default Hello