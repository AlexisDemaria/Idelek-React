import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <ClipLoader
                color="#6788a3"
                cssOverride={{ 'border-width': '5px' }}
                loading
                size={50}
                speedMultiplier={0.7}
            />
        </div>
    )
}
