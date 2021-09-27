import { ToastContainer } from "react-toastify";
import Router from "./routes";
import GlobalStyle from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router />
    </>
  );
}

  