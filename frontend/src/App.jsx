// import Card from './components/card'
import SectionGames from './components/sectionGames'
import SectionAchivements from './components/sectionAchivement'
import Navbar from './components/navbar'
import Home from './components/Home'
import Login from './components/login'
import { useState } from 'react'
import Signup from './components/signup'
import Achevements from './components/achivements'
export default function App() {
    const [access,setAccess] = useState(false)
    const [loginClose , setLoginClose] = useState(true)
    const [signupClose , setSignupClose] = useState(true)
    const [achevementClose , setAchevementClose] = useState(true)
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
      <Achevements setAchevementClose={setAchevementClose} achevementClose={achevementClose}/>
      
    </>
    )
}