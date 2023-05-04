import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
//import App from "./App";
import Root from "./Root";
import Horario from "./components/horario";
import { dadosLoader, horarioLoader } from "./Loaders";
import DadosPessoais from "./components/dados";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path:"/secvirtual/*",
                element: <DadosPessoais/>,
                loader: dadosLoader
            },
            {
                path: "/secvirtual/horarios",
                element: <Horario/>,
                loader: horarioLoader
                
            }
        ]
    },
])

const childLink = document.getElementsByName("topo")[0]
document.body.removeChild(childLink)
const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

/*
<BrowserRouter>
            <ResponsiveAppBar/>
            <App/>
        </BrowserRouter>
*/