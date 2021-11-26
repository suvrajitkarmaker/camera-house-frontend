import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
//useauth using authcontext
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;