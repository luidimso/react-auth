import { redirect } from "react-router-dom";

export function getAuthToken() {
    const token = localStorage.getItem("token");
    return token;
}

export function tokenLoader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken();

    if(!token) {
        alert("You should authenticate to access this page")
        return redirect("/auth");
    }

    return null;
}