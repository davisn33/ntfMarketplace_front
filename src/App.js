import "./Assets/css/bootstrap.min.css"
import "./Assets/css/custom.css"
import "./Assets/css/icons.css"
import "./Assets/css/style.css"
import './App.css';
import React from "react"
import {getMetamask} from "./utils/metamask"
import {Collectibles,Buckets} from "./scripts/index"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Components/Header"
import EditProfile from './Pages/EditProfileContainer';
import Home from './Pages/Home';
import Create from "./Pages/Create";
import ConnectWallet from "./Pages/ConnectWallet";
import Footer from "./Components/Footer";
import Profile from "./Pages/Profile";



function App() {
  const [acc,setAcc]= React.useState("")
  const [loading,setLoading]= React.useState(false)
  const [change,setChange]= React.useState(null)
  const [image,setImage]= React.useState(null)
  const [big,setBig]= React.useState(null)
  const metaMask = async (history)=>{
    
    let accountdetails=await getMetamask();
    console.log(accountdetails)
    localStorage.setItem("address",accountdetails.address)
    setLoading(true)
    setAcc(accountdetails)
    setChange(Math.random());
    setTimeout(()=>{
      history.push("/")
      setLoading(false)
    },1200)
  }

 

  React.useEffect(()=>{
    let scripts = [
      { src: "./Assets/js/bootstrap-select.min.js" },
      { src: "./Assets/js/custom.js" },
      { src: "./Assets/js/jquery-3.3.1.min.js" },
      { src: "./Assets/js/simplebar.js" },
      { src: "./Assets/js/uikit.js" },

  ]
  //Append the script element on each iteration
  scripts.forEach(item => { 
      const script = document.createElement("script")
      script.src = item.src
      script.async = true
      document.body.appendChild(script)
  })    
    
  },[])

  const getCollectible= async()=>{
    try{
    let obj = new Collectibles(acc.provider,acc.signer,"0xd6A5E0A3E22b235DE42ee81D28b854726F27fc41"); 
     console.log(acc.address);
    let result=await obj.getTokensByOwner(acc.address);
    console.log(result);
    let res1=await obj.getTokenURIsByIds(result);
    console.log(res1)
    
    }
    catch(e){
      console.log(e)
    }
  }
 
  

  return (
    <div className="App">

      {/* <div >Your account :{acc.address}</div>
      <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg" onChange={(e)=>{setImage(e.target.files[0])}}></input>
      <button onClick={createNew}>create</button>
      <button onClick={yay}>yay</button>
       */}

      <Router>
      <Header  change={change} loading={loading} account={acc.address} setAcc={setAcc}/>
      <Switch>
          <Route path="/edit">
            <EditProfile setChange={setChange} account={acc.address} />
          </Route>
          <Route path="/create">
            <Create provider={acc.provider} signer={acc.signer} account={acc.address}/>
          </Route>
          <Route path="/connect">
            <ConnectWallet  metaMask={metaMask} account={acc.address}/>
          </Route>
          <Route path="/profile">
            <Profile provider={acc.provider} signer={acc.signer} account={acc.address}/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
