import React from 'react'

const Box = ({backgroundColor, width, height}) => {
    const boxStyle = {
        backgroundColor: backgroundColor,
        width: `${width}px`,
        height: `${height}px`
    }
    return (
        <div className="Box" style={boxStyle}>
        </div>
    )
}

export default Box