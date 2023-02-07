
import { useEffect } from 'react'
import { PostForm } from './PostForm';
import { useCity } from '../../hooks'



export const City = ():JSX.Element => {

    const { cities, SweetAlert, postCitySearch } = useCity()


    useEffect(() => {
        localStorage.done='false'
    }, []) 


    return (
        <PostForm cities={cities} SweetAlert={SweetAlert} postCitySearch={postCitySearch} />       
    )


}
