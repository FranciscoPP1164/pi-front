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
    .then((apointment) => {
      return apointment;
    })
    .catch((error) => {
      console.log(error);
    });
}
