import { useState, createContext, useContext } from "react";
import Child11 from "./Child11";
export const UserContext = createContext();
export default function App13a() {
  const [user, setUser] = useState("John");
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <h2>Hello {user} from App13 component</h2>
        <Child11 />
      </UserContext.Provider>
    </>
  );
}