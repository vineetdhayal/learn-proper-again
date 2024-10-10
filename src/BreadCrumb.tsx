import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumb = () => {
    const { pathname }: any = useLocation();
    const paths = pathname.split('/').filter((x: any) => x);

    console.log(paths);
    let crumb = '';

    return (
        <div>
            <Link to='/'></Link>
            {paths.map((p: any) => {
                crumb += `/${p}`;
                return <Link key={p} to={crumb}></Link>
            })}
        </div>
    )
}

export default BreadCrumb
