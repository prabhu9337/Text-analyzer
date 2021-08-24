import React, {useState} from 'react'

export default function TextForm(props) {
    const handelUpClick = ()=> {
        console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    const handelLoClick = ()=> {
        console.log("Lowercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }
    const handelClearClick = ()=> {
        console.log("Clear text was Clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Clear Text", "success");
    }
    const handelCopy = ()=> {
        // console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard", "success");
    }
    const handelExtrSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extraspaces", "success");
    }
    const handelOnChange = (event)=> {
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode === 'light'?'white':'#9e9898', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handelUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handelLoClick}>Convert to Lowecase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handelClearClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handelCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handelExtrSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summery</h2>
            <p>{text.length} characters & {text.split(" ").filter((element)=>{return element.length!==0}).length} words</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
        </>
    )
}
