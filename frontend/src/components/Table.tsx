import { ReactNode } from "react"

export const Table = ({children} : {children:ReactNode}) => {
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            {children}
        </table>
    );
}