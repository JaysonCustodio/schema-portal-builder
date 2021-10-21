import React, { useState } from 'react'
import { action_btn, radio } from './style'
import { label, close, save } from '../../common/color'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import './style.scss'


interface EntityFieldProps { 
    field: any
    id: number
    handleRemoveField: (index: number)=> void
}


const EntityField: React.FC<EntityFieldProps> = ({ field, id, handleRemoveField }) => { 
    return (
        <div className="entity-field">
            <div className='input-control'>
                <label htmlFor="" className="label-name" style={label}>name { field?.c }</label>
                <input type="text" className="input-field"/>
            </div>
            <div className='input-control'>
                <label htmlFor="" className="label-name" style={ label }>type</label>
                <select className="input-select">
                    <option value="1"></option>
                        <option value="1">Test</option>
                        <option value="2">Test 2</option>
                </select>
            </div>
            <div className='input-control'>
                <label htmlFor="" className="label-name" style={ label }>validate</label>
                 <select className="input-select">
                        <option value="1"></option>
                        <option value="1">Test</option>
                        <option value="2">Test 2</option>
                </select>
            </div>
            <div className="input-control">
                <label htmlFor="" className="label-name" style={ label }>is nullable</label>
                <div className="radio">
                    <input type="radio" name="gender" style={ radio }/> <label htmlFor="" style={{color: 'white', marginLeft: 5, marginRight: 10}}>true</label>
                    <input type="radio" name="gender" style={ radio }/> <label htmlFor="" style={{color: 'white', marginLeft: 5}}>false</label>
               </div>
            </div>
            <div className="input-control">
                <label htmlFor="" className="label-name" style={ label }>action</label>
                <div className='control-btn'>
                    <button style={{ ...action_btn, ...save }}><CheckIcon sx={{ fontSize:16}}/></button>
                    <button onClick={ ()=> handleRemoveField(id) } style={ {...action_btn, ...close} }><CloseIcon sx={{ fontSize:16}}/></button>
                </div>
            </div>
        </div>
    )
}

export default EntityField