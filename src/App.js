import logo from './logo.svg';
import './App.css';
import image from './image.png'; 
import { useState, useEffect } from 'react'
import { FaMinusCircle ,FaEnvelopeOpenText} from "react-icons/fa";


function App() {

  const[input,setInput] = useState("");
  const[list,setList] = useState([] );
const[edi,setEdi] = useState(null);
const[key,setKey] = useState('');

const changeHandler =(event) =>{
 
  var eve =event.target.value

  
 setInput(event.target.value)




}

const edit =(keys) =>{
 console.log(keys)
 let storeList = [...list];
 console.log(storeList)

let inde = storeList[keys]
console.log(inde)

setInput(inde);
setEdi(keys);




}
const add =()=>{
  console.log(input)
  if (input === "") {

    alert("Enter a key");

    return;

  }

 
let storeList = [...list];


if(edi !==  null){
storeList[edi] = input;
setList(storeList);
setEdi(null);

}
else{
  storeList.push(input);
  setList(storeList);

}
setInput("");
  
}
const delet =(index)=>{
  let storeList = [...list];
  storeList.splice(index,1);
  setList(storeList);

}
  return (


    <div className="App">
        <img src={image} alt="image" style={{ width:'250px',height:'150px' }}/>
    <input type ="text" onChange={changeHandler}  value ={input}></input>
    <button className="button" onClick={add}>+</button>

 

 {list.map((list,index) =>{
  return(
    <div key = {index}>
  <p key ={index} style={{color: "red"}}> {list }</p>

   <br></br>
  <div className = 'edit'>
  < button className ='button'onClick={() => delet(index)}>🗑</button>
  
  <button  className ='button' onClick={() => edit(index)} >✎</button>
  <input className ='button' style={{  backgroundcolor:'#eee', color:'black'}} type="checkbox" />
  </div>
  </div>
  )
 }
 )}

    </div>
  );
}

export default App;

