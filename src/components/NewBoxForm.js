import React, {useState} from 'react'

const NewBoxForm = () => {
    const INITIAL_STATE = {
        backgroundColor: "",
        width: Number,
        height: Number
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(formData => ({...formData, [name]:value}))
    }
    
    return (
        <div className="NewBoxForm">
            <form>
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
            </form>
        </div>
    )
}

export default NewBoxForm