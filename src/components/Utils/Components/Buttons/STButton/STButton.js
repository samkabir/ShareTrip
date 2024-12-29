'use client';

import GetIcon from '@/utils/GetIcon/GetIcon'

const STButton = ({text="", styles, onClick, iconRight, iconRightStyles="w-5 h-5", iconLeft, iconLeftStyles="w-5 h-5", textStyles, onClickIconRight, onClickIconLeft}) => {
  return (
    <div className={styles} onClick={()=>onClick && onClick() }>
        {iconLeft && <div className='flex justify-center items-center'> <GetIcon name={iconLeft} className={iconLeftStyles} onClick={()=> onClickIconLeft && onClickIconLeft()} /> </div>}
        <span className={textStyles}>{text}</span>
        {iconRight && <div className='flex justify-center items-center'><GetIcon name={iconRight} className={iconRightStyles} onClick={() => onClickIconRight && onClickIconRight()} /> </div>}
    </div>
  )
}

export default STButton;