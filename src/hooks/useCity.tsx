
import { useDispatch, useSelector } from 'react-redux'
import axiosApi from '../api/api'
import { errorConsoleCatch } from '../helpers'

import { cityDataPush, intersDataPush, originToDestinyValView, dateAndPassengersView,
           infoView } from  '../store/slices/citiesSlice'
import { somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'





export const useCity = () => {

  const { cities } = useSelector(state => state.citiesSlice)

  const dispatch = useDispatch()
  

  //"warning", "error", "success","info"
  function SweetAlertError(error){
      dispatch(somethingWentWrong(['Something Went Wrong', error?.response?.data?.errors[0]?.msg || 'working', 'error']))
  }

  function SweetAlert(error){
    dispatch(somethingWentWrong([error[0], error[1], error[2]]))
  }


  




  const dataCityGet = async () => {

    let searching = window.location.search

    try { 
        const { data } = await axiosApi.get(`/cities${searching}`)

        dispatch(intersDataPush([data.intersKMS]))
          
        dispatch(originToDestinyValView(data.originToDestinyVal)) 
        dispatch(infoView(data.post)) 
        dispatch(dateAndPassengersView(data.dp))

    } catch (error) {
        SweetAlertError(error)
        errorConsoleCatch('datacityGet:',error)
    }  

  }





type PostDTO ={
    origen:string,
    inter:string,
    destiny:string,
    date:string,
    passengers:string
}



const postCitySearch = async (finding:string) => {
      
   try {

        const {data}  = await axiosApi.post('/cities/search', {finding})
        dispatch(cityDataPush(data))
    }catch (error) {  
        console.log('errorSearch :>> ', error);
        SweetAlertError(error)
        errorConsoleCatch(error) 
    }  
}





  return {
    dataCityGet,
    SweetAlert,
    postCitySearch,

    //states
    cities,
  }


}
