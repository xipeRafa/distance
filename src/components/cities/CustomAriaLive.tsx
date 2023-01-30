
import Select from 'react-select';


export interface Option {
  readonly label: string;
}


export default function CustomAriaLive({cities, handleSelect, label}) {

  let cities2 = []

  for (let index = 0; index < cities.length; index++) {
      const element = cities[index];
      cities2.push({label:[element][0]})
  }

  const cityOptions: readonly Option[] = cities2



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