import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = () => {
    return <h2>Home (Protected: authenticated user required)</h2>;
  };

  export default Home;