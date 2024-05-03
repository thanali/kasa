import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../pages/Layout"
import ErrorPage from "../pages/ErrorPage"
import About from "../pages/About"
import Accomodation from "../pages/Accomodation"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Route>,
    { basename: "/kasa" }
  )
)

export default function Root() {
  return <RouterProvider router={router} />
}
