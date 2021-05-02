import React,{useState,useEffect} from 'react'
import {Collectibles,Buckets} from "../../scripts/index";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { CircularProgress } from '@material-ui/core';

const Create = ({provider,signer,account}) => {
    let history = useHistory();
    const [name,setName] = useState("")
    const [file,setFile] = useState(null)
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
    const [royalty,setRoyalty] = useState("")
    const [auction,setAuction] = useState(false)
    const [instant,setInstant] = useState(false)
    const [loading,setLoading] = useState(false)

    React.useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          });
    },[])


    const createCollectible = async () => {

        try {
            setLoading(true);
          let col = new Collectibles(provider,signer, "0x6979Df8201C983842752B54ccc3cE978af4fF5dC");
          let buck = new Buckets();

          let filename=uuid();
          let json=uuid();
          console.log("json",json)
          await buck.pushBlob(filename,file);
          let link=await buck.getIpnsLink();
          let filelink = link+"/"+filename;
          await buck.pushJSON(json, { name,description,royalty,price,filelink });
          let result = await col.create(json);
          console.log(result)
          setLoading(false);
          
    
        }
        catch (e) {
          console.log(e)
        }
      }
    return (
            <div id="wrapper">

            <div className="custom-container">
                <div className="section-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                
                            </div>
                            <div className="col-md-6">
                                {/* <!-------------Contant---------------> */}
                                <a onClick={()=>history.push("/")}>{"<- Go Back"}</a>
                                <br/>
                                <br/>
                                <h1 style={{fontWeight:"bold",fontSize:30}}>Create NFT</h1>

                                <div className="form-group">
                                    <label style={{fontSize:18}}>Upload file</label>
                                    
                                        <div className="UploadArea text-center">
                                            <span>PNG, GIF, WEBP, MP4 or MP3. Max 30mb</span><br /><br />
                                            <label for="file-upload1"  class="custom-file-upload">
                                            <div className="btn btn-primary">Upload</div>
                                            </label>
                                            <input id="file-upload1" type="file" style={{display:"none"}} onChange={(e)=>{setFile(e.target.files[0])}}/>
                                        </div>
                                   
                                </div>

                                <div className="form-group">
                                    <label style={{fontSize:18}}>Put Sale</label>
                                    <div className="flex">
                                        <div className="half text-primary">
                                            You’ll receive bids on this item
                                        </div>
                                        <div className="half text-right">
                                            <div className="custom-control custom-switch">
                                              <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={auction} onClick={()=>setAuction(!auction)}/>
                                              <label className="custom-control-label" for="customSwitch1"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label style={{fontSize:18}}>Instant sale price</label>
                                    <div className="flex">
                                        <div className="half text-primary">
                                            Enter the price for which the item will be instantly sold
                                        </div>
                                        <div className="half text-right">
                                            <div className="custom-control custom-switch">
                                              <input type="checkbox" className="custom-control-input" id="customSwitch2" checked={instant} onClick={()=>setInstant(!instant)}/>
                                              <label className="custom-control-label" for="customSwitch2"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="form-group">
                                    <label style={{fontSize:18}}>Name</label>
                                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
                                </div>



                                <div className="form-group">
                                    <label style={{fontSize:18}}>Description </label>
                                    <textarea type="text" value={description} onChange={(e)=>setDescription(e.target.value)} name="" className="form-control" rows="3"></textarea>
                                </div>

                                <div className="form-group">
                                    <label style={{fontSize:18}}>Price</label>
                                    <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} className="form-control"/>
                                </div>

                                  <label style={{fontSize:18}} className="control-label">Royalties </label>
                                  <div className="form-group">
                                    <div className="input-group mb-3">
                                      
                                      <input type="text" className="form-control" value={royalty} onChange={(e)=>setRoyalty(e.target.value)} aria-label="Amount (to the nearest dollar)"/>
                                      <div className="input-group-append">
                                        <span className="input-group-text">%</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="form-group">
                                    <div className="btn btn-primary" style={{width:150}} onClick={()=>loading?{}:createCollectible()}>{loading?<CircularProgress color="inherit" size={17}/>:"Create NFT"}</div>
                                </div>
                                </div>



                            <div className="col-md-4 ">
                                <div className="Preview" style={{backgroundImage:`url(${!file?"":URL.createObjectURL(file)})`,backgroundPosition:"center",backgroundRepeat: "no-repeat"}}>
                                    <h1 style={{ fontSize: 18 }}>Preview</h1>
                                </div>
                            </div>
                        </div>
                            
                        </div>
                    </div>
                </div>
            </div>





            

    )
}

export default Create
