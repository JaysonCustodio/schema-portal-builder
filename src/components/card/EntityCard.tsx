import React from "react";
import { card, d_name } from "./style"


interface IEntityCardProps { 
    name: string,
    entity: any,
    handleEntity: (entity:any) => void
}

export const EntityCard: React.FC<IEntityCardProps> = ({ name, entity, handleEntity }) => {
    return (
        <div className='hide-scrollbar' style={card} onClick={() => handleEntity({...entity, enitity_name : name }) }>
            <div style={ d_name }>
                <label htmlFor="">{ name }</label>
            </div>
        </div>
    )
}
