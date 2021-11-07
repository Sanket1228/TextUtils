import React from 'react'

export default function About(props) {
   
    // const [myStyle, setMyStyle] = useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })

    // // const [myBtnTxt, setMyBtnTxt] = useState("Enable Dark Mode")

    // const toggleStyle = () =>{
    //     if(props.mode === 'dark'){
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:"black"
    //         })
    //         // setMyBtnTxt("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         // setMyBtnTxt("Enable Dark Mode");
    //     }
    // }

    return (
        <>
        <div className={`accordion container my-2 bg-${props.mode==='dark' ?'#13466e':'light'}`} id="accordionExample">
            <h1 className={`text-${props.mode==='dark' ?'white':'dark'}`}>About Us</h1>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className={`accordion-button text-${props.mode==='dark' ?'white':'dark'} bg-${props.mode==='dark' ?'secondary':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text </strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body bg-gradient">
                        <strong>Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or </strong>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className={`accordion-button collapsed text-${props.mode==='dark' ?'white':'dark'} bg-${props.mode==='dark' ?'secondary':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body bg-gradient">
                        <strong>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</strong> 
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}
