import React from 'react'
import { useOnlineStatus } from '../Context/OnlineContext'

function OfflineMessage() {
    const isOnline = useOnlineStatus();
    if (isOnline) {
        return null;
    }
  return (
    <div className='offline-message'>
      🔴 You are currently Offline.
      Please check your internet connection and try-again!
    </div>
  )
}

export default OfflineMessage
