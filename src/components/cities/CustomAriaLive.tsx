
import Select from 'react-select';


export interface Option {
   label: string;
   e?:HTMLElementEventMap | null
   target?:string
}

type PropsSelectFinder = {
  cities:any,
  handleSelect:Function, 
  label:String
}

export default function CustomAriaLive({cities, handleSelect, label}:PropsSelectFinder):JSX.Element {

  let cities2:Option[] = []

  for (let index = 0; index < cities.length; index++) {
      const element = cities[index];
      cities2.push({label:[element][0]})
  }

  const cityOptions: Option[] = cities2

  return (
    <>
      <label>
        Select your city {label}
      </label>

      <Select aria-labelledby="aria-label"
        onChange={(e)=>handleSelect(e)}
        options={cityOptions}
      />
    </>
  );
}