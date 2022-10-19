import React from "react";

export default function Cards(props) {

  return (
    <>
      <div className="card" style={{ width: "18em" , margin: "1rem", backgroundColor: props.mode === "light" ? "white" : "#111e36", border: props.mode === "light" ? "1px solid lightgray" : "1px solid white", color: props.mode === "light" ? "black" : "white"}}>
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text fs-5" style={{display: props.from==="lists" ? 'none' : 'block'}}>
          {props.content.map((elem, ind)=>{
              return(
                <span className="my-1 d-flex check" key={ind}> 
                    {elem}
                </span>
              )
            })}
          </p>
          <p className="card-text fs-5" style={{display: props.from==="lists" ? 'block' : 'none'}}>
            {props.content.map((elem, ind)=>{
              return(
                <span className="my-1 d-flex check" key={ind}> 
                    <input id="checkBox" type="checkbox" className="me-2" />
                    <label htmlFor="checkBox"> {elem} </label>
                </span>
              )
            })}
          </p>
          <div className={`d-flex justify-content-${props.from==="remind" ? 'between' : 'end'}`}>
            <div style={{display: props.from==="remind" ? 'block' : 'none'}}><div className="reminder border rounded px-2">{props.time}</div></div>
            <div className="trash" onClick={()=>{props.deleteItem(props.id)}}>
              <i className="fa-solid fa-trash fa-lg my-2 p-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
