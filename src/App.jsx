import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import { getUserData } from "./services/authService";
import { useEffect, useState } from "react";
import { getCurrentUserData } from "./services/api/account";

 

function App() {
   
  useEffect(()=>{
    getCurrentUserData()  
  },[])
 
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
