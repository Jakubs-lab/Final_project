import { useCustomization } from "../context/Customization"
import React from "react";



  
    
    const Configurator = () =>{
    const {material,setMaterial,tableWidth,setTableWidth,tableDepth,setTableDepth,tableHeight,setTableHeight,} = useCustomization()
    
        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "858c1ee4-e959-4d07-bea9-658d85a70312");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
      
    
   return(
        
    <div className="configurator">
        <div className="configurator_section">
        <h2 className="configurator_section_title">ROZMĚRY STOLU</h2>
            <div className="slidecontainer">
                <output name="message" required>Šířka stolu: {tableWidth} cm</output>
                <input  type="range" min="70" max="200" value={tableWidth} onChange={(e) => setTableWidth(e.target.value)} className="width"/>
            </div>
            <div className="slidecontainer">
                <output>Hloubka stolu: {tableDepth} cm</output>
                <input  type="range" min="40" max="140" value={tableDepth} onChange={(e) => setTableDepth(e.target.value)} className="width"/>
            </div>
            <div className="slidecontainer">
                <output>Výška stolu: {tableHeight} cm</output>
                <input  type="range" min="50" max="90" value={tableHeight} onChange={(e) => setTableHeight(e.target.value)} className="width"/>
            </div>
            <h2 className="configurator_section_title">DRUH DŘEVA</h2>
            <div className="configurator_section_values">
                <div className={`item ${material === "Dub" ? "item--active" : ""}`} onClick={() => setMaterial('Dub')}>
                    <div className="item_label">Dub
                        </div>
                    </div>
                <div className={`item ${material === "Borovice" ? "item--active" : ""}`} onClick={() => setMaterial('Borovice')}>
                    <div className="item_label">Borovice
                    </div>
                </div>
                
                </div>
                <form className="configurator_form" onSubmit={onSubmit}>
                    <h2>Objednávka stolu</h2>
                <input type="hidden" name="access_key" value="858c1ee4-e959-4d07-bea9-658d85a70312"></input>
                    

                    
                    <input type="hidden" name="subject" value="Nová objednávka"/>
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
                    <textarea readOnly  className="configurator_textarea" name="message"  value={`Šířka stolu : ${tableWidth}cm Hloubka stolu : ${tableDepth}cm Výška stolu : ${tableHeight}cm Druh dřeva : ${material}`}>
                        
                    </textarea>
                    <button  type="submit" className="configurator_button_submit">Poslat požadavek</button>
                </form>
                <span>{result}</span>


        </div>
    </div>
   )
}


export default Configurator