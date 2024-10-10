import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actions, {getData} from './userDataSlice';

const Home = () => {
    const dispatch = useDispatch();
    console.log(actions);

    useEffect(() => { 
        dispatch(getData());
    }, [])

    const loading = useSelector((state: any) => state.userStore.status);
    const error = useSelector((state: any) => state.userStore.error);
    const content = useSelector((state: any) => state.userStore.quote);

    if(loading) {
        return 'Loading ...';
    }
    if(error) {
        return error;
    }
    return (<div></div>)
}

export default Home
