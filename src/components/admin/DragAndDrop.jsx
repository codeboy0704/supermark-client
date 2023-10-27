import React, { useState } from 'react';

export function FileDrop({ onImageSelect }) {
    const [isOver, setIsOver] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsOver(false);

        const dataTransfer = e.dataTransfer;

        if (dataTransfer.items && dataTransfer.items.length === 1) {
            const droppedFile = dataTransfer.items[0]
            if (droppedFile) {
                if (onImageSelect) {
                    onImageSelect(droppedFile);
                }
            } else {
                console.error('No se pudo obtener el archivo del evento.');
            }
        } else {
            console.error('Por favor, arrastra y suelta un solo archivo.');
        }
    };

    return (
        <div className='drag_and_drop'
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
                backgroundColor: isOver ? 'lightgray' : 'white',
            }}
        >
            <p>Arrastra y suelta la imagen aquí</p>
        </div>
    );
}

export default FileDrop
