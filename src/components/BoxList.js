import React, {useState} from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'


const BoxList = () => {
    const [boxes, setBoxes] = useState([])

    const addBox = (box) => {
        setBoxes(boxes => [...boxes, {...box}])
    }

    return (
        <div>
        <NewBoxForm addBox={addBox}/>
        {boxes.map(b => <Box backgroundColor={b.backgroundColor} width={b.width} height={b.height}/>)}   
        </div>
        
    )
}

export default BoxList