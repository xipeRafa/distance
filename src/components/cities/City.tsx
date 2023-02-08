

import { PostForm } from './PostForm';
import { useCity } from '../../hooks'



export const City = ():JSX.Element => {

    const { cities, SweetAlert, postCitySearch } = useCity()


  


    return (
        <PostForm cities={cities} SweetAlert={SweetAlert} postCitySearch={postCitySearch} />       
    )


}
