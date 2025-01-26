import React from 'react';
import Button from './Button';
import { BUTTON_LIST_SUGGESTION } from '../utilities/constants';


const ButtonList = () => {
  return (
    <div className='flex m-2'>
      {BUTTON_LIST_SUGGESTION.map((item,index)=>
        <Button key={index} name={item}/>
      )}
    </div>
  )
}

export default ButtonList;