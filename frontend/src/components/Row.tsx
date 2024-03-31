import { ReactNode } from "react"

export const Row = ({children, headerRow} : {children:ReactNode, headerRow:boolean}) => {
    return (
        <tr className={headerRow ? "" : "bg-white border-b dark:bg-gray-800 dark:border-gray-700" }>
            {children}
        </tr>
    );
}