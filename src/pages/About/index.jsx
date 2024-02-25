import React,{ useState } from "react";
import location from "../../assets/location.png";
import hat from "../../assets/hat.png";
import { useNavigate } from "react-router-dom";
import s from "../../assets/s.png";
import e from "../../assets/e.png";
import coffee from "../../assets/coffee.png";
import badminton from "../../assets/badminton.png";
import tt from "../../assets/tt.png";
import snap from "../../assets/chat.png";
import time from "../../assets/time.png";
import walk from "../../assets/walk.png";
import bc from "../../assets/bc.png";
import gift from "../../assets/gift.png";

export default function About() {
    const Navigate = useNavigate();
    const [ quote, setQuote ] = useState("Dammm, what a Quote..");
    return (
        <div className="py-[40px] relative bg-[#002b36] ">
            <p className="absolute font-extrabold text-6xl top-[10px] left-[50px] text-[#859900] font-jetbrains-mono">All about me!</p>
            <div className="flex gap-2 mx-8 lg:flex-row flex-col text-[#839496] text-xl font-comic-neue-bold">
                <div className="lg:w-[50%] p-4 px-8 pt-12 bg-[#073642]">
                    <div className="flex flex-col items center gap-[25px] my-[80px]">
                        <p>
                        As a person born in the Rajasthan and the inherits essence of marwadi, I cherished the silence and solitude I found in the town of Gandhinagar.
                        </p>
                        <p>
                        For high school, I studied at EDEN School. Currently, I am pursuing my B.Tech degree in Computer Science Engineering at the Indian Institute of Information Technology, Vadodara. I have no clue where the next destination is, but I’m always ready for new experiences.
                        </p>
                    </div>
                </div>
                <div className=" lg:w-[50%]  flex flex-col gap-2 ">
                    <div className="bg-[#073642] p-[30px]">
                        <div className="text-4xl font-jetbrains-mono font-bold text-[#b58900] my-[20px] mb-[40px]">
                            Home
                        </div>
                        <p className="flex items-center gap-2 mb-[20px]"><img src={location} className="h-[40px]" alt="" />I'm a Rajasthani at heart…</p>
                        <span className="rounded-[20px] font-bold text-[#b58900] p-1 pb-2 cursor-pointer transition-colors duration-300 hover:text-[#859900]">
                            Bhilwara, Rajasthan
                        </span>
                    </div>
                    <div className="bg-[#073642] p-[30px]">
                        <div className="text-4xl font-jetbrains-mono font-bold text-[#b58900] my-[20px] mb-[40px]">
                        Education   
                        </div>
                        <p className="flex items-center gap-2 mb-[20px]"><img src={hat} className="h-[40px]" alt="" />…but I've spent four wonderful years in greenery of Gandhinagar. At the campus of IIITV</p>
                        <span className="rounded-[20px] font-bold text-[#b58900] mt-4 p-1 pb-2 cursor-pointer transition-colors duration-300 hover:text-[#859900]">
                            Gandhinagar, Gujrat
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 mx-8 mt-20 bg-[#073642] text-[#839496] text-xl font-comic-neue-bold p-5">
                    <spam className="text-3xl text-[#2aa198] font-bold font-jetbrains-mono">You meant professionally?</spam>
                    <div>
                        <p className="text-md mt-5">Let's talk about the tech equipment. Since I was only a child, there has always been a computer no further than an arm's distance from me. I just love computers for what they can do and what I can do with them.</p>
                        <div className="flex my-2 gap-2 text-[#2aa198] cursor-pointer"
                            onClick={()=>Navigate("/portfolio")}
                            >
                            <p className="text-2xl hover:transform hover:translate-x-2 hover:transition-transform hover:duration-300 transform translate-x-0 transition-transform duration-300">See my Portfolio...</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 lg:flex-row flex-col text-[#839496] mx-8">
                    <div className="p-5 bg-[#073642] w-full">
                        <spam className="text-3xl text-[#2aa198] font-bold font-jetbrains-mono">Current PC</spam>
                        <div className="flex flex-col gap-2 mt-[20px]">
                            <span className="text-2xl font-bold text-[#2aa198]">Lenovo ideapad-9 i9 11th gen</span>   
                        </div>  
                    </div>
                    <div className="p-5 w-full bg-[#073642]">
                        <spam className="text-3xl text-[#2aa198] font-bold font-jetbrains-mono">Home PC</spam>
                        <div className="flex flex-col gap-2 mt-[20px]">
                            <span className="text-2xl font-bold text-[#2aa198]">Hp Desktop i5 9th gen</span>  
                        </div>   
                    </div>
                    <div className="p-5 w-full bg-[#073642]">
                        <spam className="text-3xl text-[#2aa198] font-bold font-jetbrains-mono">First PC</spam>
                        <div className="flex flex-col gap-2 mt-[20px]">
                            <span className="text-2xl font-bold text-[#2aa198]">panasonic's core2-dio🥲</span>   
                        </div>  
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-2 mx-8 mt-20">
                <div className="bg-[#073642] text-[#cb4b16] text-xl font-comic-neue-bold p-[30px] lg:w-[50%]">
                    <div className="text-3xl font-jetbrains-mono font-bold text-[#cb4b16] my-[20px] mb-[40px]">
                        You meant personally?
                    </div>
                    <p className="flex items-center gap-2 mb-[20px] text-[#839496]">"Manners maketh man." So do opinions and hobbies. Here is a sneak peek of just that, so you can know me a little better and we can be friends, which will never happen if you love to wake up at 5:00......</p>
                    <p 
                        className="font-bold text-[#cb4b16] cursor-pointer hover:transform hover:translate-x-2 hover:transition-transform hover:duration-300 transform translate-x-0 transition-transform duration-300"
                        onClick={()=>Navigate("/contact")}
                    >
                        Drop a message...
                    </p>
                </div>
                <div className="bg-[#073642] text-[#cb4b16] text-xl font-comic-neue-bold p-[30px] lg:w-[50%]">
                    <div className="text-3xl font-jetbrains-mono font-bold text-[#cb4b16] my-[20px] mb-[40px]">
                        A favourite quote
                    </div>
                    <div className="flex items-center justify-center h-[140px]">
                        <span className="flex relative items-center gap-2 mb-[20px]">
                            <img className="h-[40px] absolute top-[-20px] left-[-20px] opacity-60" src={s} alt="" />"{quote}"<img className="h-[40px] absolute right-[-20px] top-[-20px] opacity-60" src={e} alt="" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 lg:flex-row flex-col mx-8 mt-[0.5rem]">
                <div className="flex md:flex-row flex-col gap-2 lg:w-[50%] w-[100%]">
                    <div className=" p-[30px] font-comic-neue-bold text-xl bg-[#073642] md:w-[50%]">
                        <img src={coffee} className="h-[30px]" alt="" />
                        <p className="text-[#839496]">I prefer <spam className="font-bold">Dark coffee</spam> over other drinks</p>
                    </div>
                    <div className=" p-[30px] font-comic-neue-bold text-xl bg-[#073642] md:w-[50%]">
                        <img src={badminton} className="h-[30px]" alt="" />
                        <p className="text-[#839496]">I love playing <spam className="font-bold">badminton 😁.</spam></p>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-2 lg:w-[50%] w-[100%]">
                    <div className=" p-[30px] font-comic-neue-bold text-xl bg-[#073642] md:w-[50%]">
                        <img src={tt} className="h-[30px]" alt="" />
                        <p className="text-[#839496]">But still prefer <spam className="font-bold">Tabel Tennis</spam> over Badminton</p>
                    </div>
                    <div className=" p-[30px] font-comic-neue-bold text-xl bg-[#073642] md:w-[50%]">
                        <img src={snap} className="h-[30px]" alt="" />
                        <p className="text-[#839496]">I love to have <spam className="font-bold">deep convo😭</spam></p>
                    </div>
                </div>
            </div>

            <div className="flex gap-2 lg:flex-row flex-col mx-8 mt-[0.5rem]">
                <div className="flex md:flex-row flex-col gap-2 lg:w-[50%] w-[100%]">
                    <div className=" p-[30px] font-comic-neue-bold text-xl bg-[#073642] md:w-[50%]">
                        <img src={time} className="h-[30px]" alt="" />
                        <p className="text-[#839496]">I prefer<spam className="font-bold"> quality time </spam> over Reels.</p>
                    </div>
                    <div className=" p-[30px] font-comic-neue-bold text-xl bg-[#073642] md:w-[50%]">
                        <img src={walk} className="h-[30px]" alt="" />
                        <p className="text-[#839496]">For me <spam className="font-bold">walk are the best</spam> with.</p>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-2 lg:w-[50%] w-[100%]">
                    <div className=" p-[30px] font-comic-neue-bold text-xl bg-[#073642] md:w-[50%]">
                        <img src={gift} className="h-[30px]" alt="" />
                        <p className="text-[#839496]">Gift me <spam className="font-bold">simply salted chips..</spam>love them.</p>
                    </div>
                    <div className=" p-[30px] font-comic-neue-bold text-md bg-[#073642] md:w-[50%]">
                        <img src={bc} className="h-[30px]" alt="" />
                        <p className="pt-2 text-[#839496]">I literally love<spam className="font-bold">BLOCKCHAIN.</spam> coolest tech of whole century.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}