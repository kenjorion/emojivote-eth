import React, { useEffect, useState } from 'react'
import { ethers } from "ethers";
import { useTimestamp } from "./hooks"
import { Card } from 'antd';
//import * as loadedVotes from "./validVotes.json"

export default function TimeReport(props) {

  const [votes, setVotes] = useState([])
  const [results, setResults] = useState([])
  const loadedVotes = require("./validVotes.json")

  useEffect(()=>{
    try{
      //let loadedVotes = require("./validVotes.json")
      setVotes(loadedVotes)
      let newResults = {}
      for(let v in loadedVotes){
        console.log(v);
        if(newResults[loadedVotes[v].vote]){
          newResults[loadedVotes[v].vote] = newResults[loadedVotes[v].vote].add(loadedVotes[v].balance)
        }else{
          newResults[loadedVotes[v].vote] = ethers.utils.bigNumberify(loadedVotes[v].balance)
        }
      }
      console.log("XXXX", newResults);
      setResults(newResults)
    }catch(e){console.log("ERR",e)}
  },[])

  let displayVotes = []
  let winner
  let test = JSON.stringify(loadedVotes);
  test = JSON.parse(test);
  
  const voteArray = Object.values(test);
  let compteur = 0;

    for(let r in results){
      console.log(test);
      let address = voteArray[compteur].address;
      let floatValue = parseFloat(results[r]);
      if( typeof winner == "undefined" || winner.floatValue < floatValue){
        winner = {
          vote:r,
          floatValue:floatValue,
        }
      }
      displayVotes.push(
        <div key={`vote${ r }`}>
          <b>{ address }</b> 
          <span> avec 💸 wallet : { floatValue.toFixed(2) } votes for { r }</span>
        </div>
      )
      compteur++;
    }

  return (
    <div>
      <Card
        title={(
          <div>
            📑  Votes: ( {winner?winner.vote+" is winning":""} )
          </div>
        )}
        size="large"
        style={{ width: 550, marginTop: 25 }}
        >
          {displayVotes}
      </Card>
    </div>
  );

}
