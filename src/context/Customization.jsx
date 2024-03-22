import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({})

export const CustomizationProvider = (props) =>{
    const [material,setMaterial] = useState("borovice")
    const [tableWidth,setTableWidth] = useState(100)
    const [tableDepth,setTableDepth] = useState(100)
    const [tableHeight,setTableHeight] = useState(100)
    return <CustomizationContext.Provider 
    value=
    {{ material,setMaterial,
       tableWidth,setTableWidth,
       tableDepth,setTableDepth,
       tableHeight,setTableHeight,
    }}>
        {props.children}
    </CustomizationContext.Provider>
}

export const useCustomization = () =>{
    const context = useContext(CustomizationContext)
    return context
}

