import React from "react"
import { useSelector } from "react-redux"
import { EntityForm } from '..'
import { Entity } from "../../class/Entity"
import SelectedEntity from "../selectedEntity/SelectedEntity"
import { field_div } from "./style"

interface CenterBodyProps {
    selected_entity: any,
    handleEntity: (entity: any) => void,
 }

const CenterBody: React.FC<CenterBodyProps> = ({ handleEntity, selected_entity }) => { 
    
    const store_entities = useSelector((state: any) => state.allEntity.entities)


    return (
        <div className='hide-scrollbar' style={ field_div }>
            <div>
                {
                 store_entities.map((e: Entity, index: number) => {
                    return <EntityForm
                        entity={e}
                        key={index}
                    />
                })
            }
            </div>
            <div>
                {
                    selected_entity && <SelectedEntity entity={selected_entity} handleSaveClose={ handleEntity } />
                }
            </div>
        </div>
    )
}

export default CenterBody