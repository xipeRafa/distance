
import { useEffect } from 'react'
import { PostForm } from './PostForm';
import { useCitys } from '../../hooks'


export const Citys = () => {

    const CitysListCSS = {
        display: "block",
        border: "2px solid salmon",
        padding: "10px",
        width: "400px",
        marginLeft: "50px",
        marginBottom: "10px",
        backgroundColor: "lightgray"
    }
 



     /*    let lat = []
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index][1];
            lat.push(element)
        }
        
        let lon = []
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index][2];
            lon.push(element)
        }  */


        




    const { dataCitysGet, postCity,  CitysFinder, paginationSelect, citys } = useCitys()



     useEffect(() => {
        dataCitysGet()
    }, []) 


    const handlePaginationSelect=(ps)=>{

        let a = ArrayFlat.findIndex(el => el === ps)
        let lat = ArrayFlat[a+1]
        let lon = ArrayFlat[a+2]

        console.log('lat,lon', lat,lon)

       /*  let step = Number(ps)
        paginationSelect(step) */
    }


    return (
        <div>
               
          
         

            <PostForm postCity={postCity} citys={citys}/>

         





        </div>
    )
}
