import React, { useState } from "react"
import { ul_db } from "../right-nav/style"
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import { db_div, off_icon, on_icon, sub_db, sub_name } from "./style";

interface IDatabaseProps {
    db: any,
    name: string,
    handleSelectSchema: (schema: any) => void
 }

export const Database: React.FC<IDatabaseProps> = ({ db, name, handleSelectSchema }) => { 
    const [isSelected, setIsSelected] = useState(false)
    const handleSelect = () => { 
        setIsSelected(!isSelected)
    }
    return (
        <div>
            <div style={db_div} onClick={() => handleSelect() }>
                <ul style={ul_db} >{name}</ul>
                <HorizontalRuleRoundedIcon sx={ isSelected ? on_icon : off_icon }/>
            </div>
            <div style={ sub_db }>
                {
                    isSelected && Object.keys(db).map((sub : string, index: number ) => { 
                        return <ul style={ sub_name } key={index} onClick={ ()=> handleSelectSchema(db[sub]) } >{ sub }</ul>
                    })
                }
            </div>
       </div>
    )
}