
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getallProperties } from '../../redux/actions/index'
import Card from '../Card/Card'


export default function Home(){
const Dispatch = useDispatch()
const properties = useSelector(state => state.properties)


useEffect(()=> {
Dispatch(getallProperties())
},[Dispatch])


const [currentPage, setCurrentPage] = useState(1);
const [propertiesPage, setPropertiesPage] = useState(5);

const indexOfLastProperties = currentPage * propertiesPage;
const indexOfFirstProperties = indexOfLastProperties - propertiesPage;
const currentProperties = properties.slice(indexOfFirstProperties,indexOfLastProperties)

return(
<div>
{
    currentProperties?.map((el)=>{
        return(
            <Card
            descripcion={el.descripcion}
            propiedades={el.propiedades}
            />
        )
    })
}
    
</div>

)



}