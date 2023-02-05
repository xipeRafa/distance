
import { useEffect } from 'react'
import { PostForm } from './PostForm';
import { useCity } from '../../hooks'



export const City = ():JSX.Element => {

    const { 
        dataCityGet, 
        postCity, 
        cities, 
        SweetAlert,
        postCitySearch, 
        dateAndPassengersPost 
    } = useCity()


    useEffect(() => {
        dataCityGet()
        localStorage.done='false'
    }, []) 


    return (
        <PostForm 
            postCity={postCity} 
            cities={cities}
            SweetAlert={SweetAlert} 
            postCitySearch={postCitySearch} 
            dateAndPassengersPost={dateAndPassengersPost} 
        />       
    )


}
