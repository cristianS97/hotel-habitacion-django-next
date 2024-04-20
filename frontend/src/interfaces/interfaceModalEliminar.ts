import React from "react"

export default interface IModalEliminar {
    cancelDelete: () => void,
    confirmDelete: () => void,
    titulo: string
}