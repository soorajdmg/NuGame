// import Card from './components/card'
import SectionGames from './components/sectionGames'
import SectionAchivements from './components/sectionAchivement'
import Navbar from './components/navbar'
import Home from './components/Home'
import Login from './components/login'
import { useState,useEffect } from 'react'
import Signup from './components/signup'
import Achevements from './components/achivements'

import abi from "./contract/Token.json"
import {ethers} from 'ethers';
 
export default function App() {
    const [access,setAccess] = useState(false)
    const [loginClose , setLoginClose] = useState(true) 
    const [signupClose , setSignupClose] = useState(true)
    const [achevementClose , setAchevementClose] = useState(true)

    const [state, setState] = useState({
      provider:null,
      signer: null,
      contract: null
    })
    useEffect(() => {
      const connectWallet = async() => {
        const contractAddress = "0xCAC2236d0ADfe6e47Bd4e4618EdBd31D13F54d19";
        const contractABI = abi;
        try {
          const {ethereum} = window;

          if (ethereum) {
            const account = await ethereum.request({method: "eth_requestAccounts"})
          }
          const provider = new ethers.BrowserProvider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI, signer);
          setState({provider, signer, contract});
        }
        catch(error) {
          console.log(error);
        }
      };
      connectWallet();
    }, []);

    const killAch = async (to) => {
      try {
          const { contract } = state;
          const tx = await contract.transferTokens(to, 5);
          await tx.wait();
          console.log('Transaction successful:', tx);
      }
      catch (error)
      {
          console.log('Error calling myFunction:', error);
      }};

      const playtimeAch = async (to) => {
        try {
            const { contract } = state;
            const tx = await contract.transferTokens(to, 10);
            await tx.wait();
            console.log('Transaction successful:', tx);
        }
        catch (error)
        {
            console.log('Error calling myFunction:', error);
        }};


    return (
      <>
      <div className='main-component'>
      <Navbar access = {access} setLoginClose = {setLoginClose} setSignupClose={setSignupClose}/>
      <Home />
      {/* <div className='Cards'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
      </div>
      <SectionGames setAchevementClose={setAchevementClose}/>
      <SectionAchivements />
      <Login loginClose={loginClose} setLoginClose = {setLoginClose} setSignupClose={setSignupClose}/>
      <Signup signupClose={signupClose} setSignupClose={setSignupClose}/>
      <Achevements setAchevementClose={setAchevementClose} achevementClose={achevementClose} killAch={killAch} playtimeAch={playtimeAch}/>
      
    </>
    )
}