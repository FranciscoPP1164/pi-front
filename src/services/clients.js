import BASE_URL from "./baseURL";
import API_KEY from "./apiKEY";

export function getClients() {
  return fetch(`${BASE_URL}/clients/?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((client) => {
      return client;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getClientById(client) {
  return fetch(`${BASE_URL}/clients/${client}/?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((client) => client)
    .catch((error) => {
      console.log(error);
    });
}

export function createClient(newClient) {
  return fetch(`${BASE_URL}/clients/?api_key=${API_KEY}`, {method: "POST", headers: {"Content-type": "application/json"}, body: JSON.stringify(newClient)})
    .then((res) => res.json())
    .then((client) => client)
    .catch((error) => {
      console.log(error);
    });
}

export function deleteClient(client) {
  return fetch(`${BASE_URL}/clients/${client}/?api_key=${API_KEY}`, {method: "DELETE"}).catch((error) => {
    console.log(error);
  });
}
