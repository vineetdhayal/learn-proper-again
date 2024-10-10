import React, { useState } from 'react'
import { boardDefault } from './words';
import Letter from './Letter';
import './letter.css'

const Board = () => {
    return (
        <div className='grid'>
            <div className='row'>
                <Letter letterPos={0} attemptval={0}></Letter>
                <Letter letterPos={1} attemptval={0}></Letter>
                <Letter letterPos={2} attemptval={0}></Letter>
                <Letter letterPos={3} attemptval={0}></Letter>
                <Letter letterPos={4} attemptval={0}></Letter>
            </div>
            <div className='row'>
                <Letter letterPos={0} attemptval={1}></Letter>
                <Letter letterPos={1} attemptval={1}></Letter>
                <Letter letterPos={2} attemptval={1}></Letter>
                <Letter letterPos={3} attemptval={1}></Letter>
                <Letter letterPos={4} attemptval={1}></Letter>
            </div>
            <div className='row'>
                <Letter letterPos={0} attemptval={2}></Letter>
                <Letter letterPos={1} attemptval={2}></Letter>
                <Letter letterPos={2} attemptval={2}></Letter>
                <Letter letterPos={3} attemptval={2}></Letter>
                <Letter letterPos={4} attemptval={2}></Letter>
            </div>
            <div className='row'>
                <Letter letterPos={0} attemptval={3}></Letter>
                <Letter letterPos={1} attemptval={3}></Letter>
                <Letter letterPos={2} attemptval={3}></Letter>
                <Letter letterPos={3} attemptval={3}></Letter>
                <Letter letterPos={4} attemptval={3}></Letter>
            </div>
            <div className='row'>
                <Letter letterPos={0} attemptval={4}></Letter>
                <Letter letterPos={1} attemptval={4}></Letter>
                <Letter letterPos={2} attemptval={4}></Letter>
                <Letter letterPos={3} attemptval={4}></Letter>
                <Letter letterPos={4} attemptval={4}></Letter>
            </div>
        </div>
    )
}

export default Board
