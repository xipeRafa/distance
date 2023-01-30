
import { useEffect } from 'react'
import { PostForm } from './PostForm';
import { useUsers } from '../../hooks'


export const Users = () => {

    const usersListCSS = {
        display: "block",
        border: "2px solid salmon",
        padding: "10px",
        width: "400px",
        marginLeft: "50px",
        marginBottom: "10px",
        backgroundColor: "lightgray"
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
     
        ['Aix-en-Provence', 43.529742, 5.447427],
     
     ]


      let citys = []
     for (let index = 0; index < arr.length; index++) {
         const element = arr[index][0];
         citys.push(element)
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


        let ArrayFlat = arr.flat()




    const { dataUsersGet, postUser,  usersFinder, paginationSelect } = useUsers()



     useEffect(() => {
        dataUsersGet()
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
            <h3 className='mx-5'>Usuarios</h3>
     {/*        <div className='mx-5 my-2'>

                <div>{`Usuarios del: ${localStorage.step-7} para ${localStorage.step}, en Total: ${localStorage.UsersTotal}`}</div>

                <input type="button" value='Previous' onClick={()=>paginationNext(false)} className='btn btn-secondary'/>

                {JSON.parse(localStorage.UsersArray)?.map((el, i) => (
                    i < localStorage.UsersTotal/8 &&
                        <input key={i+'<^>'} type="button" value={i+1} onClick={()=>handlePaginationSelect((i+1)*8)} className='btn btn-secondary'/> 
                ))}
           
                <input type="button" value='Next' onClick={()=>paginationNext(true)} className='btn btn-secondary'/>   
                </div>
*/
               
          }
         

            <PostForm postUser={postUser} citys={citys}/>

            <input type="search" className='form-control col-12 my-2 mx-5' 
            style={{width:'200px'}} placeholder='Buscar Usuarios' onChange={(e)=> usersFinder(e.target.value.trim())} />





        </div>
    )
}
