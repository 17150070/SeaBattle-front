import React from 'react';
import "./seaBattle.css"


export const HAS_SHIP_NOT_DESTROYED =  0
export const HAS_SHIP_DESTROYED =  1
export const NO_SHIP_NOT_DESTROYED =  2
export const NO_SHIP_DESTROYED =  3

export function renderCell(value){
    // return <div className='cell' onClick={}></div>
    return <div className='cell' ></div>
}

export function createNewRandomField(){
    const field = Array.apply(null, Array(100)).map(()=>{return NO_SHIP_NOT_DESTROYED})
    console.log(field)

    return field
}
