import React from 'react'
import IModal from '@/interfaces/interfaceModal'

export const Modal = ({setVisible, children} : IModal) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <button className='text-white text-xl place-self-end' onClick={() => setVisible(false)}>X</button>
                <div className='bg-white p-2 rounded text-black'>
                    {children}
                </div>
            </div>
        </div>
    )
}
