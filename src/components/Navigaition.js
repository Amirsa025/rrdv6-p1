import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';

const Navigaition = () => {
  return (
        <>
            <Link to="landing">landing</Link>
            <Link to="Home">Home</Link>
            <Link to="Admin">Admin</Link>
            <Link to="Analitics">Analitics</Link>
        </>
  )
}

export default Navigaition