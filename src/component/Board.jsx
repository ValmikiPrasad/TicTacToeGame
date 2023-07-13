import React, { useEffect, useState } from "react";
import Box from "./Box";
const Board=()=>{
    const[state,setState]=useState(Array(9).fill(null));
    const[isXturn,setturn]=useState(true);
    const checkWinner=()=>{
        const logic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]
        for(let arr of logic){
            const[a,b,c]=arr;
            if(state[a]!==null && state[a]===state[b] && state[a]==state[c]){
                return state[a];
            }

        }
        return false;
    }
    const winner=checkWinner();
    // if(winner){
    //     setState(Array(9).fill(null));
    // }
    const handleClick=(index)=>{
        if(state[index]!=null){
            return;
        }
        const copy=[...state];
        copy[index]=isXturn?"X":"0";
        setState(copy);
        setturn(!isXturn);
    }
    return(
        <>
        <div className="board">
            {/* <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/> */}
            {
                state.map((value,index)=>{
                    return(
                        <Box key={index}
                        id={index}
                        value={value}
                        onclick={handleClick}/>
                    )               
                })
            }

        </div>
        <div className="win">
            winner is:{
                winner?` ${winner}`:null
            }
        </div>
        </>
    )
}
export default Board;