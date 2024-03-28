import { useCustomization } from "../context/Customization"
import React, { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

const Configurator = () => {
    const { material, setMaterial, tableWidth, setTableWidth, tableDepth, setTableDepth, tableHeight, setTableHeight } = useCustomization();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const formRef = useRef(null);

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!formSubmitted) {
            try {
                await emailjs.sendForm('service_551e6cz', 'template_x8zq1we', formRef.current, {
                    publicKey: 'gUgZtTRsZ2gpcWrvr',
                });
                console.log('Email sent successfully!');
                setFormSubmitted(true);
            } catch (error) {
                console.error('Failed to send email:', error);
            }
        }
    };

    useEffect(() => {
        submitAnimation();
    }, [formSubmitted]);

    
    const submitAnimation = () => {
        let button = document.querySelector('.configurator_button_submit');
        let buttonText = document.querySelector('.tick');
        let formInputs = document.querySelectorAll('.configurator_input');
    
        const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";
    
        // Convert NodeList to array
        formInputs = Array.from(formInputs);
    
        // Function to check if all inputs are filled
        const allInputsFilled = () => {
            return formInputs.every(input => input.value.trim() !== ""); // Check if all inputs are not empty
        };
    
        // Check if all inputs are filled and the form is submitted
        if (allInputsFilled() && formSubmitted) {
            // Toggle button text and class
            if (buttonText.innerHTML === "Odeslat") {
                button.classList.toggle('button__circle');
                buttonText.innerHTML = tickMark;
            }
        }
    };
    const onSelect = () =>{
        const e = document.querySelector(".texture")
        const value = e.options[e.selectedIndex].value;
        

        return setMaterial(value)

    }

          
          
    
   return(
   
                <form ref={formRef} onSubmit={sendEmail} className="configurator_form" >
                    
                
            
                                    <div className="configurator">
                                        <h1>Objednávka stolu</h1>
                        <div className="configurator_section">
                        

                            <div className="slidecontainer">
                                <output name="message" required>Šířka stolu: {tableWidth} cm</output>
                                <input name="width" type="range" min="70" max="200"value={tableWidth} onChange={(e) => setTableWidth(e.target.value)} className="width"/>
                            </div>
                            <div className="slidecontainer">
                                <output>Hloubka stolu: {tableDepth} cm</output>
                                <input name="depth" type="range" min={"50"} max={"90"}value={tableDepth} onChange={(e) => setTableDepth(e.target.value)} className="width"/>
                            </div>
                            <div className="slidecontainer">
                                <output>Výška stolu: {tableHeight} cm</output>
                                <input name="height"  type="range" min={"50"} max={"80"}value={tableHeight} onChange={(e) => setTableHeight(e.target.value)} className="width"/>
                            </div>
                            <label className="configurator_section_title_texture">Druh dřeva :

                           
                                <select onChange={() => onSelect()} className="texture"  name="material" >
                                        <option  value={"borovice"}> Borovice</option>
                                        <option   value={"dub"}>Dub</option>
                                </select>
                            </label>
                        </div>
                            <h1>Údaje pro objednávku</h1>
                                                    
                                    <label  className="configurator_input_label" > 
                                        <input placeholder="Jméno" className="configurator_input" type="text" name="name" required  />
                                    </label>

                                    <label  className="configurator_input_label" >
                                        <input placeholder="Příjmení" className="configurator_input" type="text"  name="surename" required />
                                    </label>

                                    <label className="configurator_input_label" >
                                        <input placeholder="Email" className="configurator_input email" type="email" name="email" required />
                                    </label>

                                    <label className="configurator_input_label" >
                                        <input placeholder="Telefoní číslo"  className="configurator_input" type="phone" name="phone_number" required />
                                    </label>
                                    <div className="form_recap">
                                        <div readOnly  className="configurator_textarea" name="message"  >
                                            <h2>Shrnutí objednávky</h2>
                                            <p>Šířka stolu : {tableWidth}cm</p>
                                            <p>Hloubka stolu : {tableDepth}cm</p>
                                            <p>Výška stolu : {tableHeight}cm</p>
                                            <p>Druh dřeva : {material}</p>
                                    </div>
                    
                    <button  type="submit"  className="configurator_button_submit" disabled={formSubmitted}>
                            <div className="box">
                                <div  className="tick">Odeslat</div>
                            </div>
                        
                        </button>
                    </div>
                </div>
                </form>
                


        
   )
}


export default Configurator