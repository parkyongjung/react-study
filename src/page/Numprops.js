import React from "react";
import styled from "styled-components";
import Numstate from "./Numstate";

const Header = styled.h1`
    font-size:50px;
    font-weight:bold;
`

const Numprops = () => {
    return <>
        <Header>props : properties</Header>
        <Numstate age={10} />
        <Numstate age={20} />
        <Numstate age={30} />
    </>
}

export default Numprops;