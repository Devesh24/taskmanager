import React, {useState} from "react";

export default function Navbar(props) {
    const [val, setVal] = useState("")
    const handleChange = (event) => {
        setVal(event.target.value)
        props.search(event.target.value)
    }

  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.mode} px-2 py-3`}  style={{color: props.mode==='light' ? 'black' : 'white'}}>
        <span className="icon me-3" onClick={props.toggleSide}>
            <i className="fa-solid fa-bars fa-lg px-3 py-4"></i>
        </span>
        <div className="container-fluid">
            <div id="title" href="/">
            Task Manager
            </div>
            <form className="d-flex" id="search" role="search" style={{backgroundColor: 'inherit'}}>
                <input
                    className="form-control me-2 ps-4"
                    type="search"
                    value={val}
                    onChange={handleChange}
                    placeholder="🔍    Search"
                    aria-label="Search"
                    style={{backgroundColor: props.mode==='light' ? 'white' : '#303030', color: props.mode==='light' ? 'black' : 'white'}}
                />
            </form>
            <div className="form-check form-switch mx-3">
                <input
                    className="form-check-input me-3"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onClick={props.toggleDarkMode}
                />
                <label className="form-check-label fw-bold" htmlFor="flexSwitchCheckDefault">
                    Dark Mode
                </label>
            </div>
        </div>
    </nav>
    </>
  );
}
