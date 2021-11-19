import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import './style.scss'
import { action_btn } from './style'
import { add, close, label } from '../../common/color'
import { Entity } from '../../class/Entity';
import EntityFieldForm from '../entity-field/EntityFieldForm';
import { EntityField } from '../../class/Fields';
import { addField, removeEntity, updateEntity } from '../../redux/actions/action.entity';

interface EntityFormProps { 
    entity: Entity,
}


const EntityForm: React.FC<EntityFormProps> = ({ entity }) => {
    const dispatch = useDispatch()
    const { id, fields } = entity

    return (
        <div className='entityForm'>
            <div className="entity">
                <div style={{display:'flex', flexDirection:"column"}}>
                    <label htmlFor="" className='e-name' style={ label }>Entity name</label>
                    <input type="text" name="name" className="input-field" id={id} onChange={({ target }: ChangeEvent<HTMLInputElement>) => dispatch(updateEntity({name: target.value, entity}))  }/>
                </div>
                <div>
                    <button style={{...action_btn, ...add} } onClick={ () => dispatch(addField(entity))}><AddIcon /></button>
                    <button style={{ ...action_btn, ...close }} onClick={ ()=> dispatch(removeEntity(entity)) }><CloseIcon /></button>
                </div>
            </div>
            <div>
            {
                    fields?.map((field: EntityField) => {
                        return <EntityFieldForm field={field} key={field.id} entity={ entity }/>
                })
            }
           </div>
        </div>
    )
}
export default EntityForm