
import Select from 'react-select';


export interface Option {
  readonly label: string;
}


export default function CustomAriaLive({citys, handleSelect, label}) {

  let citys2 = []

  for (let index = 0; index < citys.length; index++) {
      const element = citys[index];
      citys2.push({label:[element][0]})
  }

  const cityOptions: readonly Option[] = citys2



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