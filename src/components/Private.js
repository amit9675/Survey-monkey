import { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "./AuthContext";
import { useAuth0 } from "@auth0/auth0-react";
function Private({ children }) {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    if (!isAuthenticated) {
        return <Navigate to="/notfound" />;
    }
    return children;
}
export default Private;
