import React, { useState } from 'react'
import MicroPhone from './MicroPhone';
import '../styles.css'

const RecorderBox = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  const start = async () => {
    if (!hasPermission) {
      await getPermission(() => {
        setHasStarted(true);
      })
    }
  }

  const getPermission = (successFn: any) => {
    return navigator.mediaDevices.getUserMedia({ video: false, audio: false }).then(() => {
      setHasPermission(true);
      successFn();
    }).catch((err) => {
      setHasPermission(false);
      console.error(err);
    })
  }

  return (
    <div className='recorder'>
      {hasStarted ? null : <MicroPhone onClick={start} />}
    </div>
  )
}

export default RecorderBox
