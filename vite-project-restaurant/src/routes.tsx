import App from "./App";
import ReservePage from "./components/ReservePage";
import ErrorPage from "./components/ErrorPage";
import Navigation from "./components/Navigation";
import CartPage from "./components/CartPage";
import Contact from "./components/Contact";

const routes = [
    {
      path: "/",
      element: <Navigation />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <App /> },
        { path: "reservepage/", element: <ReservePage /> },
        { path: "cartpage/", element: <CartPage />},
        { path: "contactpage/", element: <Contact />},
      ]
    },
  ];
  
  export default routes;