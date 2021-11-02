import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () =>{
        // console.log("Click Upper Case");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        // console.log("Click Upper Case");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        // console.log("Click change Case");
        setText(event.target.value);
    }

    const clear = () =>{
        // console.log("Click change Case");
        let newText = "";
        setText(newText);
    }

    return (
        <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-dark" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-dark mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
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
