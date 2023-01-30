
import { useEffect } from 'react'
import { PostForm } from './PostForm';
import { useCity } from '../../hooks'
import { Results } from '../Results';
import { useLocation } from 'react-router-dom';



export const City = () => {
    let location = useLocation();

    const { dataCityGet, postCity, cities, SweetAlertWrong } = useCity()


    useEffect(() => {
        dataCityGet()
    }, []) 


    return (
        <>
        {location.pathname ==='/cities' 
            ? <PostForm postCity={postCity} cities={cities} SweetAlertWrong={SweetAlertWrong}/> 
            : <Results/>}
                
        </>
    )


}
