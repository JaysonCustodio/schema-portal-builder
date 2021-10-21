import React, { useEffect, useState } from "react"
import { IEntity } from "../../types/types"
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
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SchemaIcon from '@mui/icons-material/Schema';
import { EntityCard } from "../card/EntityCard"
import { Database } from "../database/Database";

interface EntityTabProps { 
    database: any,
    schema: any,
    handleAdd: (entity: IEntity) => void,
    handleSelectSchema: (schema: any) => void
}

const EntityTab: React.FC<EntityTabProps> = ({ database, handleAdd, handleSelectSchema, schema }) => { 
    const [databases, setDatabases]: any = useState([])
    const [show, setShow] = useState(true)
    const handleShow = () => { 
        setShow(!show ? true : false)
    }
    const handlePress = () => { 
        handleAdd({
            name: "",
            fields: []
        })
    }
    useEffect(() => { 
       const new_db = Object.keys(database)
        setDatabases(new_db)        
    }, [database])

    return (
        <div style={show ? entity_tab : tab_hide}>
            <button onClick={() => handlePress()} style={{ ...button, ...{ display : show ? 'block' : 'none' } } }>add entity</button>
            <div style={div_db}>
                <div style={{ ...db, flexDirection: show ? "row" : 'column-reverse' } }>
                    <div style={ db_label }>
                        <label style={{ ...label, ...{ display : show ? 'block' : 'none' } }}>DATABASE</label>
                        <StorageRoundedIcon style={show ? {} : {marginTop: 30}}sx={ db_icon }/>
                    </div>
                    <div onClick={() => handleShow()}>
                        { show ?  <KeyboardArrowLeftIcon sx={ arrow } /> : <KeyboardArrowRightIcon sx={ arrow } />}
                    </div>
                </div>
                <div style={ { display : show ? 'block' : 'none' }}>
                    {databases.map((name: string, index: number) => { 
                        return <Database db={database[name]} name={name} key={index} handleSelectSchema={  handleSelectSchema }/>
                    })}
                </div>
           </div>
            <div style={div_entity}>
                <div style={ entity_label }>
                    <label htmlFor="" style={{...label_entity, ...{ display : show ? 'block' : 'none' }}}>ENTITIES</label>
                    <SchemaIcon sx={ db_icon }/>
                </div>
                <div style={{...schemas, ...{ display : show ? 'block' : 'none' }} }>
                    {
                    Object.keys(schema).map((e: string, index: number ) => { 
                        return <EntityCard name={e} key={ index }/>
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default EntityTab