import { Component, useState } from "react";

type Option ={label:string,color:string};

interface Props{
    options:Option[];
    initialOptionPos?:number
}

const ColorPicker =({options,initialOptionPos=1}:Props)=>{
    const [activeOptionIdx,setActiveOptionIdx]=useState(initialOptionPos -1);

   const  setActiveIdx=(index:number)=>setActiveOptionIdx(index)

     const  makeOptionClassNem = (index:number) => {
  
        const optionClasses = ["ColorPicker__option"];
    
        if (index === activeOptionIdx) {
          optionClasses.push("ColorPicker__option--active");
        }
      
        return optionClasses.join(" ");
      };

      const {label}=options[activeOptionIdx];
      return (
        <div className="ColorPicker">
          <h2 className="ColorPicker__title">Color Picker</h2>
          <p>Chosen color : {label}</p>
          <div>
            {options.map(({ label, color }, index) => (
              <button
                key={label}
                className={makeOptionClassNem(index)}
                style={{ backgroundColor: color }}
                onClick={()=>setActiveIdx(index)}
              ></button>
            ))}
          </div>
        </div>
      );
}

    
    

export default ColorPicker;
