import React from 'react'
import { Compare } from './ui/Compare';

const Comparison = () => {
  return (
    <div className='flex justify-center'>
      <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4 w-[837px] justify-center">
        <Compare
          firstImage="/pic1.jpeg"
          secondImage="pro1.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[100px] md:h-[500px] md:w-[800px]"
          slideMode="hover"
        />
      </div>
    </div>
  );
}

export default Comparison