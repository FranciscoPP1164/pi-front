import BASE_URL from "./baseURL";
import API_KEY from "./apiKEY";

export function getNurses() {
  return fetch(`${BASE_URL}/nurses/?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((nurses) => {
      return nurses;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getNurseById(nurse) {
  return fetch(`${BASE_URL}/nurses/${nurse}/?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((nurse) => nurse)
    .catch((error) => {
      console.log(error);
    });
}

export function createNurse(newNurse) {
  return fetch(`${BASE_URL}/nurses/?api_key=${API_KEY}`, {method: "POST", headers: {"Content-type": "application/json"}, body: JSON.stringify(newNurse)})
    .then((res) => res.json())
    .then((nurse) => {
      console.log(nurse);
      return nurse;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deleteNurse(nurse) {
  return fetch(`${BASE_URL}/nurses/${nurse}/?api_key=${API_KEY}`, {method: "DELETE"}).catch((error) => {
    console.log(error);
  });
}
