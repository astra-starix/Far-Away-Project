/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats.1";

export default function App(){
  const [items, setItems] = useState([]);

  function handleAddItems(item){
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id){
    setItems((items) => items.filter((item) => item.id !== id))
  }
  function handleToggleItems(id){
    setItems((items) => items.map((item) => item.id === id ? {...item, packed : !item.packed} : item));
  }
  function handleClearItems(){
    const confirmation = window.confirm("Are you sure to delete all the items from you list");
    if(confirmation)setItems([]);
  }
  return(
    <div className="app">
      <Logo/>
      <Form onAddItems={handleAddItems}/>
      <PackingList 
      items={items} 
      onDeleteItems={handleDeleteItems} 
      onToggleItem={handleToggleItems} 
      onClear = {handleClearItems}/>
      <Stats items={items} />
    </div>
  )
}