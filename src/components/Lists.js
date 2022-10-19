import React, { useState } from "react";
import Cards from "./Cards";

let allCards = []
let idarr = []
let num = 0

export default function Lists(props) {
  const [visible, setVisible] = useState("none");
  const [title, setTitle] = useState("Add a Note...");

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
      content: []
    }
    card.title = document.getElementById('cardTitle').value
    let arr = document.getElementById('cardContent').value.split(/\n/)
    card.content = arr
    card.id = num

    console.log(arr)

    if(card.title.split(/\s+/).filter((element)=>{return element.length!==0}).length===0 && card.content.split(/\s+/).filter((element)=>{return element.length!==0}).length===0)
    {
      alert("No Tasks to Add")
    }
    else
    {
      num = num + 1;
      // setCardState((prev) => {
      //   return [...prev, card]
      // })
      allCards.push(card)
      setCardState(allCards)
      hideBody()
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
      <Cards title={val.title} content={val.content} deleteItem={deleteItem} id={val.id} mode={props.mode} key={index} from={"lists"}/>
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

            <textarea type="text" rows="" cols="" placeholder="Content" id="cardContent" autoComplete="off"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#142c59",
                color: props.mode === "light" ? "black" : "white",
              }}/>
            <div className="d-flex justify-content-end mb-2"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#142c59",
                color: props.mode === "light" ? "black" : "white",
              }}>

              <button className="btn me-5" onClick={addCard}
                style={{
                  color: props.mode === "light" ? "black" : "white",
                }}>
                  <i className="fa-solid fa-plus fa-lg" />
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
  );
}
