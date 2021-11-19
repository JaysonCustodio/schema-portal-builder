import React from "react"
import { Entity } from "../../class/Entity"
import { EntityField } from "../../class/Fields"
import './style.scss'

interface IEntitySchemaProps {
    entity: Entity
}

const EntitySchema: React.FC<IEntitySchemaProps> = ({ entity }) => {
    const { entity_name, fields = [] } = entity
    return (
        <div className="entity_container">
            <label htmlFor="" style={{fontWeight:"bold", letterSpacing: 1}}> {entity_name}_entity :</label>
            <div>
                <p style={{color: "#1acad6"}}>[</p>
                    {
                        fields.map((field: EntityField) => {
                            return <div className="field_div" key={ field.id }>
                                        <p>&#123;</p>
                                        <div>
                                            <label htmlFor="">name : </label> 
                                            <p>"{ field.name || ""}"</p> 
                                        </div>
                                        <div>
                                            <label htmlFor="">value : </label>
                                            <p>"{ field.value || ""}"</p>
                                        </div>
                                        <div>
                                            <label htmlFor="">type : </label>
                                            <p>"{ field.type || ""}"</p>
                                        </div>
                                        <div>
                                            <label htmlFor="">gql_type : </label>
                                            <p>"{ field.gql_type || ""}"</p>
                                        </div>
                                        <div>
                                            <label htmlFor="">nullable : </label>
                                            <p> { field.nullable || "false"} </p>
                                        </div>
                                        <div>
                                            <label htmlFor="">validate_type : </label>
                                            <p>"{ field.validate_type || ""}"</p>
                                        </div>
                                        <div>
                                            <label htmlFor="">is_fk : </label>
                                            <p>{ field.is_fk ?  'true' : 'false' }</p>
                                        </div>
                                        <div>
                                            <label htmlFor="">class_name : </label>
                                            <p>"{ field.relationship_class_name || ""}"</p>
                                        </div>
                                        <div>
                                            <label htmlFor="">class_entity : </label>
                                            <p>"{ field.relationship_class_entity || ""}"</p>
                                        </div>
                                        <p>&#125;,</p>
                                    </div>
                       })
                    }
                <p style={{color: "#1acad6"}}>]</p>
            </div>
        </div>
    )
}

export default EntitySchema