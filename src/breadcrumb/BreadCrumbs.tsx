import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumbs = () => {
    const location = useLocation();
    const paths = location.pathname.split('/');
    console.log(paths);
    const newPaths = paths.slice(1);
    return (
        <div>
            <Link to='/'>Home</Link>
            {newPaths.map((l, index) => {
                const last = newPaths.length - 1 === index;
                return last ? <span>{l}</span> : <Link to={l}>{l}</Link>
            })}
        </div>
    )
}

export default BreadCrumbs
