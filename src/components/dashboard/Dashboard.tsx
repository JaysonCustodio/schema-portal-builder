import React, { useCallback, useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { label } from '../../common/color'
import { EntityTab, CenterBody, LeftTab } from '../../components'
import { addCoreEntity } from '../../redux/actions/action.entity';
import { body, container, header, label_status, title, loader } from './style'


const Dashboard: React.FC = () => {
    const { REACT_APP_CORE_SCHEMA_URL } = process.env
    const dispatch = useDispatch()
    const [message, setMessage] = useState('. . . connecting to server')
    const [status, setStatus] = useState('connecting')
    const [schema, setSchema] = useState({})
    const [entity, setEntity] = useState()
  

    const handleEntity = (entity: any) => {
        setEntity(entity)
    }
    const handleSelectSchema = (schema: any) => { 
        setSchema(schema)
    }
    const getCore = useCallback(async () => {
        const { data: { payload = {}, success } } = await axios.get(`${REACT_APP_CORE_SCHEMA_URL}/entities`)
        if (success) setStatus('online')
        if (!success) { 
            setMessage("can't connect to server")
            setStatus('offline')
        }
        dispatch(addCoreEntity(payload.default.Core))
    // eslint-disable-next-line
    },[REACT_APP_CORE_SCHEMA_URL ])

    useEffect(() => {
        getCore()
    }, [getCore])


    return (
        <div style={ container }>
            <div style={ header }>
                <div style={ title }>
                    <h3>SCHEMA BUILDER <span style={label}>1.0</span></h3>
                    { status !== 'online' ? <div style={ loader }>
                        { status === 'connecting' ? <CircularProgress color="success" size={20} /> : <></>}
                        <label style={{ marginLeft: 10 }} htmlFor="">{ message }</label>
                    </div> : <></>}
                </div>
                <span style={{ ...label_status, ...{ color: status === 'online' ? 'green' : 'red'}}}>{  status }</span>
            </div>
            <div style={body}>
                <EntityTab handleSelectSchema={handleSelectSchema} schema={schema} handleEntity={handleEntity} />
                <CenterBody
                    handleEntity={handleEntity}
                    selected_entity={entity}
                />
                <LeftTab/>
            </div>
        </div>
    )
}

export default Dashboard