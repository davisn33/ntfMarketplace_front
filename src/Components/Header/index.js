import React from 'react'
import {Divider, makeStyles,TextField,InputAdornment,withStyles, ClickAwayListener, MenuItem, MenuList, Grow, Paper, Popper, Tooltip} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import icon from "../../Assets/icon.png"
import Identicon from 'react-identicons';
import { useHistory } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import axios from "axios"


const Header = ({account,change,setAcc,loading}) => {
    let history = useHistory();
    const [open,setOpen]= React.useState(false);
    const [drawer,setDrawer]= React.useState(false);
    const [tooltip,setTooltip]= React.useState("Copy");
    const [name,setName] = React.useState("")
    const [profile,setProfile] = React.useState(null)
    const anchorRef = React.useRef(null);
    const classes=useStyles();

    React.useEffect(() => {
        axios.post("http://localhost:4000/users/getprofile",{address:account})
        .then(res=>{
          if(res.data.status){
            setName(res.data.user.name)
            setProfile("http://localhost:4000/"+res.data.user.profile_img)
          }
        })
        .catch(e=>{
          console.log(e)
        })
    
    }, [change])
    React.useEffect(() => {
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          });
        axios.post("http://localhost:4000/users/getprofile",{address:account})
        .then(res=>{
          if(res.data.status){
            setName(res.data.user.name)
            setProfile("http://localhost:4000/"+res.data.user.profile_img)
          }
        })
        .catch(e=>{
          console.log(e)
        })
        
    }, [])
    

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      };
    return (
        <div >
            <header className="header-part">
                <div className="container">
                    <div className="header-content">
                        <div className="header-left">
                            <ul className="header-widget">
                                <li>
                                    <a onClick={()=>history.push("/")} className="header-logo">
                                        <img src="Assets/images/logo.jpg" alt="logo" />
                                        
                                    </a>
                                </li>

                                <li style={{display: "none"}}>
                                    <a href="login.html" className="header-user"><i className="fas fa-user"></i><span>Login</span></a>
                                </li>
                                <li style={{display: "none"}}>
                                    <a href="login.html" className="header-user"><i className="fas fa-user"></i><span>Login</span></a>
                                </li>

                                <li>
                                    <button type="button" className="header-src"><i className="fas fa-search"></i></button>
                                </li>
                                <li>
                                    <button type="button" className="header-menu header-mobile-menu"><i className="fas fa-align-left"></i></button>
                                </li>
                            </ul>
                        </div>
                        <form className="header-search">
                            <div className="header-main-search">
                                <button type="submit" className="header-search-btn"><i className="fas fa-search"></i></button><input type="text" className="form-control" placeholder="Search, Whatever you needs..." />
                            </div>
                        </form>
                        <div className="header-right">
							<a onClick={()=>history.push("/create")} className="btn btn-primary"><i className="fas fa-plus-circle"></i><span>Create</span></a>
                            <a 
                                onClick={()=>!account?history.push("/connect"):""}
                                onMouseEnter={()=>!account?"":setOpen(true)}
                                onMouseLeave={()=>setOpen(false)}
                                id="loginTexts"
                                className="btn btn-primary"
                                ref={anchorRef}
                                aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                            >{
                               !account?<><i className="fas fa-plus-circle" ></i><span >Connect wallet</span></>:
                               (loading?<CircularProgress color="inherit" size={17}/>:"My Account")
                               }</a>
                               <ul class="header-widget">
                            <li>
                                <button type="button" class="header-menu desktop-menu" onClick={()=>setDrawer(true)}><i class="fas fa-align-left"></i></button>
                            </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </header>

            <div className={drawer?"sidebar-part active":"sidebar-part"}>
                <div className="sidebar-body">
                    <div className="sidebar-header">
                         <a href="#" className="sidebar-logo"><img src="Assets/images/logo.jpg" alt="logo" /></a>
                        <button className="sidebar-cross" onClick={()=>setDrawer(false)}><i className="fas fa-times"></i></button>
                    </div>
                    <div className="sidebar-content">
                        <div className="sidebar-menu">
                            <div className="tab-pane active" id="main-menu">
                                <ul className="navbar-list">
                                    <li className="navbar-item"><a className="navbar-link" href="#">Home</a></li>
                                    <li className="navbar-item navbar-dropdown">
                                        <a className="navbar-link" href="#">
                                            <span>Community</span>
                                            {/* <!-- <i className="fas fa-plus"></i> --> */}
                                        </a>
                                    </li>
                                    <li className="navbar-item navbar-dropdown">
                                        <a className="navbar-link" href="index.html">
                                            <span>Explore</span>
                                            {/* <!-- <i className="fas fa-plus"></i> --> */}
                                        </a>
                                    </li>
                                    <li className="navbar-item navbar-dropdown">
                                        <a className="navbar-link" onClick={()=>history.push("/profile")}>
                                            <span>My items</span>
                                            {/* <!-- <i className="fas fa-plus"></i> --> */}
                                        </a>
                                    </li>
                                    <li className="navbar-item navbar-dropdown">
                                        <a className="navbar-link" href="following.html">
                                            <span>Following</span>
                                            {/* <!-- <i className="fas fa-plus"></i> --> */}
                                        </a>
                                    </li>
                                    <li className="navbar-item navbar-dropdown">
                                        <a className="navbar-link" href="activity.html">
                                            <span>Activity</span>
                                            {/* <!-- <i className="fas fa-plus"></i> --> */}
                                        </a>
                                    </li>
                                    <li className="navbar-item"><a className="navbar-link" href="javascript:void()" onclick="connect()">Connect Wallet</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-footer">
                            <p>All Rights Reserved By <a href="#">1CLICKNFT</a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className={classes.head}>
                <div>
                <img src={icon} style={{ width: 40 }} alt="icon" />
                <CssTextField
                    style={{width:200,marginLeft:30}}
                    id="input-with-icon-textfield"
                    variant="outlined"
                    placeholder="search"
                    size="small"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                </div>
                <div style={{width:90,height:40,border:"solid grey 1px", borderRadius:20,display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
                    <div style={{background:"#ddd",width:40,height:40,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:20,cursor:"pointer"}}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={()=>setOpen(!open)}>
                    <Identicon string={account} size={25}/>
                    </div>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <div  id="menu-list-grow" style={{width:300,height:400,display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:20}}>
                                            <div style={{padding:20,fontWeight:"bold"}}>
                                            {account.substring(0, 20)+"..."+account.substring(account.length-5, account.length-1)}
                                            </div>
                                            <div style={{padding:10,width:"90%"}}>
                                                <MenuItem style={{fontWeight:"bold",}} onClick={(e)=>{handleClose(e);history.push("/edit")}}>
                                                    Edit Profile
                                                </MenuItem>
                                            </div>
                                        </div>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                    
                </div>
            </div>

            <Divider/> */}
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{position: "relative",zIndex:999}}>
                        {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', marginTop: 30 }}
                    >
                        <Paper elevation={9} onMouseEnter={() => setOpen(true)} onMouseLeave={handleClose}  style={{}}>
                            <div id="menu-list-grow" style={{ width: 250, height: 300, display: "flex", flexDirection: "column", alignItems: "flex-start" }} >
                                <div style={{ padding: 5, fontWeight: "bold",width:"100%", height: "50%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{ width: 90,overflow:"hidden", height: 90, borderRadius: 45, border: "solid 1px grey", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {!profile?<Identicon string={account} size={60}/>:
                                        <img src={profile} style={{width:90,height:90,objectFit:"cover"}}/>}
                                    </div>
                                    <span style={{textTransform:"capitalize"}}>{name}</span>
                                    <span style={{ display: "flex", alignItems: "center",  }}>
                                        {!account ? "" : account.substring(0, 15) + "..." + account.substring(account.length - 5, account.length - 1)}
                                        <Tooltip title={tooltip}>
                                        <FileCopyIcon style={{ fontSize: 17, marginLeft: 20, cursor: "pointer" }} onClick={() => { navigator.clipboard.writeText(account); setTooltip("Copied"); }} />
                                        </Tooltip>
                                    </span>
                                </div>
                                <div style={{ padding: 10, width: "90%", height: "50%" }}>
                                    <Divider />
                                    <MenuItem style={{ fontWeight: "bold", }} onClick={(e) => { handleClose(e); history.push("/edit") }}>
                                        Edit Profile
                                                </MenuItem>
                                    <MenuItem style={{ fontWeight: "bold", }} onClick={(e) => { handleClose(e); history.push("/profile") }}>
                                        My Items
                                                </MenuItem>
                                    <MenuItem style={{ fontWeight: "bold", }} onClick={(e) => { setAcc(""); handleClose(e) }}>
                                        Logout
                                    </MenuItem>
                                </div>
                            </div>
                        </Paper>
                    </Grow>
                        )}
                    </Popper>
        </div>
    )
}


const useStyles = makeStyles({
    root: {
    },
    head:{
        height:80,
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around"
    },
  });

export default Header
