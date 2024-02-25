import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { _1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12 } from "../assets/shoes";

export default function Navbar(){
    const Navigate = useNavigate();
    const [ Location, setLocation ] = useState("/");
    const Shoes = [_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12 ];
    const [ shoe ,setShoe ] = useState(2); 
    return (
        <div className="flex justify-between items-center px-3 font-jetbrains-mono font-bold lening-[2px] h-[80px]">
            <div className="relative text-4xl font-extrabold leading-8  h-full">
                { Location == "/" &&
                    <div className="absolute w-full h-[5px] bg-gradient-to-r from-[#d33682] to-[#dc322f]"></div>
                }
                <spam className="bg-clip-text text-transparent flex items-center gap-1 bg-gradient-to-r from-[#d33682] to-[#dc322f] p-4 pt-6 h-[60px] cursor-pointer"
                    onClick={()=>{
                        Navigate("/");
                        setLocation("/");
                    }}
                >
                    @priyan
                    <img src={Shoes[shoe]} alt="" 
                        className={`w-[70px] hover:transform hover:rotate-6 hover:transition-transform hover:duration-300 rotate-0 transition-transform duration-700`} 
                        onMouseOver={()=>{
                            setShoe((curr)=>(curr+1)%12);
                        }}
                    />
                </spam>
            </div>
            <div className=" h-full">
                <div className="flex gap-4 h-full">
                    <div className="flex gap-4 items-center relative">
                        { Location == "/portfolio" &&
                            <div className="absolute w-full h-[5px] bg-gradient-to-b top-0 from-[#859900] to-[#859900]"></div>
                        }
                        <div className={`text-2xl font-bold text-[#586e75] transition-colors duration-300 hover:text-[#859900] cursor-pointer ${Location === "/portfolio"?"text-[#859900]":""}`}
                            onClick={() => {
                                setLocation('/portfolio');
                                Navigate("./portfolio");
                            }}
                        >
                            Portfolio
                        </div>
                    </div>
                    <div className="flex gap-4 items-center relative">
                        { Location == "/contact" &&
                            <div className="absolute w-full h-[5px] bg-gradient-to-b top-0 from-[#859900] to-[#859900]"></div>
                        }
                        <div className={`text-2xl font-bold text-[#586e75] transition-colors duration-300 hover:text-[#859900] cursor-pointer ${Location === "/contact"?"text-[#859900]":""}`}
                            onClick={() => {
                                setLocation('/contact');
                                Navigate("/contact");
                            }}
                        >
                            Contact
                        </div>
                    </div>
                    <div className="flex gap-4 items-center relative">
                        { Location == "/about" &&
                            <div className="absolute w-full h-[5px] bg-gradient-to-b top-0 from-[#859900] to-[#859900]"></div>
                        }
                        <div className={`text-2xl font-bold text-[#586e75] transition-colors duration-300 hover:text-[#859900] cursor-pointer ${Location === "/about"?"text-[#859900]":""}`}
                            onClick={() => {
                                setLocation('/about');
                                Navigate("/about");
                            }}

                        >
                            About
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}