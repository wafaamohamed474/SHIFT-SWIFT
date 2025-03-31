import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import { getUserData } from "./services/authService";

function App() {
  console.log(getUserData());
  
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
