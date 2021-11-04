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
        <div className={`accordion container my-2 bg-${props.mode==='dark' ?'secondary':'light'}`} id="accordionExample">
            <h1 className={`text-${props.mode==='dark' ?'white':'dark'}`}>About Us</h1>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className={`accordion-button text-${props.mode==='dark' ?'white':'dark'} bg-${props.mode==='dark' ?'secondary':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body bg-gradient">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className={`accordion-button collapsed text-${props.mode==='dark' ?'white':'dark'} bg-${props.mode==='dark' ?'secondary':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body bg-gradient">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}
