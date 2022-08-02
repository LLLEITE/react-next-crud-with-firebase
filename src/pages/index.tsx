import { useEffect, useState } from "react";
import ClientCollection from "../backend/db/ClientCollection";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository";

export default function Home() {

  const repo: ClientRepository = new ClientCollection()

  const [client, setClient]   = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  useEffect(() => {
    repo.getAll().then(setClients)
  }, [])

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function deletedClient(client: Client) {
    
  }

  function addClient() {
    setClient(Client.empty())
    setVisible('form')
  }

  function saveClient(client: Client) {
    console.log(client);
    setVisible('table')
  }

  return (
    <div className="flex justify-center items-center h-screen bg bg-gradient-to-r from-blue-500 to bg-purple-500 text-white">
      <Layout title="Simple Registration">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" onClick={addClient}>Add Client</Button>
            </div>
            <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient}></Table>
          </>
        ) : (
          <Form client={client} canceled={() => setVisible('table')} clientChanged={saveClient}/>
        )}
        
      </Layout>
    </div>
  )
}
