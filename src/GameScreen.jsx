import React from 'react'

export default function GameScreen() {
    return (
        <div>
            <div style={{ color: 'white', fontWeight: 500, fontSize: "25px" }}>
                The current score {score}
            </div>
            {objects.map((object) => (
                <FallingObject
                    key={object.id}
                    id={object.id}
                    onClick={handleObjectClick}
                    left={object.left}
                />
            ))}
        </div>
    )
}
