import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import '../styles.css';

const MicroPhone = ({onClick}) => {
  return (
    <div className='microphone'>
      <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
    </div>
  )
}

export default MicroPhone
