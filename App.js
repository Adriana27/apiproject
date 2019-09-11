import React, {useState,useEffect} from 'react';
import './App.css';
import RowList from "./RowList";
import axios from "axios";
import Row from "./Row";
import {employees2} from "./employees2";



const url="http://dummy.restapiexample.com/api/v1/employees";
//
// const employees= ()=>
//     axios
//         .get(url)
//         .then(res => {
//             const persons= res.data;
//             this.setState({persons});
//         })
//         .catch(e=> {console.log(e);
//         })
// ;
function App() {
    const [data , setData] =useState({employees:[]});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(
                url
            );
            setData({ employees: response.data });
        };

        fetchData();
    }, []);

  return (
    <div className="App">
      <header className="App-header">
            <RowList data={data}/>
      </header>

    </div>
  );
}

export default App;
