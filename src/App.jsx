import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
// import Login from "./pages/registration/login/Login";
// import Registraton from "./pages/registration/Registraton";
import Login from "./pages/login/Login";
import Registraton from "./pages/registration/Registraton";
import Home from "./pages/home/Home";
import RootLayout from "./components/layout/RootLayout";




function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login/>}/>
        <Route path="/registration" element={<Registraton/>}/>
        <Route element={<RootLayout/>}>
          <Route path="/home" element={<Home/>}/>
        </Route>

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
