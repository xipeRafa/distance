
import { useDispatch, useSelector } from 'react-redux'
//import axiosApi from '../api/api'
import { errorConsoleCatch, finderExplorer, postExplorer,
          paginationExplorer, nextExplorer} from '../helpers'
import { usersDataPush } from  '../store/slices/usersSlice'
import { somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'



export const useUsers = () => {

  const { users } = useSelector(state => state.usersSlice)

  const dispatch = useDispatch()
  

  //"warning", "error", "success","info"
  function SweetAlertError(error){
      dispatch(somethingWentWrong(['Something Went Wrong', error?.response?.data?.errors[0]?.msg || 'working', 'error']))
  }

/*   let usersLSArr =     JSON.parse(localStorage.UsersArray ) 
  let fallUsersArr =   JSON.parse(localStorage.fallUsersArr )
  let UserDeletedArr = JSON.parse(localStorage.UserDeletedArr)  */
 





  const dataUsersGet = async (from=0, limit=8) => {
   /*    try { 
          const { data } = await axiosApi.get(`/usuarios/${from}/${limit}`)
          console.log('dataUsers limit 8:', data)
          dispatch(usersDataPush(data))
          console.log('typeof Data', data)

          const alls = await axiosApi.get(`/usuarios/0/${data.total}`)

          localStorage.UsersArray = JSON.stringify([...alls.data.usuarios, ...fallUsersArr])  
          localStorage.UsersTotal = data.total  
        
          paginationSelect(8)
      
      } catch (error) {
          dispatch(usersDataPush({usuarios: usersLSArr})) 
          paginationSelect(8)
          localStorage.UsersTotal = usersLSArr.length

          SweetAlertError(error)
          errorConsoleCatch('dataUsersGet:',error)
      } */
  }



  



/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */

// online solo arriba
// offline abajo + arriba 

  const postUser = async (post) => {
    console.log('post hook:>> ', post);

   // getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2)
   /*    try {
          const { newArray } = postExplorer(false, { nombre, correo, password })
          dispatch(usersDataPush({usuarios:newArray})) 

          //const { data } = await axiosApi.post('/usuarios', { nombre, correo, password })
          dispatch(usersDataPush({usuarios:[data.usuario]})) 
          console.log('data', data)
          UpDateDB()
      } catch (error) {  // aqui se ejecuta cuando esta offline
          const { newArray } = postExplorer(true, { nombre, correo, password })
          dispatch(usersDataPush({usuarios: newArray})) 

          //SweetAlertError(error)
          /* errorConsoleCatch(error) 
      }  */ 
  }


  const usersFinder = async (v:String) => {
    /*   try {
          if(v.length > 3){
              const { upFirstLe, upperCase, lowerCase, emailFind } = finderExplorer(v)

              upFirstLe.length>=1 ? dispatch(usersDataPush({usuarios:upFirstLe})): null
              upperCase.length>=1 ? dispatch(usersDataPush({usuarios:upperCase})): null
              lowerCase.length>=1 ? dispatch(usersDataPush({usuarios:lowerCase})): null
              emailFind.length>=1 ? dispatch(usersDataPush({usuarios:emailFind})): null
              
              console.log({ upFirstLe,upperCase,lowerCase,emailFind })
              
              const {data} = await axiosApi.get(`/buscar/usuarios/${v}`) 
              dispatch(usersDataPush({usuarios:data.results}))  
          } 
      } catch (error) {
          console.log('usersFinder error :>>', error)
          SweetAlertError(error)
          errorConsoleCatch(error)
      } */
  }


  const paginationSelect=(v:Number)=>{
     /*  const { arr } = paginationExplorer(v)
      dispatch(usersDataPush({usuarios: arr }) )  */
      /*  dataUsersGet(v -8, v) */ 
  }


  const paginationNext =(boo:Boolean, n=8)=>{
   /*    const { arr } = nextExplorer(boo, n)
      dispatch(usersDataPush({usuarios: arr }) ) */
      // let step = localStorage.step
      /*  dataUsersGet(step -n, step) */
  }






  return {
    dataUsersGet,
    postUser,

    //finder
    usersFinder,
    paginationSelect,
    paginationNext,

    //states
    users,
  }
}
