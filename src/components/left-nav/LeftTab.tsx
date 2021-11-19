import React, { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CircularProgress from '@mui/material/CircularProgress';
import { Alert, Snackbar } from "@mui/material";
import axios from "axios"

import { addCoreEntity } from "../../redux/actions/action.entity";
import { Entity } from "../../class/Entity"
import { button } from "../right-nav/style"
import Dummy from "../dummy/Dummy";
import EntitySchema from "../schema/Schema"
import './style.scss'



const LeftTab: React.FC = () => {
    const { REACT_APP_CORE_SCHEMA_URL } = process.env
    const store_entities = useSelector((state: any) => state.allEntity.entities)
    const [disable, setDisable] = useState(false)
    const [version, setVersion] = useState('v1')
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const [severity, setSeverity] : any = useState('success')
    const [message, setMessage]: any = useState(' ')
        const exist_versions = useSelector((state: any) => {
        const cores = Object.keys(state.coreEntites)
        const vers = cores.map(e => {
            return e?.split('_')[1]
        })
        return vers
    })
    const handleChangeValue = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { target: { value } } = e        
        setVersion(value)
    }
    const click = async () => {
        setDisable(true)
        if (!exist_versions.includes(version)) {
            const { data: success } = await axios.post(`${REACT_APP_CORE_SCHEMA_URL}/schemas`, {
                schemas: store_entities,
                version
            })
            if (success) {
                setSeverity('success')
                setMessage('Schema generated succesfully!')
                setShow(true)
                setDisable(false)
                const { data: { payload = {} } } = await axios.get(`${REACT_APP_CORE_SCHEMA_URL}/entities`)
                dispatch(addCoreEntity(payload.default.Core))
            }
        } else {
            setSeverity('warning')
            setMessage('schema version already exist')
            setShow(true)
            setDisable(false)
        }
     
    }
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') return;
        setShow(false);
    };

    return (
        <div className="container">
            <Snackbar open={show} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{ vertical:'top', horizontal:'right'}}>
                <Alert onClose={handleClose} severity={ severity } sx={{ width: '100%' }}>
                    { message }
                </Alert>
            </Snackbar>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                margin: 2
            }}>
                <label htmlFor="" style={{
                    color: 'white',
                    fontSize: 13,
                    marginRight: 5,
                    fontWeight: "bold"
                }}>schema version : </label>
                <select
                    className="input-select"
                    onChange={ handleChangeValue }
                    name="gql_type"
                    style={{
                    maxWidth: 50,
                    minHeight: 40,
                    background: 'transparent',
                    color: '#1acad6',
                    fontSize: 15,
                    fontWeight: "bolder"
                }}>
                    <option value="v1" style={{
                        border: 'none',
                        borderBlockColor: "red"
                    }}>v1</option>
                            <option value="v2">v2</option>
                            <option value="v3">v3</option>
                            <option value="v4">v4</option>
                            <option value="v5">v5</option>
                            <option value="v6">v6</option>
                            <option value="v7">v7</option>
                            <option value="v8">v8</option>
                            <option value="v9">v9</option>
                    </select>
            </div>
            <button style={button} onClick={() => click()} disabled={ disable }>GENERATE SCHEMA</button>
            {
                disable ? <div style={{
                fontSize: 13,
                display: 'flex',
                padding: 10,
                justifyContent:"center",
                alignItems: 'center',
                color: 'white'
            }}>
                . . . . generating  <CircularProgress color="success" size={20} style={{marginLeft:10}} />
            </div> : <Dummy />
            }
            <div className='lefttab hide-scrollbar'>
                {
                    store_entities?.map((e: Entity) => {
                        return <EntitySchema entity={e} key={ e.id }/>
                    })
                }
            </div>
       </div>
    )
}

export default LeftTab