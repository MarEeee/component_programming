import React, { useState, useEffect } from "react"

const ColorPicker = () => {
    // *** HOOK ***
    const [color, setColor] = useState({
        r: 0,
        g: 0,
        b: 0,
    })
  

    // *** SET COLOR FUNC
    const setColorFunc = (e, colorType) => {
        let inputValue = e.target.value;
        if(inputValue > 255)
            inputValue = 255;

        setColor({...color, r:inputValue})
        switch(colorType){
            case 'r':
                setColor({...color, r:inputValue});
                break;
            case 'g':
                setColor({...color, g:inputValue});
                break;
            case 'b':
                setColor({...color, b:inputValue});
                break;
            default:
                break
        }   
    }
    

    useEffect(()=>{

    },[])
    return(
    <>
        <form style = {{margin: "auto"}}>
            <div style = {{display: 'flex', flexDirection: 'column'}}>
                <div> 
                    <label for = "r">R:</label>
                    <input id = "r" type='number' onChange = {e => setColorFunc(e, 'r')} value = {color.r}/>
                </div>
                <div>
                    <label for = "r">G:</label>
                    <input id = "g" type='number' onChange = {e => setColorFunc(e, 'g')} value = {color.g}/>
                </div>
                <div>
                    <label for = "r">B:</label>
                    <input id = "b" type='number' onChange = {e => setColorFunc(e, 'b')} value = {color.b}/>
                </div>
            </div>
            <div style = {{height: '400px', width: '400px', border: '1px solid black', backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`}}></div>
        </form>
    </>
    )
}
export default ColorPicker