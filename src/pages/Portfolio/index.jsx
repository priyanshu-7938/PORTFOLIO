import React from "react";
import { projectData } from "../../utils";
import github from "../../assets/github.png";

export default function Portfolio() {
    const openGithub = () => {
        const newTab = window.open('https://github.com/priyanshu-7938', '_blank');
        if (newTab) {
          newTab.focus();
        } else {
          alert('Please allow pop-ups to open the new tab.');
        }
      };
      const openLink = (link) => {
        const newTab = window.open(link, '_blank');
        if (newTab) {
          newTab.focus();
        } else {
          alert('Please allow pop-ups to open the new tab.');
        }
      };
    return (
        <div className="pt-[40px] relative bg-[#002b36]">
            <p className="absolute font-extrabold text-4xl top-[10px] left-[50px] text-[#859900] font-jetbrains-mono">I Curate projects that resonates wiht me!!</p>
            <div className="flex gap-2 mx-8 flex-col text-[#839496] text-xl font-comic-neue-bold">
                <div className="w-[100%] p-4 px-8 pt-4 bg-[#073642]">
                    <div className="flex flex-col items center gap-[30px] my-[80px]">
                        <p>
                        I have delved into the realms of Zero- Knowledge Proofs (ZK-P) and cryptographic technologies, continuously honing my understanding in these domains. Simultaneously, I maintain a solid command over the MERN stack—a collection of JavaScript frameworks that facilitate web application development—as well as Web3 concepts, which encompass decentralized applications built on blockchain technology.
                        </p>
                        <p>
                        Alongside, I have experience working with a variety of tech stacks including zk, circom, MERN, Solidity, and blockchain technologies, which have allowed me to develop robust and secure applications in various application.
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 mx-8 mt-20 bg-[#073642] text-[#839496] text-xl font-comic-neue-bold p-5">
                    <spam className="text-3xl text-[#2aa198] font-bold font-jetbrains-mono">My projects...?</spam>
                    <div>
                        <p className="text-md mt-5">In that case, have a overview from below section or checkk out my Github for a better view..</p>
                        <div className="flex my-2 gap-2 text-[#2aa198] cursor-pointer"
                            onClick={openGithub}
                            >
                            <p className="text-2xl hover:transform hover:rotate-6 hover:transition-transform hover:duration-300">Github</p>
                            <img src="" className="h-[30px] hover:transform hover:translate-x-3 hover:duration-300 transform translate-x-0 duration-300" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 lg:flex-row flex-col text-[#839496] mx-8 mt-8">
                    { projectData.map((item,index)=>{
                        return (
                            <div key={index} className="relative p-5 bg-[#073642] w-full lg:w-[33%]">
                                <p className="absolute font-extrabold text-2xl top-[-15px] left-[20px] text-[#859900] font-jetbrains-mono">{item.overlay}</p>
                                <span className="text-3xl text-[#2aa198] font-bold font-jetbrains-mono">{item.name}</span>
                                <div className="flex flex-col gap-2 mt-[20px]">
                                    <p className="font-2xl font-bold">{item.description}</p>
                                    <div className=""
                                        onClick={()=>openLink(item.link)}
                                    >
                                        <span className="text-2xl font-bold hover:text-white hover:transition-colors hover:duration-300 transition-colors duration-300 cursor-pointer">Code Base...</span>   
                                    </div>  
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="bg-[#073642] w-full mt-[40px]"
                onClick={openGithub}>
                <div className="relative flex items-center justify-center gap-2 mt-[20px] h-[25px]">
                    <span className="absolute top-[-30px] flex text-3xl text-[#859900] font-bold hover:text-white hover:transition-colors hover:duration-300 transition-colors duration-300 cursor-pointer items-center">Visit my Github........ 😳 <img src={github} className="h-[50px]" alt="" /></span>   
                </div>
            </div>
        </div>
    )
}

//overlay text.
//name 
//discrption
//link