import { useState, createContext, useContext } from "react";
import Child from "./child";
export const UserContext = createContext();
export default function App11() {
  const [user, setUser] = useState("John");
  const [email, setEmail] = useState("john@gmail.com")
  return (
    <>
    <UserContext.Provider value={{user, email}}>
      <h2>Hello {user} from App11 component</h2>
      <Child />
    </UserContext.Provider>
    </>
  );
}