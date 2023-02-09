import React, { useState } from "react";
import styled from "styled-components";
import UserName from "../component/UserName";

const Header = styled.h1`
    font-size:50px;
    font-weight:bold;
`

const Button = styled.button`

`
const H2 = styled.h2`

`
const Numstate = ({ age }) => {
    const [state, setState] = useState({
        name: 'park',
        age: age
    });
    // const [age, setAge] = useState(props.age);
    const msg = age > 19 ? "성인" : "미성년자";

    // let name = 'park'

    const changeName = () => {
        // name = name === 'park' ? 'yong' : 'park'
        setState({ 
            ...state,
            name: state.name === 'park' ? 'yong' : 'park',
            age: state.age + 1
        })
        console.log(state.name)
    }

    return <>
        <Header>state</Header>
        <H2>
            {state.name}({state.age}) : {msg}
        </H2>
        <UserName name={state.name} />
        <Button onClick={changeName}>Change</Button>
    </>
}

export default Numstate