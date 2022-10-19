import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';
import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Reminder from './components/Reminder';
import Lists from './components/Lists';
import Search from './components/Search';



function App() {

  const [slide, setSlide] = useState("none")
  const [mode, setMode] = useState('light')
  const [searchVal, setSearchVal] = useState("")

  const toggleSide = () => {
    if(slide === 'none')
    {
      setSlide("block")
    }
    else
    {
      setSlide("none")
    }
  }

  const toggleDarkMode = () => {
      if(mode === 'light')
      {
          setMode('dark')
          document.body.style.backgroundColor = '#111e36'
      }
      else
      {
          setMode('light')
          document.body.style.backgroundColor = '#ffffff'
      }
  }

  const search = (val) => {
    setSearchVal(val)
  }

  return (
    // <>
      // <Navbar toggleSide={toggleSide} toggleDarkMode={toggleDarkMode} mode={mode}/>
      // <span className="d-flex">
      //   <Sidebar slide={slide} mode={mode}/> 
      //   <div className='w-100'>
      //     <Tasks mode={mode}/>
      //   </div>
      // </span>
    // </>
    <>
      <Router>
        <Navbar toggleSide={toggleSide} toggleDarkMode={toggleDarkMode} mode={mode} search={search}/>
        <span className="d-flex">
          <Sidebar slide={slide} mode={mode}/> 
          <span className="w-100" style={{display: searchVal==="" ? "none" : "block"}}>
            <Search/>
          </span>
          <div className='w-100' style={{display: searchVal!=="" ? "none" : "block"}}>
            <Routes>
              <Route exact path="/" element={<Tasks mode={mode} searchVal={searchVal}/>} />
              <Route exact path="/remind" element={<Reminder mode={mode} searchVal={searchVal}/>} />
              <Route exact path="/list" element={<Lists mode={mode} searchVal={searchVal}/>} />
            </Routes>
          </div>
        </span>
      </Router>
    </>
  );
}

export default App;
