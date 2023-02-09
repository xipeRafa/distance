import { useState } from 'react'
import './postForm.css';
import {  useNavigate } from 'react-router-dom';

type PropsPostForm = { 
    citiesState:string[], 
    SweetAlert:Function 
    postCitySearch:Function
}

export const PostForm = ({ citiesState, SweetAlert, postCitySearch }:PropsPostForm):JSX.Element => {

    let navigateTo = useNavigate()


    const [bool, setBool]=useState<boolean>(true) 

    const [error, setError]=useState<string>('city never can not find it')

    type State = {
        origen:string,
        inter1:string,
        destiny:string
    } 

    
    type DateAndPassengers = {
        date:string,
        passengers:string
    }

    const [state, setState]=useState<State>({
        origen: '',
        destiny:'',
        inter1: '',
    })
   


    const [dateAndPassengers, setDateAndPassengers]=useState<DateAndPassengers>({
        date:'',
        passengers:''
    })


    const { origen, destiny, inter1, ...restStateInters} = state
    const { date, passengers } = dateAndPassengers

    
    type FormElement = React.FormEvent<HTMLFormElement>
  

    const onSubmitCities = (event:FormElement): void => {
        event.preventDefault();
        localStorage.data = 'free'
        if( Object.values(restStateInters).some(el => el === '') ||  
            Object.values(state).some(el => el === 'city never can not find it') ){
                
                let er = Object.values(restStateInters).findIndex(el => el === '' ) 
                let k = Object.keys(restStateInters)[er] 

                let u = k
                if(k === undefined){
                    u = 'letter'
                }

                let er2 = Object.values(restStateInters).findIndex(el => el === error ) 
                let k2 = Object.keys(restStateInters)[er2] 

                let u2 = k2
                if(k2 === undefined){
                    u2 = 'type'
                }

            SweetAlert(['A City Never Can Not Find It...',`Check <b>${u}</b> and/or <b>${u2}</b> please`, 'warning'])
            return
        }

        if( passengers.includes('e') || passengers.includes('.') || Number(passengers)<1 || Number(passengers)>100){
            SweetAlert(['no more that 100 or lees than 0', 'select the Right Number of passengers', 'warning'])
            return
        } 

        setTimeout(() => {
            let arrayState = Object.entries(state)
            let arrayDateAnd = Object.entries(dateAndPassengers)

            let array = [...arrayState, ...arrayDateAnd]

                let findThis = ''

            for (let index = 0; index < array.length; index++) {
                const key = array[index][0];
                findThis += key
                findThis += "="
                const value = array[index][1];
                findThis += value
                findThis += "&"
            }

            navigateTo(`/results?${findThis}`) 
        }, 800);

    }




    type Target = {
        target:{
            name:string
            value:string
        }
    }
    




    const handleInputChange = (target:Target): void => {
        const { name, value } = target.target;
      
        if(name === 'date' || name === 'passengers'){ 
            setDateAndPassengers({ ...dateAndPassengers, [name]: value })
        }

        if(name !== 'date' && name !== 'passengers'){ 
            let v = value.trim()[0]?.toUpperCase() + value.substring(1).split(" ").join("_")
            let post = [v]
            
            if(v.includes('_')){
                let i = v.indexOf("_") +1
                let letter = v[i]
                let up = v.replace(letter, letter?.toUpperCase())
                post.splice(0, 1, up)
            } 

            setState({ ...state, [name]: post[0]})

            if(value.length > 3 && citiesState.length === 0){
                setState({ ...state, [name]: error }) // -=-=-=-=- ERRO
            }

            postCitySearch(post[0])
        }
          
        setTimeout(() => {    
            if(origen.trim() !== '' && destiny.trim() !== '' ){
                setBool(false) 
            }
        }, 400);
    }

    const [inters, setInters]=useState([])


    const addObject =()=>{
        let keys:string[] = Object.keys(state)
        let newK:string = 'inter'.concat(String(keys.length -1))
        state[newK] = ''

        setInters([...inters, [newK]])
    } 

    const removeObject =()=>{
        let lastKeys:string[] = Object.keys(state).slice(-1)
        
        if(inters.length>0){
            delete state[lastKeys[0]]
            inters.pop()
            setInters([...inters])
        }
    }

  return (
    <div className="container login-container">
    <div className="row">
        <div className="col-md-6 login-form-1 mt-4">

            { !bool && <>
                <p><button onClick={addObject} className='btn btn-info text-white'>+</button>{' '} Add more inter cities </p>
                <p><button onClick={removeObject} className="btn btn-danger rot" >|</button>{' '} Remove inter cities </p>
            </>} 
          

            <form onSubmit={onSubmitCities}>
    

                <label>Select your city Origin </label>
                <input 
                    list="origen" 
                    onChange={handleInputChange}  
                    className="form-control mb-2" 
                    name='origen'
                    placeholder="origin"
                    autoComplete='off'
                />
                <span className='text-danger'>
                    {origen.length > 3 && citiesState.length === 0 ? (origen === 'city never can not find it') && origen : ''}
                </span>

                <datalist id="origen" >
                        {citiesState.map((city, key) =>
                            <option key={key} value={city.split("_").join(" ")} />
                        )}  
                </datalist>






            
                <label>Select your city Destiny </label>        
                <input 
                    list="destiny" 
                    onChange={handleInputChange} 
                    className="form-control mb-2" 
                    name='destiny' 
                    placeholder="destiny"
                    autoComplete='off'
                />
                <span className='text-danger'>
                {destiny.length > 3 && citiesState.length === 0 ? (destiny === 'city never can not find it') && destiny : ''}
                </span>

                <datalist id="destiny" >
                        {citiesState.map((city, key) =>
                            <option key={key} value={city.split("_").join(" ")} />
                        )}  
                </datalist>







            { !bool && <>
                <label>Select your city Inter (OPTIONAL)</label>

                <input 
                    list="inter1" 
                    onChange={handleInputChange} 
                    className="form-control mb-2" 
                    name='inter1' 
                    placeholder="inter1"
                    autoComplete='off'
                />
                <span className='text-danger'>
                    {inter1.length > 3 && citiesState.length === 0 ? (inter1 === 'city never can not find it') && inter1 : ''}
                </span>

                <datalist id="inter1" >
                        {citiesState.map((city, key) =>
                            <option key={key} value={city.split("_").join(" ")} />
                        )}  
                </datalist>



                    
                {inters.flat().map((el, i) => (
                    <div key={i+'@#$'}>
                        <label>Select your city Inter {el} </label>

                        <input 
                            list={el} 
                            onChange={handleInputChange} 
                            className="form-control mb-2" 
                            name={el} 
                            placeholder={el}
                            autoComplete='off'
                        />

                        <span className='text-danger'>
                            {citiesState.length === 0 && state[el].length > 3 ? (state[el] === 'city never can not find it') && state[el] : ''}
                        </span> 

                        <datalist id={el} >
                            {citiesState.map((city, key) =>
                                <option key={key} value={city.split("_").join(" ")} />
                            )}  
                        </datalist>
                    </div>))
                }
                
            </>} 
                       

                    

                <hr />

                <div className="form-group mb-2">{/*  */}
                    <input
                        type='date'
                        min={new Date().toISOString().split("T")[0]}
                        className="form-control"
                        placeholder="date"
                        name="date"
                        value={date}
                        onChange={handleInputChange}
                    />
                </div>

                { !bool && 
                <div className="form-group mb-2">
                    <input
                        type='number'
                        min='1'
                        max='100' 
                        //step="any"
                        className="form-control"
                        placeholder="passengers"
                        name="passengers"
                        value={passengers}
                        onChange={handleInputChange}
                    />
                </div>}
            


                <div className="d-grid gap-2">
                    <input 
                        type="submit" 
                        className={bool ? "btnSubmitPost2" : "btnSubmitPost"} 
                        value={bool ? 'Disabled':'Send'} 
                        disabled={bool}
                    />
                </div> 


            </form>
        </div>
    </div>
</div>
  )
}
