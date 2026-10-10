import ReactDOM from "react-dom/client";
import AppContent from "./Components/AppContent";
import { OnlineProvider } from "./Context/OnlineContext";



ReactDOM.createRoot(document.getElementById("root")).render(
<OnlineProvider>
     <AppContent/> 
</OnlineProvider>
);