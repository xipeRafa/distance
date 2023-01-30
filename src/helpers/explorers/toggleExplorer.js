

// const copyOfDynosAndFriends = JSON.parse(JSON.stringify(dynosAndFriends)) */

//     const { newArray } = toggleExplorer({uid}, Citys.usuarios, 'toggle')





export const toggleExplorer =(saveInFall=false, objId, usuario, keyToSwitch, CitysLSArr, fallCitysArr)=>{

    let objString = JSON.stringify(usuario)
    let objTarget =  JSON.parse(objString)

    objTarget.toggle = !usuario.toggle


    if (saveInFall) {
        
        let some = fallCitysArr.some(el => el.uid === objTarget.uid)
        
        if(!some){ 
            fallCitysArr.push(objTarget)
            localStorage.fallCitysArr = JSON.stringify(fallCitysArr) 
        } else{
            let ind = fallCitysArr.findIndex(el => el.uid === objTarget.uid) // true 
            fallCitysArr.splice(ind, 1, objTarget) // replace
            localStorage.fallCitysArr = JSON.stringify(fallCitysArr) 
        }
        
    }
    
    let ind = CitysLSArr.findIndex(el => el.uid = objTarget.uid)
    let newArr = CitysLSArr

    newArr.splice(ind, 1 , objTarget)
    localStorage.CitysArray = JSON.stringify(newArr) 
    
    
    return { objTarget }  
    
}


/*     let keyId = Object.keys(objId)[0]
let valueId = Object.values(objId)[0]



newArray.map(el => el[keyId] === valueId ? el[keyToSwitch] = !el[keyToSwitch] :el)   */


//
  
  //let objTarget = newArray.filter(el => el.uid === valueId)[0]






