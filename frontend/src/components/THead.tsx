import { ReactNode } from "react"

export const THead = ({children} : {children:ReactNode}) => {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {children}
        </thead>
    );
}