import React, { useState } from "react";
import Cards from "./Cards";

let allCards = []
let idarr = []
let num = 0

export default function Reminder(props) {

  const [visible, setVisible] = useState("none");
  const [title, setTitle] = useState("Add a Note...");
  const [inputTime, setInputTime] = useState(new Date((new Date()).getTime() + 300000))

  const showBody = () => {
    setVisible("block");
    setTitle("Title");
  };
  const hideBody = () => {
    setVisible("none");
    document.getElementById('cardTitle').value = ''
    document.getElementById('cardContent').value = ''
    setTitle("Add a Note...");
  };
  
  const [cardState, setCardState] = useState([])
  
  const addCard = () => {
    let card = {
      id: 0,
      title: '',
      content: [],
      time: ''
    }
    card.title = document.getElementById('cardTitle').value
    let arr = document.getElementById('cardContent').value.split(/\n/)
    card.content = arr
    card.id = num
    card.time = new Date(inputTime).toLocaleString()

    if(card.title.split(/\s+/).filter((element)=>{return element.length!==0}).length===0 && card.content.split(/\s+/).filter((element)=>{return element.length!==0}).length===0)
    {
      alert("No Tasks to Add")
    }
    else
    {
      let t = Date.parse(inputTime) - Date.parse(new Date())
      setTimeout(() => {
        alert("Reminder for a Task")
      }, t);

      num = num + 1;
      allCards.push(card)
      setCardState(allCards)
      hideBody()
      setTimeout(() => {
        alert("Added the reminder for " + card.time)
      }, 100);
    }
  }

  const deleteItem = (cardid) => {
    idarr.push(cardid)
    allCards = allCards.filter(x => !idarr.includes(x.id))
    setCardState(allCards)
    idarr = idarr.filter((x)=>x!==cardid)
  }

  const showCards = (val, index) => {
    return(
      <Cards title={val.title} content={val.content} deleteItem={deleteItem} id={val.id} mode={props.mode} key={index} from={"remind"} time={val.time}/>
    )
  }
  

  return (
    <>
      <div className="content d-flex">

        <div className="incontent"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#142c59",
            color: props.mode === "light" ? "black" : "white",
          }}>

          <input type="text" placeholder={title} onClick={showBody} id='cardTitle' autoComplete="off"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#142c59",
              color: props.mode === "light" ? "black" : "white",
            }}/>
          <div style={{ display: visible }}>

            <textarea rows="1" cols="" placeholder="Content" id="cardContent" autoComplete="off"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#142c59",
                color: props.mode === "light" ? "black" : "white",
              }}/>

            <div className="d-flex">
              <div className="w-25 border ms-3" >
                <input type="datetime-local" value={inputTime} onChange={(event)=>{setInputTime(event.target.value)}} id="mytime" style={{
                backgroundColor: props.mode === "light" ? "white" : "#142c59",
                color: props.mode === "light" ? "black" : "white",
              }}/>
              </div>
            </div>
            
            <div className="d-flex justify-content-end mb-2"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#142c59",
                color: props.mode === "light" ? "black" : "white",
              }}>

              <button className="btn me-5" onClick={addCard}
                style={{
                  color: props.mode === "light" ? "black" : "white",
                }}>
                  Set Reminder
                </button>
              <button className="btn me-5" onClick={hideBody}
                style={{
                  color: props.mode === "light" ? "black" : "white",
                }}>
                  Close
                </button>

            </div>
          </div>
        </div>

        <div className="d-flex cardBox">
          {cardState.map(showCards)}
        </div>

      </div>
    </>
  )
}
