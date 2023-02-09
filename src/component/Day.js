// import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useFetch } from "../hooks/useFetch"
// import dummy from "../data/data.json"
import Word from "./Word"


const H2 = styled.h2`

`
const DayTb = styled.table`
    border-collapse: collapse;
    width: 100%;
`
const Tbody = styled.tbody`

`

const Day = () => {
    // dummy.words

    const { day } = useParams();
    // const wordList = dummy.words.filter(word => word.day === Number(day) )
    // const [words, setWords] = useState([]);

    // useEffect(()=> {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     // fetch("http://localhost:3001/words")
    //     .then(res=> {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setWords(data);
    //     })
    // }, [day])

    const words = useFetch(`http://localhost:3001/words?day=${day}`)

    return <>
        <H2>Day {day}</H2>
        <DayTb>
            <Tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}></Word>
                ))}
            </Tbody>
        </DayTb>
    </>
}

export default Day