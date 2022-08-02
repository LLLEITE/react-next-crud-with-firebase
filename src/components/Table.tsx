import Client from '../core/Client'
import { EditingIcon, TrashIcon } from './Icons'

interface TableProps {
    clients: Client[]
    selectedClient?: (client: Client) => void
    deletedClient?:  (client: Client) => void
}

export default function Table(props: TableProps) {

    const showActions = props.deletedClient || props.selectedClient

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Code</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                { showActions ? <th className="p-4">Action</th> : false }
            </tr>
        )
    }

    function renderData() {
        return props.clients?.map((client, i) =>  { 
            return (
                <tr key={client.id} className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}>
                    <td className="text-left p-4">{client.id}  </td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age} </td>
                    {showActions ? renderActions(client) : false}
                </tr>
            )
         })
    }

    function renderActions(client: Client) {
        return(
            <td className="flex justify-center">
                {
                    props.selectedClient ? (
                        <button className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50" onClick={() => props.selectedClient?.(client)}>{EditingIcon}</button>
                    ) : false
                }
                {
                    props.deletedClient ? (
                        <button className="flex justify-center items-center text-red-600 rounded-full p-2 m-1   hover:bg-purple-50" onClick={() => props.deletedClient?.(client)}>{TrashIcon}</button>
                    ) : false
                }
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="text-gray-100 bg-purple-500">
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}