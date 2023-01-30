import React, { CSSProperties, useState } from 'react';

import Select, { AriaOnFocus } from 'react-select';

/* const style: { [key: string]: CSSProperties } = {
  blockquote: {
    fontStyle: 'italic',
    fontSize: '.75rem',
    margin: '1rem 0',
  },
  label: {
    fontSize: '.75rem',
    fontWeight: 'bold',
    lineHeight: 2,
  },
}; */

export interface ColourOption {
  readonly label: string;
}


export default function CustomAriaLive({citys, handleSelect}) {

  let citys2 = []
  for (let index = 0; index < citys.length; index++) {
      const element = citys[index];
      citys2.push({label:[element][0]})
  }

  const cityOptions: readonly ColourOption[] = citys2

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectValue, setSelectValue] = useState('');

/*   const handleSelect =(e)=>{
    setSelectValue(e)
  } */

  return (
    <form>
      <label id="aria-label" htmlFor="aria-example-input">
        Select a city
      </label>

      <Select aria-labelledby="aria-label"
        onChange={(e)=>handleSelect(e)}
        inputId="aria-example-input"
        name="aria-live-color"
        onMenuOpen={()=>setIsMenuOpen(true)}
        onMenuClose={()=>setIsMenuOpen(false)}
        options={cityOptions}
      />
    </form>
  );
}