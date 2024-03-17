import { useCustomization } from "../context/Customization"



  
    
    const Configurator = () =>{
    const {material,setMaterial,tableWidth,setTableWidth,tableDepth,setTableDepth,tableHeight,setTableHeight,} = useCustomization()
    
      
    
   return(
        
    <div className="configurator">
        <div className="configurator_section">
        <h2 className="configurator_section_title">ROZMĚRY STOLU</h2>
            <div className="slidecontainer">
                <output>Šířka stolu: {tableWidth} cm</output>
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

        </div>
    </div>
   )
}


export default Configurator