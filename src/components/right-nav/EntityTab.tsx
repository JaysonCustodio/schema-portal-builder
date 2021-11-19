import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SchemaIcon from '@mui/icons-material/Schema';
import {
    button,
    div_db,
    entity_tab,
    label,
    schemas,
    label_entity,
    div_entity, db,
    db_icon,
    db_label,
    entity_label,
    arrow,
    tab_hide
} from "./style"
import { EntityCard } from "../card/EntityCard"
import { Entity } from '../../class/Entity';
import { Database } from "../database/Database";
import { createEntity } from "../../redux/actions/action.entity";

interface EntityTabProps { 
    schema: any,
    handleEntity: (entity: any) => void,
    handleSelectSchema: (schema: any) => void
}

const EntityTab: React.FC<EntityTabProps> = ({ handleSelectSchema, schema, handleEntity }) => { 
    const core_entities = useSelector((state: any) => state.coreEntites)
    const [show, setShow] = useState(true)
    const dispatch = useDispatch()
    const handleShow = () => {
        setShow(!show ? true : false)
    }
    
    
    return (
        <div style={show ? entity_tab : tab_hide}>
            <button onClick={() => dispatch(createEntity(new Entity()))} style={{ ...button, ...{ display : show ? 'block' : 'none' } } }>ADD ENTITY</button>
            <div style={div_db} className='hide-scrollbar'>
                <div style={{ ...db, flexDirection: show ? "row" : 'column-reverse' } }>
                    <div style={ db_label }>
                        <label style={{ ...label, ...{ display : show ? 'block' : 'none' } }}>DATABASE</label>
                        <StorageRoundedIcon style={show ? {} : {marginTop: 30}}sx={ db_icon }/>
                    </div>
                    <div onClick={() => handleShow()}>
                        { show ?  <KeyboardArrowLeftIcon sx={ arrow } /> : <KeyboardArrowRightIcon sx={ arrow } />}
                    </div>
                </div>
                <div style={{ display: show ? 'block' : 'none' }}>
                    <Database db={core_entities} name={'Core'} handleSelectSchema={  handleSelectSchema }/>
                </div>
           </div>
            <div style={div_entity}>
                <div style={ entity_label }>
                    <label htmlFor="" style={{...label_entity, ...{ display : show ? 'block' : 'none' }}}>ENTITIES</label>
                    <SchemaIcon sx={ db_icon }/>
                </div>
                <div className='hide-scrollbar' style={{...schemas, ...{ display : show ? 'block' : 'none' }} }>
                    {
                    Object.keys(schema).map((e: string, index: number ) => { 
                        return <EntityCard name={e} key={index} entity={schema[e]} handleEntity={ handleEntity }/>
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default EntityTab