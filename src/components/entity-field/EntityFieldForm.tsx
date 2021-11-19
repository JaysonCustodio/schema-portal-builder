import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

import { removeField, updateField } from '../../redux/actions/action.entity';
import { label, close,  } from '../../common/color'
import { EntityField } from '../../class/Fields';
import { Entity } from '../../class/Entity';
import { container } from './style'
import './style.scss'



interface EntityFieldProps { 
    field: EntityField
    entity: Entity
}



const EntityFieldForm: React.FC<EntityFieldProps> = ({ field, entity }) => {
    const dispatch = useDispatch()
    const [isFk, setIsFk] = useState(false)

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { target: { name, value } } = e
        dispatch(updateField({
            name,
            value,
            field_id: field.id,
            entity
        }))
    }

    // eslint-disable-next-line
    useEffect(() => {
        dispatch(updateField({
            name: 'is_fk',
            value: isFk,
            field_id: field.id,
            entity
        }))
    // eslint-disable-next-line
    }, [isFk])
    
    return (
        <div style={container}>
            <div className="entity-field">
                <div className='input-control'>
                    <div className="center">
                        <label htmlFor="" className="label-name" style={label}>name</label>
                        <input type="text" className="input-field" name="name" onChange={ handleChangeValue }/>
                    </div>
                </div>
                <div className='input-control'>
                    <div className="center">
                        <label htmlFor="" className="label-name" style={label}>value</label>
                        <input
                            type="text"
                            className="input-field"
                            name="value"
                            onChange={handleChangeValue} />
                    </div>
                </div>
                  <div className='input-control'>
                    <div className="center">
                        <label htmlFor="" className="label-name" style={ label }>type</label>
                        <select className="input-select" name="type" onChange={ handleChangeValue }>
                            <option value=""></option>
                            <option value="string">string</option>
                            <option value="number">number</option>
                            <option value="string[]">string[]</option>
                            <option value="number[]">number[]</option>
                    </select>
                    </div>
                </div>
                <div className='input-control'>
                    <div className="center">
                        <label htmlFor="" className="label-name" style={ label }>gql type</label>
                        <select className="input-select" name="gql_type" onChange={ handleChangeValue }>
                            <option value=""></option>
                            <option value="String">String</option>
                            <option value="Float">Float</option>
                            <option value="Int">Int</option>
                            <option value="[String]">[String]</option>
                            <option value="[Float]">[Float]</option>
                            <option value="[Int]">[Int]</option>
                    </select>
                    </div>
                </div>
                <div className='input-control'>
                    <div className="center">
                        <label htmlFor="" className="label-name" style={ label }>validate type</label>
                        <select className="input-select" name="validate_type" onChange={ handleChangeValue }>
                                <option value=""></option>
                                <option value="string">string</option>
                                <option value="number">number</option>
                                <option value="uuid">uuid</option>
                                <option value="email">email</option>
                                <option value="phone number">phone number</option>
                                <option value="string[]">string[]</option>
                                <option value="number[]">number[]</option>
                                <option value="uuids[]">uuid[]</option>
                                <option value="emails[]">email[]</option>
                                <option value="phone numbers[]">phone number[]</option>
                        </select>
                    </div>
                </div>
                <div className="input-control">
                    <div className="center">
                        <label htmlFor="" className="label-name" style={ label }>nullable</label>
                        <select className="input-select" name="nullable" onChange={ handleChangeValue }>
                                <option value=""></option>
                                <option value="true">true</option>
                                <option value="false">false</option>
                                <option value="itemsAndList">itemsAndList</option>
                        </select>
                    </div>
                </div>
                <div className='input-control'  style={{ display : isFk ? 'flex' : 'none'}}>
                        <div className="center">
                            <label htmlFor="" className="label-name" style={label}>class name</label>
                            <input type="text" className="input-field" name="relationship_class_name" onChange={ handleChangeValue }/>
                        </div>
                </div>
                <div className='input-control'  style={{ display : isFk ? 'flex' : 'none'}}>
                        <div className="center">
                            <label htmlFor="" className="label-name" style={label}>class entity</label>
                            <input type="text" className="input-field" name="relationship_class_entity" onChange={ handleChangeValue } required/>
                        </div>
                </div>
                <div className="input-control">
                  <label htmlFor="" className="label-name" style={label}>FK</label>
                  <input type="checkbox" id="fk" name="is_fk" onClick={()=> setIsFk(!isFk)}/>
                </div>
                
            </div>
            <div className="btn-div">
                <button onClick={() => dispatch(removeField(entity, field.id))} style={{ backgroundColor: "transparent", border: "none", ...close }}><CloseIcon sx={{ fontSize:24}}/></button>
            </div>
        </div>
    )
}

export default EntityFieldForm