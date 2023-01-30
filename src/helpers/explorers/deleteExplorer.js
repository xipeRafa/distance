




export const deleteExplorer =(uid, array, fallArray)=>{

    let usuarios = array.filter(el => el.uid !== uid)

    localStorage.CitysArray = JSON.stringify(usuarios)


//-=-=-=-=-=-=--= fall
    let usuariosFall = fallArray.filter(el => el.uid !== uid) 

    localStorage.fallCitysArr = JSON.stringify(usuariosFall) 


 //-=-=-=-=-=-=--= Delete   
    let usuario = array.filter(el => el.uid === uid) 
    console.log('usuario', usuario)

    localStorage.CityDeletedArr = JSON.stringify(usuario)




    let n = Number(localStorage.CitysTotal) -1
    localStorage.CitysTotal = n

    usuarios.slice(0,8) 



    return { usuarios }

}