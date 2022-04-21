import React from 'react'
import style from "./Menu.module.css"

export default function Menu({loading, list,setList}) {
   const handleDelete = (index) => {
      let newList =  list.filter((i, index1) =>  index1 !== index )
      setList(newList)
   }

   return (
   list.length > 0 ?
   <div className={style.listContainer}>
      <p>Name</p>
      {loading? 
      <div className={style.loading}></div>
      :
      <>
      {list.map((i, index)=> <div key={index} className={style.item}>
         {i.name}
         <button onClick={() => handleDelete(index)}>delete</button>
      </div>)}
      </>}
   </div>
   :
   <div className={style.isEmpty}>
      is empty
   </div>
  )
}
