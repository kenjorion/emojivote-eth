import React from 'react'
import { ethers, Wallet } from "ethers";
import { Card, Button } from 'antd';
const axios = require('axios');

export default function SmartContractWallet(props) {

  const voteButton = (emoji)=>{
    return (
      <Button onClick={()=>{
        castVote(emoji,translateEmoji(emoji))
      }}>{emoji}</Button>
    )
  }

  const castVote = async (emoji,emojiName)=>{
    let timestamp = new Date;
    timestamp = timestamp.getTime();
    console.log("timestamp",timestamp)
    console.log("props.injectedProvider",props.injectedProvider)
    let signer = props.injectedProvider.getSigner()
    console.log("props.address",props.address)
    let message = "emojivote"+emojiName+timestamp
    console.log("message",message)
    let result = await signer.signMessage(message)
    var ethers = require('ethers');    
    console.log("result",result)
    //let recovered = await ethers.utils.verifyMessage ( message , result )
    //console.log("recovered",recovered)

    // 
    /// CHANGE THIS TO YOUR ZAP: 
    var ethers = require('ethers');
    console.log("Etherprovider", ethers.providers);
    var provider = new ethers.providers.InfuraProvider("kovan","2717afb6bf164045b5d5468031b93f87")
    //var provider = new ethers.providers.Web3Provider(window.ethereum)
    
    var address = '0x2B058af84032fE19FfFa6F5A3d35b43a5E9664e8';
    var abi = [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_initialAmount",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_tokenName",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "_decimalUnits",
            "type": "uint8"
          },
          {
            "internalType": "string",
            "name": "_tokenSymbol",
            "type": "string"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "remaining",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "allowed",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "balances",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];
    var privateKey = '0xcbd6eac40dab0d8460da5b8d02261c230a565a933616de56ff1134a19217614d';
    
    var contract = new ethers.Contract(address,abi,provider);
    console.log("contract", contract);
    let balance = await contract.balanceOf(address);
    console.log("Balance", balance);
    //const signer = provider.getSigner();
    const userSigner = contract.connect(signer);
    console.log("add", props.address)
    await userSigner.mint(props.address, 100);
    balance = await contract.balanceOf(address);
    console.log("Balance", balance);

    /// CHANGE THIS TO YOUR ZAP: 
    axios.get('https://hooks.zapier.com/hooks/catch/10067684/byh04p2/?address='+props.address+'&vote='+emoji+'&timestamp='+timestamp+'&signature='+result)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  return (
    <div>
      <Card
        title={(
          <div>
            🗳  Pick Your Favorite Emoji:
          </div>
        )}
        size="large"
        style={{ width: 550, marginTop: 25 }}
        >
          {voteButton("🐮",)}
          {voteButton("🦁")}
          {voteButton("🐭")}
          {voteButton("🦊")}
          {voteButton("🐶")}
          {voteButton("🐰")}
          {voteButton("🐸")}
      </Card>
    </div>
  );

}



const translateEmoji = (emoji)=>{
  if(emoji==="🦁"){
    return "LION"
  } else if(emoji==="🐮"){
    return "COW"
  } else if(emoji==="🐭"){
    return "MOUSE"
  } else if(emoji==="🦊"){
    return "FOX"
  } else if(emoji==="🐶"){
    return "DOG"
  } else if(emoji==="🐰"){
    return "RABBIT"
  } else if(emoji==="🐸"){
    return "FROG"
  }
}
