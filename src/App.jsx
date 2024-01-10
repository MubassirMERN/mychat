import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/registration/login/Login";
import Registraton from "./pages/registration/Registraton";





function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login/>}/>
        <Route path="/registration" element={<Registraton/>}/>

      </>
    )
  );

  return (
    <>
       <RouterProvider
        router={router}
       />
    </>
  )
}

export default App
