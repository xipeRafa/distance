
import { useDispatch, useSelector } from 'react-redux'
import axiosApi from '../api/api'
import { errorConsoleCatch } from '../helpers'

import { cityDataPush, intersDataPush, originToDestinyValView, dateAndPassengersView, infoView } from  '../store/slices/citiesSlice'
import { somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'





export const useCity = () => {

  const { citiesState, intersState, originToDestinyValState, infoViewState, dateAndPassengersState } = useSelector(state => state.citiesSlice)

  const dispatch = useDispatch()
  

  //"warning", "error", "success","info"
  function SweetAlertError(error:object){
      dispatch(somethingWentWrong(['Something Went Wrong', error?.response?.data?.errors[0]?.msg || 'working', 'error']))
  }

  function SweetAlert(error:string[]){
    dispatch(somethingWentWrong([error[0], error[1], error[2]]))
  }


  




  const dataCityGet:Function  = async () => {

      if(localStorage.data?.at(0) === '{'){

          let dataLS = JSON.parse(localStorage.data)

          dispatch(intersDataPush([dataLS.intersKMS]))          
          dispatch(originToDestinyValView(dataLS.originToDestinyVal)) 
          dispatch(infoView(dataLS.post)) 
          dispatch(dateAndPassengersView(dataLS.dp))

          return
      } 

              
      try { 
          let searching = window.location.search
          const { data } = await axiosApi.get(`/cities${searching}`)

          localStorage.data = JSON.stringify(data)

          dispatch(intersDataPush([data.intersKMS]))
          dispatch(originToDestinyValView(data.originToDestinyVal)) 
          dispatch(infoView(data.post)) 
          dispatch(dateAndPassengersView(data.dp))
          localStorage.link = window.location.href
      } catch (error) {
          SweetAlertError(error)
          errorConsoleCatch('datacityGet:',error)
          localStorage.done = 'noCall'
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
    citiesState,
    intersState,
    infoViewState,
    originToDestinyValState, 
    dateAndPassengersState, 
  }


}



