import React from 'react'

const Home = () => {
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
                    <div className="relative -mt-3 uk-slider" uk-slider="finite: true">
                        <div className="uk-slider-container px-1 py-3">
                            <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="rounded-md overflow-hidden relative w-full h-328">
                                        <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                                        <img src="Assets/images/1-1.png" className="absolute w-full h-full object-cover" alt="" />
                                        <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg x_post_name">Waifu Collection Alpha Leak <span className="author-name">By Byzu</span></div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="rounded-md overflow-hidden relative w-full h-328">
                                        <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                                        <img src="Assets/images/1-2.gif" className="absolute w-full h-full object-cover" alt="" />
                                        <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg x_post_name">Waifu Collection Alpha Leak <span className="author-name">By Byzu</span></div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="rounded-md overflow-hidden relative w-full h-328">
                                        <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                                        <img src="Assets/images/1-3.png" className="absolute w-full h-full object-cover" alt="" />
                                        <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg x_post_name">Waifu Collection Alpha Leak <span className="author-name">By Byzu</span></div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="rounded-md overflow-hidden relative w-full h-328">
                                        <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                                        <img src="Assets/images/1-4.png" className="absolute w-full h-full object-cover" alt="" />
                                        <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg x_post_name">Waifu Collection Alpha Leak <span className="author-name">By Byzu</span></div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="rounded-md overflow-hidden relative w-full h-328">
                                        <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                                        <img src="Assets/images/1-5.png" className="absolute w-full h-full object-cover" alt="" />
                                        <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg x_post_name">Waifu Collection Alpha Leak <span className="author-name">By Byzu</span></div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="">
                                    <div className="rounded-md overflow-hidden relative w-full h-328" style={{position:"relative",zIndex:-1}}>
                                        <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                                        <img src="Assets/images/1-1.png" className="absolute w-full h-full object-cover" alt="" />
                                        <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg x_post_name">Waifu Collection Alpha Leak <span className="author-name">By Byzu</span></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <a className="absolute bg-white top-9em flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white uk-invisible" href="#" uk-slider-item="previous">
                            <i className="icon-feather-chevron-left"></i>
                        </a>
                        <a className="absolute bg-white top-9em flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next">
                            <i className="icon-feather-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div className="top-sellers">
                    <div className="my-6 flex items-center justify-between border-b pb-3">
                        <div>
                            <h2 className="text-xl font-semibold primary-color">Top Sellers</h2>
                            <p className="font-medium text-gray-500 leading-6">Find a Top Sellers You Might Be Interested In.</p>
                        </div>
                        <a href="#" className="text-pink-500 sm:block hidden"> See all </a>
                    </div>
                    <div className="grid md:grid-cols-4 divide divide-gray-200 gap-x-4 mt-4">
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-1.gif" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize"> Lirona </a>
                                <div className="text-sm text-gray-500 mt-0.5">12.5 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-2.jpg" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize"> CryptoSnake </a>
                                <div className="text-sm text-gray-500 mt-0.5">9.466 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-8.png" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize"> Rultan Fyder</a>
                                <div className="text-sm text-gray-500 mt-0.5">40.898 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-4.jpg" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize">Monstero</a>
                                <div className="text-sm text-gray-500 mt-0.5">20.898 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-5.jpg" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize">Thomas Pomaralle</a>
                                <div className="text-sm text-gray-500 mt-0.5">5.25 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-6.png" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize">Relax Pape</a>
                                <div className="text-sm text-gray-500 mt-0.5">4.8 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-7.gif" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize"> Lirona </a>
                                <div className="text-sm text-gray-500 mt-0.5">12.5 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-8.png" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize"> CryptoSnake </a>
                                <div className="text-sm text-gray-500 mt-0.5">9.466 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-9.png" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize"> Rultan Fyder</a>
                                <div className="text-sm text-gray-500 mt-0.5">40.898 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-10.gif" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize">Monstero</a>
                                <div className="text-sm text-gray-500 mt-0.5">20.898 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-11.png" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize">Thomas Pomaralle</a>
                                <div className="text-sm text-gray-500 mt-0.5">5.25 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-12.png" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize">Relax Pape</a>
                                <div className="text-sm text-gray-500 mt-0.5">4.8 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-5.jpg" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize">Thomas Pomaralle</a>
                                <div className="text-sm text-gray-500 mt-0.5">5.25 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-6.png" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize">Relax Pape</a>
                                <div className="text-sm text-gray-500 mt-0.5">4.8 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-7.gif" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize"> Lirona </a>
                                <div className="text-sm text-gray-500 mt-0.5">12.5 ETH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src="Assets/images/2-8.png" className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a href="#" className="text-lg font-semibold capitalize"> CryptoSnake </a>
                                <div className="text-sm text-gray-500 mt-0.5">9.466 ETH</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hot_bids">
                    <div className="my-6 flex items-center justify-between border-b pb-3">
                        <div>
                            <h2 className="text-xl font-semibold primary-color">Hot Bids</h2>
                            <p className="font-medium text-gray-500 leading-6">Find a Hot Bids You Might Be Interested In.</p>
                        </div>
                        <a href="#" className="text-pink-500 sm:block hidden"> See all </a>
                    </div>
                    <div className="relative uk-slider" uk-slider="finite: true">
                        <div className="uk-slider-container px-1 py-3">
                            <ul className="uk-slider-items uk-child-width-1-4@m uk-child-width-1-3@s uk-grid-small uk-grid" style={{transform:"translate3d(0px, 0px, 0px)"}}>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media h-16em">
                                            <div className="card-media-overly"></div>
                                            <img src="Assets/images/3-1.gif" alt="" className="" />
                                            <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div>
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="font-semibold text-lg truncate"> Dreamer’s Wake </a>
                                            <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a href="#"> <span>0.5 ETH </span> </a>
                                                <a href="#"> <span> 1 of 1 </span> </a>
                                            </div>
                                            <div className="flex mt-2 space-x-2">
                                                <div className="flex items-center -space-x-2 -mt-1">
                                                    <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                                                    <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                                                </div>
                                                <div className="flex-1 leading-4 text-sm">
                                                    <div><strong> Place a Bid</strong></div>
                                                </div>
                                            </div>
                                            <div className="flex mt-3 space-x-2 text-sm">
                                                <a href="#" className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                    Purchase Now
                                                </a>
                                                <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media h-16em">
                                            <div className="card-media-overly"></div>
                                            <img src="Assets/images/3-2.jpg" alt="" className="" />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="font-semibold text-lg truncate"> Dreamer’s Wake </a>
                                            <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a href="#"> <span>0.5 ETH </span> </a>
                                                <a href="#"> <span> 1 of 1 </span> </a>
                                            </div>
                                            <div className="flex mt-2 space-x-2">
                                                <div className="flex items-center -space-x-2 -mt-1">
                                                    <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                                                    <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                                                </div>
                                                <div className="flex-1 leading-4 text-sm">
                                                    <div><strong> Place a Bid</strong></div>
                                                </div>
                                            </div>
                                            <div className="flex mt-3 space-x-2 text-sm">
                                                <a href="#" className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                    Purchase Now
                                                </a>
                                                <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media h-16em">
                                            <div className="card-media-overly"></div>
                                            <img src="Assets/images/3-5.gif" alt="" className="" />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="font-semibold text-lg truncate"> Dreamer’s Wake </a>
                                            <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a href="#"> <span>0.5 ETH </span> </a>
                                                <a href="#"> <span> 1 of 1 </span> </a>
                                            </div>
                                            <div className="flex mt-2 space-x-2">
                                                <div className="flex items-center -space-x-2 -mt-1">
                                                    <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                                                    <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                                                </div>
                                                <div className="flex-1 leading-4 text-sm">
                                                    <div><strong> Place a Bid</strong></div>
                                                </div>
                                            </div>
                                            <div className="flex mt-3 space-x-2 text-sm">
                                                <a href="#" className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                    Purchase Now
                                                </a>
                                                <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media h-16em">
                                            <div className="card-media-overly"></div>
                                            <img src="Assets/images/3-3.png" alt="" className="" />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="font-semibold text-lg truncate"> Dreamer’s Wake </a>
                                            <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a href="#"> <span>0.5 ETH </span> </a>
                                                <a href="#"> <span> 1 of 1 </span> </a>
                                            </div>
                                            <div className="flex mt-2 space-x-2">
                                                <div className="flex items-center -space-x-2 -mt-1">
                                                    <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                                                    <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                                                </div>
                                                <div className="flex-1 leading-4 text-sm">
                                                    <div><strong> Place a Bid</strong></div>
                                                </div>
                                            </div>
                                            <div className="flex mt-3 space-x-2 text-sm">
                                                <a href="#" className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                    Purchase Now
                                                </a>
                                                <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media h-16em">
                                            <div className="card-media-overly"></div>
                                            <img src="Assets/images/3-4.gif" alt="" className="" />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="font-semibold text-lg truncate"> Dreamer’s Wake </a>
                                            <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a href="#"> <span>0.5 ETH </span> </a>
                                                <a href="#"> <span> 1 of 1 </span> </a>
                                            </div>
                                            <div className="flex mt-2 space-x-2">
                                                <div className="flex items-center -space-x-2 -mt-1">
                                                    <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                                                    <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                                                </div>
                                                <div className="flex-1 leading-4 text-sm">
                                                    <div><strong> Place a Bid</strong></div>
                                                </div>
                                            </div>
                                            <div className="flex mt-3 space-x-2 text-sm">
                                                <a href="#" className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                    Purchase Now
                                                </a>
                                                <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white uk-invisible" href="#" uk-slider-item="previous">
                                <i className="icon-feather-chevron-left"></i>
                            </a>
                            <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next">
                                <i className="icon-feather-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hot-collection">
                    <div className="my-6 flex items-center justify-between border-b pb-3">
                        <div>
                            <h2 className="text-xl font-semibold primary-color">Hot collections</h2>
                            <p className="font-medium text-gray-500 leading-6">Find a Hot Bids You Might Be Interested In.</p>
                        </div>
                        <a href="#" className="text-pink-500 sm:block hidden"> See all </a>
                    </div>
                    <div className="relative uk-slider" uk-slider="finite: true">
                        <div className="uk-slider-container px-1 py-3">
                            <ul className="uk-slider-items uk-child-width-1-4@m uk-child-width-1-3@s uk-grid-small uk-grid" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media">
                                            <div className="cover-photo"><img src="Assets/images/4-11.png" className="profile" /></div>
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="font-semibold text-lg text-center truncate"> Dreamer’s Wake </a>
                                            <div className="flex text-center items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a href="#">By <a href="#">Crypto Excellence - ADMIN</a> </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media">
                                            <div className="cover-photo cover-photo-1"><img src="Assets/images/4-12.png" className="profile" /></div>
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="font-semibold text-lg text-center truncate"> Dreamer’s Wake </a>
                                            <div className="flex text-center items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a href="#">By <a href="#">Crypto Excellence - ADMIN</a> </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media">
                                            <div className="cover-photo cover-photo-2"><img src="Assets/images/4-13.gif" className="profile" /></div>
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="font-semibold text-lg text-center truncate"> Dreamer’s Wake </a>
                                            <div className="flex text-center items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a href="#">By <a href="#">Crypto Excellence - ADMIN</a> </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media">
                                            <div className="cover-photo cover-photo-3"><img src="Assets/images/4-14.gif" className="profile" /></div>
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="font-semibold text-lg text-center truncate"> Dreamer’s Wake </a>
                                            <div className="flex text-center items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a href="#">By <a href="#">Crypto Excellence - ADMIN</a> </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media">
                                            <div className="cover-photo cover-photo-4"><img src="Assets/images/4-15.gif" className="profile" /></div>
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="font-semibold text-lg text-center truncate"> Dreamer’s Wake </a>
                                            <div className="flex text-center items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a href="#">By <a href="#">Crypto Excellence - ADMIN</a> </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media">
                                            <div className="cover-photo cover-photo-5"><img src="Assets/images/4-16.gif" className="profile" /></div>
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="font-semibold text-lg text-center truncate"> Dreamer’s Wake </a>
                                            <div className="flex text-center items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a href="#">By <a href="#">Crypto Excellence - ADMIN</a> </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white uk-invisible" href="#" uk-slider-item="previous">
                                <i className="icon-feather-chevron-left"></i>
                            </a>
                            <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next">
                                <i className="icon-feather-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="explore">
                    <div className="my-6 flex items-center justify-between border-b pb-3">
                        <div>
                            <h2 className="text-xl font-semibold primary-color">Explore</h2>
                            <p className="font-medium text-gray-500 leading-6">Find a Hot Bids You Might Be Interested In.</p>
                        </div>
                        <a href="#" className="text-pink-500 sm:block hidden"> See all </a>
                    </div>
                    <div className="portfolio-filter">
                        <div className="controls">
                            <label>Filter:</label>
                            <button className="filter" data-filter="all">All</button>
                            <button className="filter" data-filter=".category-1">Art</button>
                            <button className="filter" data-filter=".category-2">Photography</button>
                            <button className="filter" data-filter=".category-3">Games</button>
                            <button className="filter" data-filter=".category-4">Music</button>
                            <button className="filter" data-filter=".category-5">Domains</button>
                            <button className="filter" data-filter=".category-6">Defi</button>
                            <button className="filter" data-filter=".category-7">Memes</button>
                            <button className="filter" data-filter=".category-8">Metsversas</button>
                            <button className="filter" data-filter=".category-9">Sports</button>
                            <label>Sort:</label>
                            <button className="sort" data-sort="myorder:asc">Asc</button>
                            <button className="sort" data-sort="myorder:desc">Desc</button>
                        </div>
                        <div id="Container" className="container">
                            <div className="mix category-1">
                                <div className="card">
                                    <div className="card-media h-16em">
                                        <div className="card-media-overly"></div>
                                        <img src="Assets/images/3-1.gif" alt="" className="" />
                                        <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div>
                                    </div>
                                    <div className="card-body">
                                        <a href="#" className="font-semibold text-lg truncate"> Dreamer’s Wake </a>
                                        <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                            <a href="#"> <span>0.5 ETH </span> </a>
                                            <a href="#"> <span> 1 of 1 </span> </a>
                                        </div>
                                        <div className="flex mt-2 space-x-2">
                                            <div className="flex items-center -space-x-2 -mt-1">
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                                            </div>
                                            <div className="flex-1 leading-4 text-sm">
                                                <div><strong> Place a Bid</strong></div>
                                            </div>
                                        </div>
                                        <div className="flex mt-3 space-x-2 text-sm">
                                            <a href="#" className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                Purchase Now
                                            </a>
                                            <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mix category-4">
                                <div className="card">
                                    <div className="card-media h-16em">
                                        <div className="card-media-overly"></div>
                                        <img src="Assets/images/3-2.jpg" alt="" className="" />
                                        <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div>
                                    </div>
                                    <div className="card-body">
                                        <a href="#" className="font-semibold text-lg truncate"> Dreamer’s Wake </a>
                                        <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                            <a href="#"> <span>0.5 ETH </span> </a>
                                            <a href="#"> <span> 1 of 1 </span> </a>
                                        </div>
                                        <div className="flex mt-2 space-x-2">
                                            <div className="flex items-center -space-x-2 -mt-1">
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                                            </div>
                                            <div className="flex-1 leading-4 text-sm">
                                                <div><strong> Place a Bid</strong></div>
                                            </div>
                                        </div>
                                        <div className="flex mt-3 space-x-2 text-sm">
                                            <a href="#" className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                Purchase Now
                                            </a>
                                            <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mix category-8">
                                <div className="card">
                                    <div className="card-media h-16em">
                                        <div className="card-media-overly"></div>
                                        <img src="Assets/images/3-3.png" alt="" className="" />
                                        <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div>
                                    </div>
                                    <div className="card-body">
                                        <a href="#" className="font-semibold text-lg truncate"> Dreamer’s Wake </a>
                                        <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                            <a href="#"> <span>0.5 ETH </span> </a>
                                            <a href="#"> <span> 1 of 1 </span> </a>
                                        </div>
                                        <div className="flex mt-2 space-x-2">
                                            <div className="flex items-center -space-x-2 -mt-1">
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                                            </div>
                                            <div className="flex-1 leading-4 text-sm">
                                                <div><strong> Place a Bid</strong></div>
                                            </div>
                                        </div>
                                        <div className="flex mt-3 space-x-2 text-sm">
                                            <a href="#" className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                Purchase Now
                                            </a>
                                            <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
							
							<div className="mix category-9">
                                <div className="card">
                                    <div className="card-media h-16em">
                                        <div className="card-media-overly"></div>
                                        <img src="Assets/images/cricket.jpg" alt="" className="" />
                                        <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div>
                                    </div>
                                    <div className="card-body">
                                        <a href="#" className="font-semibold text-lg truncate"> Cricket </a>
                                        <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                            <a href="#"> <span>0.5 ETH </span> </a>
                                            <a href="#"> <span> 1 of 1 </span> </a>
                                        </div>
                                        <div className="flex mt-2 space-x-2">
                                            <div className="flex items-center -space-x-2 -mt-1">
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                                            </div>
                                            <div className="flex-1 leading-4 text-sm">
                                                <div><strong> Place a Bid</strong></div>
                                            </div>
                                        </div>
                                        <div className="flex mt-3 space-x-2 text-sm">
                                            <a href="#" className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                Purchase Now
                                            </a>
                                            <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mix category-5">
                                <div className="card">
                                    <div className="card-media h-16em">
                                        <div className="card-media-overly"></div>
                                        <img src="Assets/images/3-4.gif" alt="" className="" />
                                        <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div>
                                    </div>
                                    <div className="card-body">
                                        <a href="#" className="font-semibold text-lg truncate"> Dreamer’s Wake </a>
                                        <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                            <a href="#"> <span>0.5 ETH </span> </a>
                                            <a href="#"> <span> 1 of 1 </span> </a>
                                        </div>
                                        <div className="flex mt-2 space-x-2">
                                            <div className="flex items-center -space-x-2 -mt-1">
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                                            </div>
                                            <div className="flex-1 leading-4 text-sm">
                                                <div><strong> Place a Bid</strong></div>
                                            </div>
                                        </div>
                                        <div className="flex mt-3 space-x-2 text-sm">
                                            <a href="#" className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                Purchase Now
                                            </a>
                                            <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mix category-7">
                                <div className="card">
                                    <div className="card-media h-16em">
                                        <div className="card-media-overly"></div>
                                        <img src="Assets/images/3-5.gif" alt="" className="" />
                                        <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div>
                                    </div>
                                    <div className="card-body">
                                        <a href="#" className="font-semibold text-lg truncate"> Dreamer’s Wake </a>
                                        <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                            <a href="#"> <span>0.5 ETH </span> </a>
                                            <a href="#"> <span> 1 of 1 </span> </a>
                                        </div>
                                        <div className="flex mt-2 space-x-2">
                                            <div className="flex items-center -space-x-2 -mt-1">
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                                            </div>
                                            <div className="flex-1 leading-4 text-sm">
                                                <div><strong> Place a Bid</strong></div>
                                            </div>
                                        </div>
                                        <div className="flex mt-3 space-x-2 text-sm">
                                            <a href="#" className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                Purchase Now
                                            </a>
                                            <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mix category-6">
                                <div className="card">
                                    <div className="card-media h-16em">
                                        <div className="card-media-overly"></div>
                                        <img src="Assets/images/4-15.gif" alt="" className="" />
                                        <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div>
                                    </div>
                                    <div className="card-body">
                                        <a href="#" className="font-semibold text-lg truncate"> Dreamer’s Wake </a>
                                        <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                            <a href="#"> <span>0.5 ETH </span> </a>
                                            <a href="#"> <span> 1 of 1 </span> </a>
                                        </div>
                                        <div className="flex mt-2 space-x-2">
                                            <div className="flex items-center -space-x-2 -mt-1">
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                                            </div>
                                            <div className="flex-1 leading-4 text-sm">
                                                <div><strong> Place a Bid</strong></div>
                                            </div>
                                        </div>
                                        <div className="flex mt-3 space-x-2 text-sm">
                                            <a href="#" className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                Purchase Now
                                            </a>
                                            <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mix category-2">
                                <div className="card">
                                    <div className="card-media h-16em">
                                        <div className="card-media-overly"></div>
                                        <img src="Assets/images/3-6.gif" alt="" className="" />
                                        <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div>
                                    </div>
                                    <div className="card-body">
                                        <a href="#" className="font-semibold text-lg truncate"> Dreamer’s Wake </a>
                                        <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                            <a href="#"> <span>0.5 ETH </span> </a>
                                            <a href="#"> <span> 1 of 1 </span> </a>
                                        </div>
                                        <div className="flex mt-2 space-x-2">
                                            <div className="flex items-center -space-x-2 -mt-1">
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                                            </div>
                                            <div className="flex-1 leading-4 text-sm">
                                                <div><strong> Place a Bid</strong></div>
                                            </div>
                                        </div>
                                        <div className="flex mt-3 space-x-2 text-sm">
                                            <a href="#" className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                Purchase Now
                                            </a>
                                            <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mix category-3">
                                <div className="card">
                                    <div className="card-media h-16em">
                                        <div className="card-media-overly"></div>
                                        <img src="Assets/images/3-7.gif" alt="" className="" />
                                        <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div>
                                    </div>
                                    <div className="card-body">
                                        <a href="#" className="font-semibold text-lg truncate"> Dreamer’s Wake </a>
                                        <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                            <a href="#"> <span>0.5 ETH </span> </a>
                                            <a href="#"> <span> 1 of 1 </span> </a>
                                        </div>
                                        <div className="flex mt-2 space-x-2">
                                            <div className="flex items-center -space-x-2 -mt-1">
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                                                <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" />
                                            </div>
                                            <div className="flex-1 leading-4 text-sm">
                                                <div><strong> Place a Bid</strong></div>
                                            </div>
                                        </div>
                                        <div className="flex mt-3 space-x-2 text-sm">
                                            <a href="#" className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                Purchase Now
                                            </a>
                                            <a href="#" className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gap"></div>
                            <div className="gap"></div>
                        </div>
                    </div>
                </div>
            </div>
             </div>
        </div>
    )
}

export default Home
