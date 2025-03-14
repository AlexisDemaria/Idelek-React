import React from 'react'

export default function BotonWSP() {
    const handleClick = () => {
        window.open(`https://wa.me/5493515165848`, "_blank");
    };
    return (
        <>
            <button className="whatsapp-button" onClick={handleClick}>
                <i style={{ padding: '6px', fontSize: '22px' }} className="bi bi-whatsapp"></i>
            </button>
        </>
    )
}
