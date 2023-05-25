import BASE_URL from "./baseURL";
import API_KEY from "./apiKEY";

export function getPatients() {
  return fetch(`${BASE_URL}/patients/?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((patient) => {
      return patient;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getPatientById(patient) {
  return fetch(`${BASE_URL}/patients/${patient}/?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((patient) => patient)
    .catch((error) => {
      console.log(error);
    });
}

export function createPatient(newPatient) {
  return fetch(`${BASE_URL}/patients/?api_key=${API_KEY}`, {method: "POST", headers: {"Content-type": "application/json"}, body: JSON.stringify(newPatient)})
    .then((res) => res.json())
    .then((nurse) => {
      console.log(nurse);
      return nurse;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deletePatients(patient) {
  return fetch(`${BASE_URL}/patients/${patient}/?api_key=${API_KEY}`, {method: "DELETE"}).catch((error) => {
    console.log(error);
  });
}
