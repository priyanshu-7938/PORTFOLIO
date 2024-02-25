import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import github from "../../assets/github.png";
import mail from "../../assets/email.png";

export default function Home(){
    const Navigate = useNavigate();
    const [ textIndex, setTextIndex ] = useState(0);
    const textBabyArray = [
        '"blockchain Enthusiast"',
        "a MERN stack Novice..😁",
        ",All bout Zero_knowledge",
        "Open source contributer. 🌱",
        "a coffee lover🍵",
        "proud Indian"
    ];
    const textLinkArray = [
        "",
        "https://github.com/priyanshu-7938",
        "mailto:priyanshoe.official@gmail.com",
        "",
        "",
        ""
    ];
    const secondTextBabyArray = [
        "I create clean and efficient Contracts.", 
        "Yo! click me to check out some of my Projects....",
        "Chat with me about this we ganna have a blast...",
        "Reach out if our goals align, Would love to contribute",
        "",
        ""
    ];
    useEffect(()=>{
        const helo = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            }, 5000);//resolve in this time...
        })
        helo.then(()=>{
            setTextIndex((value)=>{return (value+1)%textBabyArray.length});
        });
    },[textIndex]);
    const handelGithub  = () => {
        const newTab = window.open('https://github.com/priyanshu-7938', '_blank');
        if (newTab) {
            newTab.focus();
        } else {
            alert('Please allow pop-ups to open the new tab.');
        }
    }
    const handelMail = () => {
        const newTab = window.open('mailto:priyanshoe.official@gmail.com', '_blank');
        if (newTab) {
            newTab.focus();
        } else {
            alert('Please allow pop-ups to open the new tab.');
        }
    }
    return (
        <div className="md:flex md:items-center md:justify-center md:min-h-[80vh] mt-[50px]"
            onClick={()=>Navigate("/portfolio")}
        >
            <div className="flex flex-col justify-start font-jetbrains-mono ">
                <p className="text-[#839496] text-[25px]">Hello there I'm </p>
                <p className="transition-text transform hover:scale-105 hover:duration-300 duration-300 bg-clip-text leading-none font-extrabold font-jetbrains-mono text-[100px] text-transparent flex items-center gap-1 bg-gradient-to-r from-[#d33682] to-[#dc322f]">
                    Priyanshu
                </p>
                <p className="transition-text transform hover:scale-105 hover:duration-300 duration-300 bg-clip-text leading-none font-bold font-jetbrains-mono text-[100px] text-transparent flex items-center gap-1 bg-gradient-to-r from-[#d33682] to-[#dc322f]">
                    Soni
                </p>
                <p className="text-[#839496] text-[25px]">and so nice to meet U.</p>
                <p className="text-[#839496] text-[25px]">
                    I am <span className={`text-[#6c71c4] ${textIndex == 0 || textIndex==5?"font-samarkan":""}`}>{textBabyArray[textIndex]}</span>
                </p>
                <p className="text-[#839496] text-[25px]">
                    With utmost meticulousness and love for the craft,
                    <p className={`text-[#b58900] ${textLinkArray[textIndex] !== "" ? "transition-text transform hover:scale-105 hover:duration-200 duration-100": ""}`}
                        onClick={()=>{
                            if(textLinkArray[textIndex] !== ""){
                                const newTab = window.open(textLinkArray[textIndex], '_blank');
                                if (newTab) {
                                    newTab.focus();
                                } else {
                                    alert('Please allow pop-ups to open the new tab.');
                                }  
                                Navigate("/");  
                            }
                        }}
                    >{secondTextBabyArray[textIndex]}</p>
                </p>
            </div>
      
            {/* <div className="text-4xl md:w-[60%] font-samarkan">
                hello world
            </div> */}     
          
          {/* <p className="bg-clip-text text-transparent flex items-center gap-1 bg-gradient-to-r from-[#d33682] to-[#dc322f]">
            hello world baby
            
            </ span>   */}
            <div className="absolute w-full bottom-0 md:block hidden ">
                <div className="flex gap-3 px-6 py-2">
                    <img src={github} className="h-[40px] hover:transition-colors hover:text-yellow-300 hover:duration-300" alt="" 
                        onClick={handelGithub}
                    />
                    <img src={mail} className="h-[40px]" alt=""
                        onClick={handelMail}
                    />
                </div>
            </div>
        </div>
    )
}

/*tell him im an 
    proud indian
    blockchain enthuistic
    working with zeroknowledge a lot.
    a full stack guy...
    coffee lover
    
    
                    $$\                                         $$\                 
                    \__|                                        $$ |                
 $$$$$$\   $$$$$$\  $$\ $$\   $$\  $$$$$$\  $$$$$$$\   $$$$$$$\ $$$$$$$\  $$\   $$\ 
$$  __$$\ $$  __$$\ $$ |$$ |  $$ | \____$$\ $$  __$$\ $$  _____|$$  __$$\ $$ |  $$ |
$$ /  $$ |$$ |  \__|$$ |$$ |  $$ | $$$$$$$ |$$ |  $$ |\$$$$$$\  $$ |  $$ |$$ |  $$ |
$$ |  $$ |$$ |      $$ |$$ |  $$ |$$  __$$ |$$ |  $$ | \____$$\ $$ |  $$ |$$ |  $$ |
$$$$$$$  |$$ |      $$ |\$$$$$$$ |\$$$$$$$ |$$ |  $$ |$$$$$$$  |$$ |  $$ |\$$$$$$  |
$$  ____/ \__|      \__| \____$$ | \_______|\__|  \__|\_______/ \__|  \__| \______/ 
$$ |                    $$\   $$ |                                                  
$$ |                    \$$$$$$  |                                                  
\__|                     \______/                                                   



*/