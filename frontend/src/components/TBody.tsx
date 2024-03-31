import { ReactNode } from "react"

export const TBody = ({children} : {children:ReactNode}) => {
    return (
        <tbody>
            {children}
        </tbody>
    );
}