import { redirect } from "react-router-dom";

export function getAuthToken() {
    const token = localStorage.getItem("token");

    if(!token) {
        return null;
    }

    if(getTokenDuration() < 0) {
        return "EXPIRED";
    }

    return token;
}

export function getTokenDuration() {
    const expirationDate = new Date(localStorage.getItem("expiration"));
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
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