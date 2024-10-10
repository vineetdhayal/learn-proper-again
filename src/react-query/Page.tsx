import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'

const Page = () => {
    const [page, setPage] = useState(0);
    const fetchProjects = (page = 0) =>
        fetch('/api/projects?page=' + page).then((res) => res.json().then((response) => response))

    const { isError, isLoading, error, data, isPlaceholderData, isPending }: any = useQuery({
        queryKey: ['pages', page],
        queryFn: () => {
            return fetchProjects(page);
        },
        placeholderData: keepPreviousData
    });

    console.log(data);

    return (
        <div>
            {isPending ? (<div></div>) : isError ? <div>{error.message}</div> : <div>
                {data.projects.map((project: any) => (
                    <p key={project.id}>{project.name}</p>
                ))}
            </div>}
        </div>
    )
}

export default Page
