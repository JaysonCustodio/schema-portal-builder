import React, { useEffect, useState } from 'react'
import { IEntity } from '../../types/types'
import EntityField from "../entity-field/EntityField"
import AddIcon from '@mui/icons-material/Add';
import { action_btn } from './style'
import { add, close, label, save } from '../../common/color'
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import './style.scss'

interface EntityFormProps { 
    id: number,
    entity: IEntity,
    handleSave: () => void,
    handleDelete: (entity: any) => void,
}


const EntityForm: React.FC<EntityFormProps> = ({ entity, handleDelete, handleSave , id }) => {

    const [data, setData] : any = useState(entity)

    const handleAddField = () => { 
        const new_data = {
            ...data,
            fields: [...data.fields, {
                name: 'id',
                value: '',
                type: 'String',
            }]
        }
        setData(new_data)        
    }

    const removeField = (index: number) => { 
        const new_fields = data.fields        
        new_fields.splice(index, 1)
        setData({
            ...data,
            fields: [...new_fields]
        })
        
    }

    

    return (
        <div className='entityForm'>
            <div className="entity">
                <div className="input-control test">
                    <label htmlFor="" className='e-name' style={ label }>Entity name</label>
                    <input type="text" name="name" className="input-field" />
                </div>
                <div>
                    <button style={{...action_btn, ...add} } onClick={ () => handleAddField() }><AddIcon /></button>
                    <button style={{ ...action_btn, ...save }} onClick={ ()=> handleSave() }><CheckIcon /></button>
                    <button style={{ ...action_btn, ...close }} onClick={ ()=> handleDelete(id) }><CloseIcon /></button>
                </div>
            </div>
            <div>
            {
                data.fields.map((field: any, index:number) => { 
                    return <EntityField handleRemoveField={ removeField} field={field} key={index} id={ index }/>
                })
            }
           </div>
        </div>
    )
}
export default EntityForm