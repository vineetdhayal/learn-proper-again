import { useQuery } from '@tanstack/react-query'
import React from 'react'

const Query = () => {
    const data = useQuery({
        queryKey: ['fetchData'],
        queryFn: () => {
            fetch('https://api.github.com/repos/TanStack/query').then((res) =>
                res.json(),
            )
        }
    })

    const isLoading = data.isLoading;
    const dataO = data.data;
    const err = data.error;

    return (
        <div>

        </div>
    )
}

export default Query
