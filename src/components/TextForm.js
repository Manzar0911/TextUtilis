import React, {useState} from 'react'

const TextForm = (props) => {

    const [text,setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared","success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
        
    }

    const handleCopy = () => {
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied!!!!","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed all extra spaces","success");
    }

  return (
    <>
       <div className='container'  style={{color: props.mode === "dark" ? "white" : "#042743"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === "dark" ? "#13466e" : "white" , color: props.mode === "dark" ? "white" : "#042743"}}></textarea>
                
            </div>

            <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       </div>
       <div className='container my-3' style={{color: props.mode === "dark" ? "white" : "#042743"}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the textbox above to preview it here..."}</p>
       </div>
    </>
  )
}

export default TextForm
