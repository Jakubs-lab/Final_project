import { useCustomization } from "../context/Customization"
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { normalize } from "three/src/math/MathUtils";




/*<div className="configurator_section_values">
<div name="material" className={`item ${material === "Dub" ? "item--active" : ""}`} onClick={() => setMaterial('Dub')}>
         <div className="item_label">Dub
             </div>
         </div>
     <div className={`item ${material === "Borovice" ? "item--active" : ""}`} onClick={() => setMaterial('Borovice')}>
         <div className="item_label">Borovice
         </div>
     </div>
    
     </div>
*/
  
    
    const Configurator = () =>{
    const {material,setMaterial,tableWidth,setTableWidth,tableDepth,setTableDepth,tableHeight,setTableHeight,} = useCustomization()
    
            const form = useRef();
            const sendEmail = (e) => {
                e.preventDefault();
        
                
                emailjs.sendForm('service_551e6cz', 'template_x8zq1we', form.current, {
                    publicKey: 'gUgZtTRsZ2gpcWrvr',
                })
                .then(
                    () => {
                    console.log('SUCCESS!');
                    },
                    (error) => {
                    console.log('FAILED...', error.text);
                    },
                );
          };

        const onSelect = () =>{
            const e = document.querySelector(".texture")
            const value = e.options[e.selectedIndex].value;
            

            return setMaterial(value)

        }
            
            

            
          
            
            
          
          
    
   return(
   
                <form ref={form} className="configurator_form" onSubmit={sendEmail}>
                    
                
            
                                    <div className="configurator">
                                        <h1>Objednávka stolu</h1>
                        <div className="configurator_section">
                        <h2 className="configurator_section_title">ROZMĚRY STOLU</h2>

                            <div className="slidecontainer">
                                <output name="message" required>Šířka stolu: {tableWidth} cm</output>
                                <input name="width" type="range" min="70" max="200" value={tableWidth} onChange={(e) => setTableWidth(e.target.value)} className="width"/>
                            </div>
                            <div className="slidecontainer">
                                <output>Hloubka stolu: {tableDepth} cm</output>
                                <input name="depth" type="range" min="40" max="140" value={tableDepth} onChange={(e) => setTableDepth(e.target.value)} className="width"/>
                            </div>
                            <div className="slidecontainer">
                                <output>Výška stolu: {tableHeight} cm</output>
                                <input name="height"  type="range" min="50" max="90" value={tableHeight} onChange={(e) => setTableHeight(e.target.value)} className="width"/>
                            </div>
                            <h2 className="configurator_section_title">DRUH DŘEVA</h2>
                           
                            <select onChange={() => onSelect()} className="texture"  name="material" >
                                    <option   value={"borovice"}>Borovice</option>
                                    <option   value={"dub"}>Dub</option>
                            </select>

                            <h2>Údaje pro objednávku</h2>
                            
                                    
                                    <label  className="configurator_input_label" >Jméno 
                                        <input className="configurator_input" type="text" name="name" required  />
                                    </label>

                                    <label className="configurator_input_label" >Příjmení
                                        <input className="configurator_input" type="text"  name="surename" required />
                                    </label>

                                    <label className="configurator_input_label" >Email
                                        <input className="configurator_input email" type="email" name="email" required />
                                    </label>

                                    <label className="configurator_input_label" >Telefoní číslo
                                        <input className="configurator_input" type="phone" name="phone_number" />
                                    </label>
                    <div readOnly  className="configurator_textarea" name="message"  >
                        <p name="width">Šířka stolu : {tableWidth}cm</p>
                        <p>Hloubka stolu : {tableDepth}cm</p>
                        <p>Výška stolu : {tableHeight}cm</p>
                        <p>Druh dřeva : {material}</p>
                    </div>
                    </div>
    
                    <button  type="submit" className="configurator_button_submit">Poslat požadavek</button>
                    </div>
                </form>
                


        
   )
}


export default Configurator