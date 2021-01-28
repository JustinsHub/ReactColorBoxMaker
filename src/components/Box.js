import React from 'react'

const Box = ({backgroundColor, width, height}) => {
    const boxStyle = {
        backgroundColor: backgroundColor,
        width: width,
        height: height
    }
    return (
        <div className="Box" style={boxStyle}>
        </div>
    )
}

export default Box