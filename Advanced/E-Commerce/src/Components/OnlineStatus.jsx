import React from 'react'
import { useOnlineStatus } from '../Context/OnlineContext'

function OnlineStatus() {
    const isOnline = useOnlineStatus();
  return (
      <div className='online-status'>
          <div className="network-status">
            {isOnline ? "🟢 Online" : "🔴 Offline"}
          </div>
      </div>
  )
}

export default OnlineStatus;