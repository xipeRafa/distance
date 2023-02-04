import { useState } from 'react'
import './postForm.css';
import CustomAriaLive from './CustomAriaLive';
import { useNavigate } from 'react-router-dom';

type PropsPostForm = { 
    postCity: Function,
    cities:any, 
    SweetAlert:Function 
    postCitySearch:Function
}

export const PostForm = ({postCity, cities, SweetAlert, postCitySearch}:PropsPostForm):JSX.Element => {

    let navigateTo = useNavigate()

    const [bool, setBool]=useState<boolean>(true) 

    const [boolInput, setBoolInput]=useState<boolean>(false) 
    const [error, setError]=useState<string>('city never can not find it')

    type State = {
        origen:string,
        inter:string,
        destiny:string,
        date:string,
        passengers:string
    } 

    const [state, setState]=useState<State>({
        origen: '',
        inter: '',
        destiny:'',
        date:'',
        passengers:''
    })


    const { origen, destiny, date, inter, passengers } = state

    //2023-02-10
    //var birthday = new Date(1994, 12, 10)
    
    let year = Number(date.slice(0, 4))
    let mont = Number(date.slice(5, 7))
    let day  = Number(date.slice(8,10))
    
    let dateText = new Date(year, mont-1, day)
    let milisecondsDate = new Date().setTime(dateText.getTime())
    
    //console.log('milisecondsDate :>> ', milisecondsDate);

    
    type FormElement = React.FormEvent<HTMLFormElement>
  

    const onSubmitCities = (event:FormElement): void => {
        event.preventDefault();

        if(origen.trim() === '' || destiny.trim() === '' || date.trim() === '' || passengers.trim() === '' ){
            SweetAlert(['An Empty Field'])
            return
        }

        if( passengers.includes('e') || passengers.includes('.') || Number(passengers)<1 || Number(passengers)>100){
            SweetAlert(['no mopre that 100 or lees than 0', 'select the Right Number of passengers', 'warning'])
            return
        }

        if( Number(passengers)>100 ){
            SweetAlert(['no more that 100.', 'select the Right Number of passengers', 'warning'])
        }  
     
        postCity(state)

        setTimeout(() => {
           navigateTo('/results')
        }, 1000);

        localStorage.done='true'
    }




    type Target = {
        target:{
            name:string
            value:string
        }
    }
    

    const handleInputChange = (target:Target): void => {
        const { name, value } = target.target;
        setState({ ...state, [name]: value })

        if(name !== 'date' && name !== 'passengers'){  // run jun in cities
            if(value.length > 3 && cities.length === 0){
                setState({ ...state, [name]: error })
            }
            if(value.length > 0){
                postCitySearch(value)
            }
        }
        
        if(origen.trim() !== '' && destiny.trim() !== ''){
            setBool(false) 
            setBoolInput(true)
        }
    }

    const [inters, setInters]=useState([])


     const addObject =()=>{
        let keys = Object.keys(state)
        let newK = 'inter'.concat(keys.length -3)
        state[newK] = ''

        setInters([...inters, [newK]])
    } 

console.log('state', inters.flat())
console.log('state', state)
  return (
    <div className="container login-container">
    <div className="row">
        <div className="col-md-6 login-form-1 mt-4">

          

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
                    {origen.length > 3 && cities.length === 0 ? (origen === 'error no coincidences') && origen : ''}
                </span>

                <datalist id="origen" >
                        {cities.map((city, key) =>
                            <option key={key} value={city} />
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
                {destiny.length > 3 && cities.length === 0 ? (destiny === 'city never can not find it') && destiny : ''}
                </span>

                <datalist id="destiny" >
                        {cities.map((city, key) =>
                            <option key={key} value={city} />
                        )}  
                </datalist>



                <label>Select your city Inter (optional) </label>

                <input 
                    list="inter" 
                    onChange={handleInputChange} 
                    className="form-control mb-2" 
                    name='inter' 
                    placeholder="inter"
                    autoComplete='off'
                />
                 <span className='text-danger'>
                    {inter.length > 3 && cities.length === 0 ? (inter === 'city never can not find it') && inter : ''}
                </span>

                <datalist id="inter" >
                        {cities.map((city, key) =>
                            <option key={key} value={city} />
                        )}  
                </datalist>


                { boolInput && <>
                <p><button onClick={addObject} className='btn btn-info'>+</button> </p>

                        {inters.flat().map((el, i) => (
                            <div key={i+'@#$'}>
                            <input 
                            list={el} 
                            onChange={handleInputChange} 
                            className="form-control mb-2" 
                            name={el} 
                            placeholder={el}
                            autoComplete='off'
                        />
                          <span className='text-danger'>
                            {cities.length === 0 ? (el === 'city never can not find it') && el : ''}
                        </span> 
                        <datalist id={el} >
                            {cities.map((city, key) =>
                                <option key={key} value={city} />
                            )}  
                        </datalist>
                        </div> 
                        ))}
                
                </>}
                       

                    

                <hr />

                <div className="form-group mb-2">{/*  */}
                    <input
                        type='date'
                        className="form-control"
                        placeholder="date"
                        name="date"
                        value={date}
                        onChange={handleInputChange}
                    />
                </div>

                { boolInput && 
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
                        className={!bool ? "btnSubmitPost" : "btnSubmitPost2"} 
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
