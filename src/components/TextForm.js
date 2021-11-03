import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () =>{
        
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const clear = () =>{
        let newText = "";
        setText(newText);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    return (
        <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="form-group my-2">
                <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-dark" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-dark mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-dark mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-dark mx-2" onClick={clear}>Clear</button>
        </div>

        <div className="container">
            <div>
                {text.split(" ").length} Words and {text.length} letters
            </div>
            <div className="my-2">
                <h3>Preview</h3>
                <div>
                    {text}
                </div>
            </div>
        </div>
        </>
    )
}
