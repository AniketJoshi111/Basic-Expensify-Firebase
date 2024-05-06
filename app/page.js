'use client';
import React,{useState,useEffect} from "react";
import { collection, addDoc,getDoc,QuerySnapshot, onSnapshot,query } from "firebase/firestore"; 
import {db} from './firebase'
export default function Home() {
  const [items,setitems] = useState([
    {name:"Coffee" ,price:5.2},
   
  ]);
  const [newItem, setnewItem] = useState({name:'',price:''});
  const [total,setTotal] = useState(0);
  // add items to database
  const addItem = async (e)=>{
    e.preventDefault();
    if(newItem.name!=='' && newItem.price!=='')
    {
      //setitems([...items,newItem]);
      await addDoc(collection(db,'items'),{
        name: newItem.name.trim(),
        price:  newItem.price,
      });
    }
  };

  // read items from database
  useEffect(()=>{
    const q = query(collection(db,'items'))
    const unsubscribe = onSnapshot(q,(QuerySnapshot)=>{
      let itemsArray = []
      QuerySnapshot.forEach((doc) => {
        itemsArray.push({...doc.data(), id:doc._id})
      })
      setitems(itemsArray)
    })
  },[])
  // delete items from database

  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm ">
        <h1 className="text-4xl p-4 text-center">Expense Tracker</h1>
      </div>
      <div className="bg-slate-800 p-4 rounded-lg">
        <form className="grid grid-cols-6 items-center text-black">
          <input
            value={newItem.name}
            onChange={(e)=> setnewItem({...newItem , name: e.target.value})}
            className="col-span-3 p-3 border"
            type="text"
            placeholder="Enter Item"

          />
          <input
            value={newItem.price}
            onChange={(e)=> setnewItem({...newItem , price: e.target.value})}
            className="col-span-2 p-3 border mx-3"
            type="number"
            placeholder="Enter $"
          />
          <button
            onClick={addItem}
            className="text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl"
            type="submit"
          >
            +
          </button>
        </form>
        <ul>
          {items.map((item,id)=>(
            <li key={id} className="my-4 w-full flex justify-between bg-slate-950">  
              <div className="p-4 w-full flex justify-between">
                <span className="capitalize text-white">{item.name}</span>
                <span className="text-white">${item.price}</span>
              </div>
              <button className="ml-8 p-4 border-l-2 border-slate-900
              hover:bg-slate-900 w-16">
              X
              </button>
            </li>
          ))}
        </ul>
        {items.length<1 ? (''):(
          <div className="flex justify-between p-2.5">
          <span>total</span>
          <span>${total}</span>
          </div>
        )}
      </div>
    </main>
  );
}
