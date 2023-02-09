import './App.css';
// import Hello from './component/Hello';
// import Welcome from './component/Welcome';
// import World from './component/World';page
// import styled from './App.module.css';
// import Numstate from './page/Numstate';
import Numprops from './page/Numprops';
import Header from './component/Headers';
import DayList from './component/DayList';
import Day from './component/Day';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmptyPage from './component/EmptyPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={ <DayList /> } />
        <Route path="/day/:day" element={ <Day /> } />
        <Route path="/btn" element={ <Numprops /> } />
        <Route element={ <EmptyPage /> } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
