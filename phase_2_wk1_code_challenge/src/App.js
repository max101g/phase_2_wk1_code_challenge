import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Table from './Table';
import Searchbar from './Searchbar';
import Form from './Form';

function App() {
  const [transactions, setTransactions] = useState([])

  useEffect (()=> {
    fetch ("http://localhost:3000/transactions")
      .then ((r)=> r.json ())
      .then ((data)=> setTransactions(data))
  }, [])

  function updatedTransactions (newData) {
    const updatedTransactionsArray = [...transactions, newData]
    setTransactions (updatedTransactionsArray)
  }

  return (
    <div className="App">
      <Navbar/><br/>
      {/* <Searchbar searchData = {transactions}/> <br/> */}
      <Form newTransaction = {updatedTransactions}/><br/>
      <Table arayOfAllTransactions = {transactions}/>
    </div>
  );
}

export default App;
