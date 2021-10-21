import React, { useEffect, useState } from 'react'
import { label } from '../../common/color'
import { EntityTab, CenterBody, LeftTab } from '../../components'
import { IEntity } from '../../types/types'
import CircularProgress from '@mui/material/CircularProgress';
import { body, container, header, label_status, title, loader } from './style'
import { getConfig } from "../../api/service/platform"

const Dashboard: React.FC = () => { 
    const [message, setMessage] = useState('. . . connecting to server')
    const [status, setStatus] = useState('connecting')
    const [data, setData] = useState({})
    const [schema, setSchema] = useState({})

    const getSystemConfig = async () => {
        const { success = false, payload = {} } : any = await getConfig()        
        if (success) { 
            setData({ ...data, ...payload })
            setStatus('online')
        }
        if (!success) { 
            setMessage("can't connect to server")
            setStatus('offline')
        }
    }
    const [entities, setEntities] : any = useState([])
    const handleAdd = (new_entity: any) => { 
        setEntities([...entities, new_entity])
    }
    const handleSaveEntity = () => {         
    }
    const handleRemoveEntity = (index: number) => { 
        const new_entities = entities
        new_entities.splice(index, 1)
        setEntities([...new_entities])
    }
    const handleSelectSchema = (schema: any) => { 
        setSchema(schema)
    }
    
    useEffect(() => { 
        getSystemConfig()
    }, [])


    return (
        <div style={ container }>
            <div style={ header }>
                <div style={ title }>
                    <h3>SCHEMA BUILDER <span style={label}>1.0</span></h3>
                    { status !== 'online' ? <div style={ loader }>
                        { status == 'connecting' ? <CircularProgress color="success" size={20} /> : <></>}
                        <label style={{ marginLeft: 10 }} htmlFor="">{ message }</label>
                    </div> : <></>}
                </div>
                <span style={{ ...label_status, ...{ color: status === 'online' ? 'green' : 'red'}}}>{  status }</span>
            </div>
            <div style={body}>
                <EntityTab database={data} handleAdd={handleAdd} handleSelectSchema={handleSelectSchema} schema={ schema }/>
                <CenterBody entities={entities as IEntity[]} handleSaveEntity={handleSaveEntity} handleRemoveEntity={ handleRemoveEntity }/>
                <LeftTab />
            </div>
        </div>
    )
}

export default Dashboard