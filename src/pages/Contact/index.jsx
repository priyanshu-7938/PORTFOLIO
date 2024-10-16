import React from "react";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import arro from "../../assets/arro.png";
import github from "../../assets/github.png";
import insta from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";
import linktree from "../../assets/linktree.png"; 
import _1 from "../../assets/images/01.jpg";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const Navigate = useNavigate();
    const openGithub = () => {
        const newTab = window.open('https://github.com/priyanshu-7938', '_blank');
        if (newTab) {
          newTab.focus();
        } else {
          alert('Please allow pop-ups to open the new tab.');
        }
      };
      const openLinkedin = () => {
        const newTab = window.open('https://www.linkedin.com/in/priyanshu-soni-6758a5274/', '_blank');
        if (newTab) {
          newTab.focus();
        } else {
          alert('Please allow pop-ups to open the new tab.');
        }
      };
      const openInstagram = () => {
        const newTab = window.open('https://www.instagram.com/priyanshu_soni22/', '_blank');
        if (newTab) {
          newTab.focus();
        } else {
          alert('Please allow pop-ups to open the new tab.');
        }
      };
      const openLinktree = () => {
        const newTab = window.open('https://linktr.ee/priyanSHOE', '_blank');
        if (newTab) {
          newTab.focus();
        } else {
          alert('Please allow pop-ups to open the new tab.');
        }
      };
      const openMailTo = () => {
        const newTab = window.open('mailto:priyanshoe.official@gmail.com', '_blank');
        if (newTab) {
          newTab.focus();
        } else {
          alert('Please allow pop-ups to open the new tab.');
        }
      };
      

    return (
        <div className="pt-[40px] relative bg-[#002b36]">
            <p className="absolute font-extrabold text-6xl top-[10px] left-[50px] text-[#859900] font-jetbrains-mono">Get in touch!</p>
            <div className="flex gap-2 mx-8 lg:flex-row flex-col text-[#839496] text-xl font-comic-neue-bold">
                <div className="lg:w-[50%] w-[100%] p-4 px-8 pt-12 bg-[#073642]">
                    <div className="flex flex-col items center gap-[80px] my-[80px]">
                        <p>
                            Whether you're looking for a Web3-Developer in building solutions, Or a Team patner for your project or a Full stack developr (MERN Stack)... I can help.
                        </p>
                        <p>
                            I could bring the refined concept of "excellence" to the table.
                        </p>

                    </div>
                </div>
                <div className="flex lg:w-[50%] w-[100%] lg:flex-col md:flex-row sm:flex-col flex-col gap-2">
                    <div className="bg-[#073642] p-[30px] lg:w-[100%] md:w-[50%] w-[100%]">
                        <div className="text-4xl font-jetbrains-mono font-bold text-[#b58900] my-[20px] mb-[40px]">
                            Email address
                        </div>
                        <p className="flex items-center gap-2 mb-[20px]"><img src={email} className="h-[40px]" alt="" />You can hit me on email</p>
                        <span className="rounded-[20px] font-bold text-[#b58900] p-1 pb-2 cursor-pointer transition-colors duration-300 hover:text-[#859900]"
                            onClick={()=>{
                                navigator.clipboard.writeText("priyanshoe.official@gmail.com");
                                openMailTo();
                            }}
                        >
                            priyanshoe.official@gmail.com
                        </span>
                    </div>
                    <div className="bg-[#073642] p-[30px] lg:w-[100%] md:w-[50%] w-[100%]">
                        <div className="text-4xl font-jetbrains-mono font-bold text-[#b58900] my-[20px] mb-[40px]">
                            Phone Number
                        </div>
                        <p className="flex items-center gap-2 mb-[20px]"><img src={phone} className="h-[40px]" alt="" />...or you can call on my Number.</p>
                        <span className="rounded-[20px] font-bold text-[#b58900] mt-4 p-1 pb-2 cursor-pointer transition-colors duration-300 hover:text-[#859900]"
                            onClick={()=>{
                                navigator.clipboard.writeText("7600714116");
                                alert("coppied");
                            }}
                        >
                            91 7600714116
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 mx-8 mt-20 bg-[#073642] text-[#839496] text-xl font-comic-neue-bold p-5">
                    <spam className="text-3xl text-[#2aa198] font-bold font-jetbrains-mono">You meant Socially?</spam>
                    <div>
                        <p className="text-md mt-5">In that case, you can connect with me on any of my social media presences. I'm way more active on Linkedin and Github(Sometimes!) than I am on any of these other sites. You can go through of the cool stuff I've came across on Instagram, I irregularly update my Linkedin, So check that out too.
                        </p>
                        <div className="flex my-2 gap-2 text-[#2aa198] cursor-pointer"
                            onClick={openGithub}
                            >
                            <p className="text-2xl hover:transform hover:rotate-6 hover:transition-transform hover:duration-300">Github</p>
                            <img src={arro} className="h-[30px] hover:transform hover:translate-x-3 hover:duration-300 transform translate-x-0 duration-300" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 lg:flex-row flex-col text-[#839496] mx-8">
                    <div className="p-5 bg-[#073642] w-full">
                        <spam className="text-3xl text-[#2aa198] font-bold font-jetbrains-mono">Professional Media</spam>
                        <div className="flex flex-col gap-2 mt-[20px]">
                            <div className="flex gap-2"
                                onClick={openGithub}
                            >
                                <img src={github} className="h-[30px]" alt="" />
                                <span className="text-2xl font-bold hover:text-white hover:transition-colors hover:duration-300 transition-colors duration-300 cursor-pointer">Github</span>   
                            </div>    
                            <div className="flex gap-2"
                                onClick={openLinkedin}
                            >
                                <img src={linkedin} className="h-[30px]" alt="" />
                                <span className="text-2xl font-bold hover:text-white hover:transition-colors hover:duration-300 transition-colors duration-300 cursor-pointer">Linkedin</span>    
                            </div>    
                        </div>
                    </div>
                    <div className="p-5 w-full bg-[#073642]">
                        <spam className="text-3xl text-[#2aa198] font-bold font-jetbrains-mono">Social Media</spam>
                        <div className="flex flex-col gap-2 mt-[20px]">
                            <div className="flex gap-2"
                                onClick={openInstagram}
                            >
                                <img src={insta} className="h-[30px]" alt="" />
                                <span className="text-2xl font-bold hover:text-white hover:transition-colors hover:duration-300 transition-colors duration-300  cursor-pointer">Instagram</span>   
                            </div>    
                            <div className="flex gap-2"
                                onClick={openLinktree}
                            >
                                <img src={linktree} className="h-[30px]" alt="" />
                                <span className="text-2xl font-bold hover:text-white hover:transition-colors hover:duration-300 transition-colors duration-300 cursor-pointer">Link Tree</span>    
                            </div>    
                        </div>
                    </div>
                    <div className="p-5 w-full bg-[#073642]">
                        <spam className="text-3xl text-[#2aa198] font-bold font-jetbrains-mono">Social Media</spam>
                        <div className="flex flex-col gap-2 mt-[20px]">
                            <div className="flex gap-2">
                                <spam className="text-3xl">😁</spam>
                                <span className="text-2xl font-bold hover:text-white hover:transition-colors hover:duration-300 transition-colors duration-300  cursor-none">To be added soon!!</span>   
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-row gap-2 mx-8 mt-20">
                <div className="lg:w-[40%] w-[100%]">
                    <img src={_1} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 bg-[#073642] text-[#839496] text-xl font-comic-neue-bold p-5">

                        <spam className="text-3xl text-[#b58900] font-bold font-jetbrains-mono">Say 'Hi!'</spam>
                        <div>
                            <p className="text-md mt-5">I would absolutely love to connect with you. Being an introvert , I sometimes shy away from initiating conversations but if you take the initiative, I'll be more than happy to reciprocate!</p>
                            <p className="text-md mt-5">We could talk over coffee. I absolutely love dark one.</p>
                            <div className="flex my-2 gap-2 text-[#2aa198] cursor-pointer"
                                onClick={()=>Navigate("/about")}
                                >
                                <p className="text-2xl">Know me more</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex gap-2 lg:flex-row md:flex-row flex-col">
                        <img src={insta} className="w-full hidden lg:block" alt="" />
                        <img src={linktree} className="w-full hidden lg:block" alt="" />
                        <img src={insta} className="w-full hidden lg:block" alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}