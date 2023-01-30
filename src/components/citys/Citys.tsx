
import { useEffect } from 'react'
import { PostForm } from './PostForm';
import { useCitys } from '../../hooks'
import { Results } from '../Results';
import { useLocation } from 'react-router-dom';



export const Citys = () => {
    let location = useLocation();

    const { dataCitysGet, postCity, citys } = useCitys()


    useEffect(() => {
        dataCitysGet()
    }, []) 


    return (
        <>
        {location.pathname ==='/citys' 
            ? <PostForm postCity={postCity} citys={citys}/> 
            : <Results/>}
                
        </>
    )


}
