import { Link } from "react-router-dom"
import styled from "styled-components"
import { useFetch } from "../hooks/useFetch"
// import dummy from "../data/data.json"

const DayListstyle = styled.ul`
    display: flex;
    flex-wrap: wrap;
`
const DayListLi = styled.li`
    flex: 20% 0 0;
    box-sizing: border-box;
    padding: 10px;
    & > a {
        display: block;
        padding: 20px 0;
        font-weight: bold;
        color: #fff;
        text-align: center;
        border-radius: 10px;
        background-color: dodgerblue;
    }
`


const DayList = () => {
    // const [days, setDays] = useState([]);
    // const [count, setCount] = useState(0);

    // const countClick = () => {
    //     setCount(count+1)
    // }
    // const daysClick = () => {
    //     setDays([
    //         ...days,
    //         {
    //             id : Math.random(),
    //             day: 1
    //         }            
    //     ])
    // }

    // useEffect(()=> {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         setDays(data)
    //     })
    // }, [])

    const days = useFetch("http://localhost:3001/days")

    return <>
        <DayListstyle>
            {days.map(day => (
                <DayListLi key={day.id}>
                    <Link to={`/day/${day.day}`}>
                        Day {day.day}
                    </Link>
                </DayListLi>
            ))}
        </DayListstyle>
        {/* <button onClick={countClick}>{count}</button> */}
        {/* <button onClick={daysClick}>Day Change</button> */}
    </>
}

export default DayList 