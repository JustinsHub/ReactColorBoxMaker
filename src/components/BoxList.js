import React, {useState} from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'


const BoxList = () => {
    const [boxes, setBoxes] = useState([])

    return (
        <div>
        <NewBoxForm/>
        {boxes.map(b => <Box backgroundColor={b.backgroundColor} width={b.width} height={b.height}/>)}   
        </div>
        
    )
}

export default BoxList