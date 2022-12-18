import React from 'react';
import "./seaBattle.css"


export const HAS_SHIP_NOT_DESTROYED =  0
export const HAS_SHIP_DESTROYED =  1
export const NO_SHIP_NOT_DESTROYED =  2
export const NO_SHIP_DESTROYED =  3

export function renderMyCell(index, myField, setMyField){
    return <div className={`cell ${getStyle(myField[index])}`}  ></div>
}

export function renderEnemyCell(index, enemyField, setEnemyField){
    return <div className={`cell ${getStyle(enemyField[index])}`}  ></div>
}

function getStyle(value){
    if (value === HAS_SHIP_DESTROYED){
        return "has_ship_destroyed"
    }
    if (value === HAS_SHIP_NOT_DESTROYED){
        return "has_ship_not_destroyed"
    }
    if (value === NO_SHIP_DESTROYED){
        return "no_ship_destroyed"
    }
    if (value === NO_SHIP_NOT_DESTROYED){
        return "no_ship_not_destroyed"
    }
}

export function createMyNewRandomField(){
    const field = Array.apply(null, Array(100)).map(()=>{return NO_SHIP_NOT_DESTROYED})
    field[0] = HAS_SHIP_NOT_DESTROYED
    field[10] = HAS_SHIP_NOT_DESTROYED
    field[20] = HAS_SHIP_NOT_DESTROYED
    field[30] = HAS_SHIP_NOT_DESTROYED

    field[5] = HAS_SHIP_NOT_DESTROYED
    field[6] = HAS_SHIP_NOT_DESTROYED
    field[7] = HAS_SHIP_NOT_DESTROYED

    field[70] = HAS_SHIP_NOT_DESTROYED
    field[80] = HAS_SHIP_NOT_DESTROYED
    field[90] = HAS_SHIP_NOT_DESTROYED

    console.log(field)
    return field
}

export function createEnemyNewRandomField(){
    const field = Array.apply(null, Array(100)).map(()=>{return NO_SHIP_NOT_DESTROYED})
    field[3] = HAS_SHIP_NOT_DESTROYED
    field[13] = HAS_SHIP_NOT_DESTROYED
    field[23] = HAS_SHIP_NOT_DESTROYED
    field[33] = HAS_SHIP_NOT_DESTROYED

    field[15] = HAS_SHIP_NOT_DESTROYED
    field[16] = HAS_SHIP_NOT_DESTROYED
    field[17] = HAS_SHIP_NOT_DESTROYED

    field[60] = HAS_SHIP_NOT_DESTROYED
    field[70] = HAS_SHIP_NOT_DESTROYED
    field[80] = HAS_SHIP_NOT_DESTROYED

    console.log(field)
    return field
}
