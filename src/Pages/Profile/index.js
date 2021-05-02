import React from 'react'
import "../../Assets/css/custom.css"
import Identicon from 'react-identicons';
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core';
import {Collectibles,Buckets} from "../../scripts/index"

const Profile = ({ account,provider,signer }) => {
  
  let history = useHistory()
  const [tab, setTab] = React.useState(0);
  const [items,setItems] = React.useState([]);

  React.useEffect(async()=>{
    window.scrollTo({
      top:0,
      behavior: 'smooth',
    });
    let col = new Collectibles(provider,signer,"0x6979Df8201C983842752B54ccc3cE978af4fF5dC");
    let buck = new Buckets();
    let result=await col.getTokensByOwner(account);
    let res1=await col.getTokenURIsByIds(result);
    let temp=[];
    await res1.map(async(item)=>{
        let resp = await buck.pullJSON(item)
        console.log(resp)
        temp.push(resp)
    })
    setItems(temp)
  },[])

  return (
    <div >
      <div className="custom-container">

        <div className="section-one">
          <div className="row">
            <div className="col-md-12" style={{ backgroundImage: `url("https://www.w3schools.com/bootstrap4/img_avatar3.png")`, minHeight: 300 }}>

            </div>
            <div className="col-md-12" >
              <center>
                <div className="ProfileImage" style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center", background: "white" }}>
                  <Identicon string={account} size={100} />
                </div>
              </center>

            </div>
            <div className="col-md-12" >
              <center>
                <h3 style={{ fontSize: 20, fontWeight: "bold" }}>
                  {!account ? "" : account.substring(0, 20) + "..." + account.substring(account.length - 5, account.length - 1)}
                </h3>

              </center>
            </div>
            <div className="col-md-12" >
              <center>
                <button className="btn btn-outline-secondary" onClick={() => history.push("/edit")}>Edit Profile</button>
                {/* <button className="btn btn-outline-secondary">*</button>
                                <button className="btn btn-outline-secondary">{"->"}</button> */}
              </center>
            </div>
            <div className="col-md-12" >
              <br />
              <br />
              <br />
            </div>

            <div className="col-md-6">


              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={tab === 0 ? "nav-link active" : "nav-link"} onClick={() => setTab(0)}>Onsale</a>
                </li>
                <li className="nav-item">
                  <a className={tab === 1 ? "nav-link active" : "nav-link"} onClick={() => setTab(1)}>Collectable</a>
                </li>
                <li className="nav-item">
                  <a className={tab === 2 ? "nav-link active" : "nav-link"} onClick={() => setTab(2)} >Created</a>
                </li>
              </ul>
              <div  className="tab-content" >
                <div className={tab === 0 ?(items.length? "fade active show":"fade" ): "fade"} id="home" >

              <Grid container>
                {items.map((item)=>
                  <div className="card" style={{ width: 200,margin:5 }}>
                    <div className="card-media h-16em">
                      <div className="card-media-overly"></div>
                      <img src={item.filelink} alt="" className="" />
                    </div>
                    <div className="card-body">
                      <a href="#" className="font-semibold text-lg truncate"> {item.name} </a>

                      <div className="flex mt-2 space-x-2">
                        <div className="flex items-center -space-x-2 -mt-1">
                          <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                          <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                        </div>
                        <div className="flex-1 leading-4 text-sm">
                          <div><strong> {"Price:"+item.price}</strong></div>
                        </div>
                      </div>
                      <div className="flex mt-3 space-x-2 text-sm">

                        <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                          View
                          </a>
                      </div>
                    </div>
                  </div>)}

                  </Grid>

                </div>
                <div className={tab === 1 ? "tab-pane fade active show" : "tab-pane fade"} id="profile">
                  <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
                </div>
                <div className={tab === 2 ? "tab-pane fade active show" : "tab-pane fade"} id="dropdown1">
                  <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
