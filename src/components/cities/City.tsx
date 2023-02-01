
import { useEffect } from 'react'
import { PostForm } from './PostForm';
import { useCity } from '../../hooks'



export const City = ():JSX.Element => {

    const { dataCityGet, postCity, cities, SweetAlertWrong } = useCity()


    useEffect(() => {
        dataCityGet()
        localStorage.done='false'
    }, []) 


    return (
        <PostForm postCity={postCity} cities={cities} SweetAlertWrong={SweetAlertWrong}/>       
    )


}
