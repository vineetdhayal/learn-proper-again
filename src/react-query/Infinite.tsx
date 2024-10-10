import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

const Infinite = () => {
    const fetchData = async ({ pageParams }: any) => {
        const res = await fetch('/api/projects?cursor=' + pageParams)
        return res.json()
    };

    const { data, error, fetchNextPage, fetchPreviousPage, isFetching, status, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['projects'],
        queryFn: fetchData,
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => lastPage.nextcursor
    })

    return (
        status === 'pending' ? <p>Loading ...</p> : error ? <p>{error.message}</p> :
            <>
                {data.pages.map((group, index) => {
                    return <React.Fragment key={index}>
                        <p key={group.id}>{group.id}</p>
                    </React.Fragment>
                })}

                <div>
                    <button disabled={isFetchingNextPage || !hasNextPage} onClick={() => fetchNextPage()}>
                        {isFetchingNextPage ? 'Loading ...' : hasNextPage ? 'Load More' : 'No Data'}
                    </button>
                </div>
            </>

    )
}

export default Infinite
