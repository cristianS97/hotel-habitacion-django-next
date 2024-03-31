import { ReactNode } from "react";

export const Cell = ({value} : {value:string|number|ReactNode}) => {
    return (
        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {value}
        </td>
    );
}