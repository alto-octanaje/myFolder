import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./config/Router";
import { Home } from "./pages/Home/Home";

function App() {
 
  return (
    <RouterProvider router={router}>
      <div className="App">
        {/* <Home/> */}
      </div>
    </RouterProvider>
  );
}

export default App;
