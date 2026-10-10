import React, { useEffect} from 'react'
import { createContext,useState,useContext } from 'react'
const OnlineContext = createContext();

export function OnlineProvider({children}) {
    const [isOnline, setIsOnline] = useState(navigator.onLine); // 
    useEffect(() => {
        
        const handleOnline = () => {
            setIsOnline(true);
        };

        const handleOffline = () => {
            setIsOnline(false);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("online", handleOffline);
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("online", handleOffline);
        }
    },[])
  return (
      <OnlineContext.Provider value={isOnline} >
          {children}
    </OnlineContext.Provider>
  )
}

export function useOnlineStatus () {
    return useContext(OnlineContext);
}