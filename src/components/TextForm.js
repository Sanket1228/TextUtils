import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () =>{
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick = () =>{
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const clear = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to keyboard","success");
    }
    
    return (
        <>
        <div className="container my-3">
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
            <div className="form-group my-2">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={clear}>Clear</button>
        </div>

        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <div>
                {text.split(" ").filter((element) => element.length !== 0).length} Words and {text.replace(/ /g,"").length} letters
            </div>
            <div className="my-2">
                <h3>Preview</h3>
                <div>
                    {text.length!==0?text:"Nothing to preview"}
                </div>
            </div>
        </div>
        </>
    )
}
