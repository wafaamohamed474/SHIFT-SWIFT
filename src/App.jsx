
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import { useEffect} from "react";
import { getCurrentUserData } from "./services/api/account";
import Cookies from "js-cookie";

function App() {
  useEffect(() => {
    (async () => {
      try {
        if (!Cookies.get("user_data")) {
          await getCurrentUserData();
        }
      } catch (error) {
        console.error("Failed to fetch and cache user data.", error);
      }
    })();
  }, []);

  return <RouterProvider router={routes} />;
}

export default App;
