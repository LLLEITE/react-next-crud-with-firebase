import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Entry from "./Entry";

interface FormProps {
    client: Client
    clientChanged?: (client: Client) => void
    canceled?: () => void
}

export default function Form(props: FormProps){
    const id = props.client?.id ?? null

    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge]   = useState(props.client?.age  ?? 0)

    return (
        <div>
            {id ? (
                <Entry readonly text="Code" value={id}/>
            ) : false}
            <Entry text="Name" value={name}  className="mb-4" valueChanged={setName}/>
            <Entry text="Age"  type="number" value={age} className="mb-4" valueChanged={setAge}/>
            <div className="flex justify-end mt-7">
                <Button className="mr-2" onClick={() => props.clientChanged?.(new Client(name, age, id)) }>
                    {id ? 'Update' : 'Save'}
                </Button>
                <Button onClick={props.canceled}>
                    Cancel
                </Button>
            </div>
        </div>
    )
}