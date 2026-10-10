import App from "../App";
import OfflineMessage from "../Pages/offlineMessage";
import { useOnlineStatus } from "../Context/OnlineContext";

function AppContent() {
  const  isOnline  = useOnlineStatus();
  return isOnline ? <App /> : <OfflineMessage />;
}
export default AppContent;