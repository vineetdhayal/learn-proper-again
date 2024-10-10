import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const Firstt = () => {
    const {pathname} = useLocation();
    console.log(pathname);
  return (
    <div>
      <Link to={'/firstt'}> firstt</Link>
    </div>
  )
}

export default Firstt
