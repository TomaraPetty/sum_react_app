import React from 'react'

const SelectCSV = (props:{onLoadFile: (files:FileList | null)=> void}) => (
    <input
    type="file"
    onChange={(e:React.ChangeEvent<HTMLInputElement>) => props.onLoadFile(e.target.files)} />
   );

export default SelectCSV;