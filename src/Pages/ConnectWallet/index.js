import React from 'react'
import { useHistory } from "react-router-dom";

const ConnectWallet = ({metaMask,account}) => {
    let history=useHistory()
    React.useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          });
    },[])
    return (
        <div>
            <div id="wrapper">
            <div className="custom-container">
                <div className="section-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                
                            </div>
                            <div className="col-md-6">
                                <a onClick={()=>history.goBack()}>{"<- Go Back"}</a>
                                <br/>
                                <br/>
                                <center>
                                    <h1>Connect your wallet</h1>
                                    <p>Connect with one of available wallet providers or create a new wallet. What is wallet?</p>
                                </center>
                                <button onClick={!account?()=>metaMask(history):()=>history.push("/")} className="btn btn-outline-primary btn-block btn-lg">
                                    <div className="flex">
                                        <div className="fourty">
                                            <img src="Assets/images/metamask.svg" className="twentyFive"/>
                                        </div>
                                        <div className="">
                                            Metamask
                                        </div>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <footer className="footer-area pt-100">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-logo">
                                    <a className="logo" href="#">
                                        {/* <!-- <img src="assets/images/logo.png" alt="Logo" /> --> */}
                                        RRGSINDORE
                                    </a>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit culpa molestias nemo rerum exercitationem ad cupiditate explicabo officia eos fuga error</p>
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-services">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li>
                                            <a href="#">Explore</a>
                                        </li>
                                        <li>
                                            <a href="#">How it works</a>
                                        </li>
                                        <li>
                                            <a href="#">Create</a>
                                        </li>
                                        <li>
                                            <a href="#">Support</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-services">
                                    <h3>Community</h3>
                                    <ul>
                                        <li>
                                            <a href="#">NFT Token</a>
                                        </li>
                                        <li>
                                            <a href="#">Discussion</a>
                                        </li>
                                        <li>
                                            <a href="#">Voting</a>
                                        </li>
                                        <li>
                                            <a href="#">Suggest feature</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-touch">
                                    <h3>Get In Touch</h3>
                                    <ul>
                                        <li>
                                            <i className="fa fa-phone"></i>
                                            <a href="tel:+123456789">+545-245-584</a>
                                            <a href="tel:+545245584">+545-245-584</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope"></i>
                                            <a href="mailto:abc@gmail.com">abc@gmail.com</a>
                                            <a href="mailto:info@nft.com">info@nft.com</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-map-marker"></i>
                                            <a href="https://www.google.com/maps">345-659 Birmingham Street, England</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <p>Copyright ©2021 . Designed By <a href="#" target="_blank">SKK</a></p>
                    </div>
                </div>
            </footer>
        </div>
        </div>
    )
}

export default ConnectWallet
