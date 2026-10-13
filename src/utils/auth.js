
function decodeJwt(token) {
    const payload = token.split(".")[1];
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const json = decodeURIComponent(
        atob(base64)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
    );
    return JSON.parse(json);
}

export function getToken() {
    return localStorage.getItem("token");
}

export function getCurrentUser() {
    const token = getToken();
    if (!token) return null;

    try {
        const user = decodeJwt(token);

        // if the token ever gets an expiry, respect it
        if (user.exp && user.exp * 1000 < Date.now()) {
            localStorage.removeItem("token");
            return null;
        }
        return user;
    } catch {
        localStorage.removeItem("token");
        return null;
    }
}

export function logoutUser() {
    localStorage.removeItem("token");
}
