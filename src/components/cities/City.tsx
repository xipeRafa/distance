

import { PostForm } from './PostForm';
import { useCity } from '../../hooks'



export const City = ():JSX.Element => {

    
    const { citiesState, SweetAlert, postCitySearch } = useCity()


    return (
        <PostForm citiesState={citiesState} SweetAlert={SweetAlert} postCitySearch={postCitySearch} />       
    )


}
