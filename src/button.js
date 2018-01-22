import React from 'react'

export default function Btn(props){
    return (
        <button onClick={()=> props.Cool()}>{props.btnName}</button>
    )
}
