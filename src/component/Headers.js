import { Link } from "react-router-dom"
import styled from "styled-components"


const HeaderBox = styled.div`
    position: relative;
`
const HeaderTitle = styled.h1`
    font-size:30px;
    font-weight:bold;
`
const HeaderMenu = styled.div`
    position: absolute;
    top: 10px;
    right: 0;
`
const MenuLink = styled.a`
    border: 1px solid #333; 
    padding: 10px;
    margin-left: 10px;
    background-color: #efefef;
    font-weight: bold;
    border-radius: 4px;
`

const Header = () => {
    return <>
        <HeaderBox>
            <HeaderTitle><Link to="/">토익 영단어(고급)</Link></HeaderTitle>
            <HeaderMenu>
                
                <MenuLink href="#x">단어 추가</MenuLink>
                <MenuLink href="#x">Day 추가</MenuLink>
            </HeaderMenu>
        </HeaderBox>
    </>
}

export default Header