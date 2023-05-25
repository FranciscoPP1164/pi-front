import BASE_URL from "./baseURL";
import API_KEY from "./apiKEY";

export function getApointments() {
  return fetch(`${BASE_URL}/apointments/?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((apointments) => {
      return apointments;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getApointmentById(apointment) {
  return fetch(`${BASE_URL}/apointments/${apointment}/?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((apointment) => apointment)
    .catch((error) => {
      console.log(error);
    });
}

export function createApointment(newApointment) {
  return fetch(`${BASE_URL}/apointments/?api_key=${API_KEY}`, {method: "POST", headers: {"Content-type": "application/json"}, body: JSON.stringify(newApointment)})
    .then((res) => res.json())
    .then((apointment) => apointment)
    .catch((error) => {
      console.log(error);
    });
}

export function updateApointment(apointment, newData) {
  return fetch(`${BASE_URL}/apointments/${apointment}/?api_key=${API_KEY}`, {method: "UPDATE", headers: {"Content-type": "application/json"}, body: newData})
    .then((res) => res.json())
    .then((newData) => newData)
    .catch((error) => {
      console.log(error);
    });
}

export function deleteApointment(apointment) {
  return fetch(`${BASE_URL}/apointments/${apointment}/?api_key=${API_KEY}`, {method: "DELETE"}).catch((error) => {
    console.log(error);
  });
}
