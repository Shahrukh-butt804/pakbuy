const { hostname } = window.location;

const servers = {
    local: "http://localhost:3054",
    customDev: "https://react.customdev.solutions:3054",
    live: "https://react.customdev.solutions:3054",
};

var URL;
if (hostname.includes("react.customdev.solutions"))
    URL = servers.customDev;
else if (hostname.includes("choosewell"))
    URL = servers.live;
else URL = servers.customDev;

export const SOCKET_URL = `${URL}`;
export const UPLOADS_URL = URL + "/";
export const BASE_URL = URL + "/api/v1";