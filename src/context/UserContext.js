import { createContext, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
	const [userData, setUserData] = useLocalStorage("userData", {});

	const [token, setToken] = useState("");
	const [page, setPage] = useState("feed");
  
	const contextValue = { userData, setUserData, token, setToken, page, setPage };

	//userData = { username, image, bio, userId, token }
  
	return (
		<UserContext.Provider value={contextValue}>
			{children}
		</UserContext.Provider>
	);
}
