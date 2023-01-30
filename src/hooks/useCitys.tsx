
import { useDispatch, useSelector } from 'react-redux'
//import axiosApi from '../api/api'
import { errorConsoleCatch, finderExplorer, postExplorer,
          paginationExplorer, nextExplorer, getDistanceFromLatLonInKm} from '../helpers'
import { citysDataPush } from  '../store/slices/citysSlice'
import { somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'



export const useCitys = () => {

  const { citys } = useSelector(state => state.citysSlice)

  const dispatch = useDispatch()
  

  //"warning", "error", "success","info"
  function SweetAlertError(error){
      dispatch(somethingWentWrong(['Something Went Wrong', error?.response?.data?.errors[0]?.msg || 'working', 'error']))
  }



let arr = [

  ['Paris', 48.856614, 2.352222],

  ['Marseille', 43.296482, 5.369780],

  ['Lyon', 45.764043, 4.835659],

  ['Toulouse', 43.604652, 1.444209],

  ['Nice', 43.710173, 7.261953],

  ['Nantes', 47.218371, -1.553621],

  ['Strasbourg', 48.573405, 7.752111],

  ['Montpellier', 43.610769, 3.876716],

  ['Bordeaux', 44.837789, -0.579180],

  ['Lille', 50.629250, 3.057256],

  ['Rennes', 48.117266, -1.677793],

  ['Reims', 49.258329, 4.031696],

  ['Le Havre', 49.494370, 0.107929],

  ['Saint-Étienne', 45.439695, 4.387178],

  ['Toulon', 43.124228, 5.928000],

  ['Angers', 47.478419, -0.563166],

  ['Grenoble', 45.188529, 5.724524],

  ['Dijon', 47.322047, 5.041480],

  ['Nîmes', 43.836699, 4.360054],

  ['Aix-en-Provence', 43.529742, 5.447427],]

  let citysList = []
  for (let index = 0; index < arr.length; index++) {
     const element = arr[index][0];
     citysList.push(element)
  }
   

  let ArrayFlat = arr.flat()


  const dataCitysGet = async (from=0, limit=8) => {

    dispatch(citysDataPush(citysList))
    /*     try { 
             const { data } = await axiosApi.get(`/usuarios/${from}/${limit}`)
            console.log('dataCitys limit 8:', data)
            dispatch(CitysDataPush(data))
            console.log('typeof Data', data)
  
            const alls = await axiosApi.get(`/usuarios/0/${data.total}`)
  
            localStorage.CitysArray = JSON.stringify([...alls.data.usuarios, ...fallCitysArr])  
            localStorage.CitysTotal = data.total  
          
            paginationSelect(8) 
        
        } catch (error) {
            dispatch(citysDataPush()) 
            paginationSelect(8)
            localStorage.CitysTotal = CitysLSArr.length
  
            SweetAlertError(error)
            errorConsoleCatch('dataCitysGet:',error)
        }  */
    }


  const postCity = async (post) => {
    console.log('post hook:>> ', post);

    const { origen, inter, destiny, date, passengers } = post

    let originToDestiny = ArrayFlat.findIndex(el => el === origen)
    console.log("🚀 ~ file: useCitys.tsx:124 ~ postCity ~ originToDestiny", originToDestiny)


    //let originToDestiny = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2)




   /*    try {
          const { newArray } = postExplorer(false, { nombre, correo, password })
          dispatch(CitysDataPush({usuarios:newArray})) 

          //const { data } = await axiosApi.post('/usuarios', { nombre, correo, password })
          dispatch(CitysDataPush({usuarios:[data.usuario]})) 
          console.log('data', data)
          UpDateDB()
      } catch (error) {  // aqui se ejecuta cuando esta offline
          const { newArray } = postExplorer(true, { nombre, correo, password })
          dispatch(CitysDataPush({usuarios: newArray})) 

          //SweetAlertError(error)
          /* errorConsoleCatch(error) 
      }  */ 
  }


  const CitysFinder = async (v:String) => {
    /*   try {
          if(v.length > 3){
              const { upFirstLe, upperCase, lowerCase, emailFind } = finderExplorer(v)

              upFirstLe.length>=1 ? dispatch(CitysDataPush({usuarios:upFirstLe})): null
              upperCase.length>=1 ? dispatch(CitysDataPush({usuarios:upperCase})): null
              lowerCase.length>=1 ? dispatch(CitysDataPush({usuarios:lowerCase})): null
              emailFind.length>=1 ? dispatch(CitysDataPush({usuarios:emailFind})): null
              
              console.log({ upFirstLe,upperCase,lowerCase,emailFind })
              
              const {data} = await axiosApi.get(`/buscar/usuarios/${v}`) 
              dispatch(CitysDataPush({usuarios:data.results}))  
          } 
      } catch (error) {
          console.log('CitysFinder error :>>', error)
          SweetAlertError(error)
          errorConsoleCatch(error)
      } */
  }


  const paginationSelect=(v:Number)=>{
     /*  const { arr } = paginationExplorer(v)
      dispatch(CitysDataPush({usuarios: arr }) )  */
      /*  dataCitysGet(v -8, v) */ 
  }


  const paginationNext =(boo:Boolean, n=8)=>{
   /*    const { arr } = nextExplorer(boo, n)
      dispatch(CitysDataPush({usuarios: arr }) ) */
      // let step = localStorage.step
      /*  dataCitysGet(step -n, step) */
  }






  return {
    dataCitysGet,
    postCity,

    //finder
    CitysFinder,
    paginationSelect,
    paginationNext,

    //states
    citys,
  }
}
