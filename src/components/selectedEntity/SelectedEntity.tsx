import React from "react"
import { entity_label, entity_div, field_div, field, field_container } from "./style";
import CloseIcon from '@mui/icons-material/Close';
import { action_btn } from "../entity-field/style";
import { close } from "../../common/color";

interface ISelectedEntityProps { 
    entity: any,
    handleSaveClose: (entity: any) => void
}

const SelectedEntity: React.FC<ISelectedEntityProps> = ({ entity, handleSaveClose }) => {    
    return (
        <div style={ entity_div }>
            <div style = {{ padding: 5,display: "flex" , alignItems:"center", justifyContent:"space-between"}}>
                <label htmlFor="" style={entity_label}> {entity.enitity_name}</label>
                <button onClick={() => handleSaveClose(undefined) }  style={ {...action_btn, ...close} }><CloseIcon sx={{ fontSize:24}}/></button>
           </div>
            <div style={ field_container }>
                <label style={{color : "#1acad6", fontSize: 13}} htmlFor="">fields</label>
                <div style={ field_div }>
                    {
                        Object.keys(entity).map((f: any, index: number) => {
                            if (f !== "enitity_name") { 
                                 return ( <div style={field} key={ index }>{ f }</div>)
                            }
                            return (<></>)
                        })
                     }
                </div>
            </div>
        </div>
    )
}

export default SelectedEntity