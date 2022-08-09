import { useState } from "react";

export default function useTableOrForm() {
    const [visisble, setVisible] = useState<'table' | 'form'>('table')

    const showTable = () => setVisible('table')
    const showForm  = () => setVisible('form')

    return {
        isFormVisible:  visisble === 'form',
        isTableVisible: visisble === 'table',
        showTable,
        showForm
    }
}