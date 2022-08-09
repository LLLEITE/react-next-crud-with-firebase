import { useEffect, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout"
import Table from "../components/Table"
import useClients from "../hooks/useClients";

export default function Home() {

  const { isTableVisible, showTable, client, clients, selectClient, addClient, saveClient, deleteClient } = useClients()

  return (
    <div className="flex justify-center items-center h-screen bg bg-gradient-to-r from-blue-500 to bg-purple-500 text-white">
      <Layout title="Simple Registration">
        {isTableVisible ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" onClick={addClient}>Add Client</Button>
            </div>
            <Table clients={clients} selectedClient={selectClient} deletedClient={deleteClient}></Table>
          </>
        ) : (
          <Form client={client} canceled={showTable} clientChanged={saveClient}/>
        )}
        
      </Layout>
    </div>
  )
}
