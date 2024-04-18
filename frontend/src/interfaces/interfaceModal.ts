import React from "react"

export default interface IModal {
    setVisible : (visible:boolean) => void,
    children: React.ReactNode
}