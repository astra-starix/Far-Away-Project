/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";
export default function PackingList({items, onDeleteItems, onToggleItem, onClear}){
    const[sortBy, setSortBy] = useState("input");
    let sortedItems;
    if(sortBy === "input")
      sortedItems = items;
    if(sortBy === "quantity")
      sortedItems = items.slice()
      .sort((a, b) => Number(a.quantity) - Number(b.quantity));
    if(sortBy === "packed")
      sortedItems = items.slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item)=>(<Item item={item} onDeleteItems={onDeleteItems} onToggleItem={onToggleItem} key={item.id}/>))}
        </ul>
        <div className="actions">
          <select  value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by Input Order</option>
            <option value="quantity">Sort by Quantity</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button className="button" onClick={onClear}>Clear List</button>
        </div>
      </div>
    )
  }