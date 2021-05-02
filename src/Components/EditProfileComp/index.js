import { TextField,withStyles } from '@material-ui/core';
import React from 'react'
import Identicon from 'react-identicons';
import axios from "axios"

const CssTextField = withStyles({
    root: {
      '& fieldset':{
        borderRadius: 40,
        borderColor: 'grey',
        borderWidth:1
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#00d',
          borderWidth:3
        },
      },
    },
  })(TextField);

  

const EditProfileComp = ({account,setChange}) => {
  const [name,setName] = React.useState("")
  const [email,setEmail] = React.useState("")
  const [bio,setBio] = React.useState("")
  const [profile,setProfile] = React.useState(null)


  React.useEffect(()=>{
    if(localStorage.getItem("address")){
    axios.post("http://localhost:4000/users/getprofile",{address:account})
    .then(res=>{
      if(res.data.status){
        setName(res.data.user.name)
        setEmail(res.data.user.email)
        setBio(res.data.user.bio)
        setProfile("http://localhost:4000/"+res.data.user.profile_img)
        setChange(profile+name)
      }
    })
    .catch(e=>{
      console.log(e)
    })
  }
  },[])

  const onSubmit=()=>{
    let form = new FormData();
    form.append("name",name);
    form.append("email",email);
    form.append("bio",bio)
    form.append("address",account)
    form.append("profile",profile)
    axios.post("http://localhost:4000/users/register",form)
    .then(res=>{
      console.log(res.data)
      setChange(profile+name)
    })
    .catch(e=>{
      console.log(e)
    })
  }
  
    return (
        <div style={{display:"flex",justifyContent:"center",marginTop:150}}>
            <div style={{display:"flex",width:800,flexDirection:'column'}}>
                <div style={{display:"flex",alignItems:"flex-start",flexDirection:'column'}}>
                    <h1 style={{fontWeight:"bold",fontSize:30}}>Edit Profile</h1>
                    <div style={{fontSize:20,textAlign:"left",fontWeight:600,color:"#999",width:"70%"}}>You can set preferred display name, create your branded profile URL and manage other personal settings</div>
                </div>
                <div style={{display:"flex"}}>
                        <div style={{width:"70%",display:"flex",padding:10,flexDirection:"column",alignItems:"flex-start"}}>
                            
                            
                            <h4 style={{color:"#222325", marginTop:50, fontWeight:'bold',fontSize:17}}>Display Name</h4>
                            <CssTextField value={name} onChange={(e)=>setName(e.target.value)} style={{width:"90%"}} placeholder="Display Name" variant="standard"/>

                            <h4 style={{color:"#222325", marginTop:50, fontWeight:'bold',fontSize:17}}>Bio</h4>
                            <CssTextField value={bio} onChange={(e)=>setBio(e.target.value)} style={{width:"90%"}} placeholder="Bio" variant="standard"/>

                            <h4 style={{color:"#222325", marginTop:50, fontWeight:'bold',fontSize:17}}>Email</h4>
                            <CssTextField value={email} onChange={(e)=>setEmail(e.target.value)} style={{width:"90%"}} placeholder="Email" variant="standard"/>
                            <div style={{width:"100%",height:45,borderRadius:25,background:"#F79797",
                            display:"flex",alignItems:"center",justifyContent:"center",
                            marginTop:40,color:"#E80000",fontWeight:"bold",fontSize:13,cursor:"pointer"}} onClick={onSubmit}>
                            Update Profile
                            </div>

                        </div>
                        <div style={{width:"30%"}}>
                            <div style={{width:100,height:100,background:"#ddd",borderRadius:50,
                            display:"flex",alignItems:"center",justifyContent:"center",
                            overflow:"hidden"
                        }}>
                                {!profile?<Identicon string={account} size={60}/>:
                                <img src={typeof profile==='string'?profile:URL.createObjectURL(profile)} style={{width:100,height:100,objectFit:"cover"}}/>}
                            </div>
                            <div style={{textAlign:"left",marginTop:30,fontSize:13,color:"grey",fontWeight:600}}>We recommend an image of at least 400x400. Gifs work too.</div>
                            <label for="file-upload" class="custom-file-upload">
                            <div style={{width:120,height:40,borderRadius:25,background:"#F79797",
                            display:"flex",alignItems:"center",justifyContent:"center",marginTop:30,
                            color:"#E80000",fontWeight:"bold",fontSize:13,cursor:"pointer"}}> Choose file
                            
                            </div>
                            </label>
                            <input id="file-upload" type="file" style={{display:"none"}} onChange={(e)=>{e.target.files[0]&&setProfile(e.target.files[0])}}/>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfileComp
