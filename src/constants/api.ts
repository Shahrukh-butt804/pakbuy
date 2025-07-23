// const { hostname } = window.location;

// const servers = {
//   local: "http://localhost:3038",
//   customDev: "https://react.customdev.solutions:3038",
//   live: "https://react.customdev.solutions:3038",
//   dummy: "https://9d2f-204-157-158-10.ngrok-free.app",
// };

// var URL;
// if (hostname.includes("react.customdev.solutions"))
//   URL = servers.customDev;
// else if (hostname.includes("cruisetales.com"))
//   URL = servers.customDev;
// else URL = servers.local;

export const SOCKET_URL = `${URL}`;
export const UPLOADS_URL = URL + "/";
export const BASE_URL = URL + "/api/v1";