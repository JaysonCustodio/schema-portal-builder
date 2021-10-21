import React from "react";
import { card, d_name, d_data, count } from "./style"


interface IEntityCardProps { 
    name: string
}

export const EntityCard: React.FC<IEntityCardProps> = ({ name }) => { 
    return (
        <div style={ card }>
            <div style={ d_name }>
                <label htmlFor="">{ name }</label>
            </div>
        </div>
    )
}
