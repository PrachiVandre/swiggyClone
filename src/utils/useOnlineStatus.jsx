import React, {useState, useEffect} from 'react'

const useOnlineStatus = () => {
    const[live, setLive] = useState(true);

    useEffect(()=>{ 
        window.addEventListener('offline',()=>{
            setLive(false)
        });

        window.addEventListener('online',()=>{
            setLive(true)
        })
    },[]);

  return live;
}

export default useOnlineStatus