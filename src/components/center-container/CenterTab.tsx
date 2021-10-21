import React from "react"
import { EntityForm } from '../../components'
import { IEntity } from "../../types/types"
import { field_div } from "./style"

interface CenterBodyProps {
    entities: IEntity[] | undefined, 
    handleSaveEntity: () => void,
    handleRemoveEntity: (entity: any) => void
 }


const handleSave = () => { 
    
}
const CenterBody: React.FC<CenterBodyProps> = ({ entities, handleSaveEntity, handleRemoveEntity }) => { 
    
    return (
        <div className='center-body' style={ field_div }>
            {
                entities?.map((e: any, index: number) => {
                    return <EntityForm entity={e} handleDelete={handleRemoveEntity} handleSave={handleSaveEntity} key={ index } id={ index }/>
                })
            }
        </div>
    )
}

export default CenterBody