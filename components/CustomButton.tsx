"use client";
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButton = ({title,containerStyles,textStyles, rightIcons,handleClick, btnType}:CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={"button" || btnType}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick} >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {
              rightIcons && (
                <div className='relative w-6 h-6'>
                  <Image
                    src={rightIcons}
                    alt="right Icon"
                    className='object-contain'
                    fill 
                    />
                </div>
              )
            }
    </button>
  )
}

export default CustomButton