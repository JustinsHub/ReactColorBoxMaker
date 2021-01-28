import React, {useState} from 'react'

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        backgroundColor: "",
        width: "",
        height: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(formData => ({...formData, [name]:value}))
        // console.log(`Our [name] key: ${name}, our value changes: ${value}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addBox({...formData})
        setFormData(INITIAL_STATE)
    }
    
    return (
        <div className="NewBoxForm">
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="backgroundColor">Background Color:</label>
                <input 
                id="backgroundColor"
                type="text" 
                name="backgroundColor"
                placeholder="What color do you want?"
                value={formData.backgroundColor}
                onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="width">Width: </label>
                <input 
                id="width"
                type="number"
                name="width"
                placeholder="Pick a width number"
                value={formData.width}
                onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="height">Height: </label>
                <input 
                id="height"
                type="number"
                name="height"
                placeholder="Pick a height number"
                value={formData.height}
                onChange={handleChange}
                />
                </div>
                <div>
                    <button>Create Box</button>
                </div>
            </form>
        </div>
    )
}

export default NewBoxForm