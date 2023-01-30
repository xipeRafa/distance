



export const postExplorer = (saveInFall, {nombre, correo, password}) => {

    console.log('postExplorer :>> ');

    let usuario = {
        correo,
        nombre,
        password,
        'uid': 'frontend-Id-' + correo + Date.now(),
        'estado': true,
        'google': false,
        'img': "",
        'rol': "City_ROLE",
        'toggle': true
    }

    
    let newArr = [...JSON.parse(localStorage.CitysArray), usuario] // concatena
        
    if (saveInFall === false) {
        localStorage.CitysArray = JSON.stringify([...newArr]) // push CitysArray    
    }

    let newArray = JSON.parse(localStorage.CitysArray).slice(-1)  // real [{}]





    if (saveInFall === true) {
        console.log('fall--')
        let fall = JSON.parse(localStorage.fallCitysArr) 
    
        fall.push(usuario)
        
        localStorage.fallCitysArr = JSON.stringify(fall) 
    }




    
    //-=-=-=-=-=-=-=-=-=- update counter
    let n = Number(localStorage.CitysTotal) + 1
    localStorage.CitysTotal = n



    return { newArray } 
    
}

