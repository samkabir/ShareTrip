import GetIcon from '@/utils/GetIcon/GetIcon'

const STButton = ({text="", styles, onClick, iconRight, iconRightStyles="w-5 h-5", iconLeft, iconLeftStyles="w-5 h-5", textStyles, onClickIconRight, onClickIconLeft}) => {
  return (
    <div className={styles} onClick={()=>onClick && onClick() }>
        {iconLeft && <GetIcon name={iconLeft} className={iconLeftStyles} onClick={()=> onClickIconLeft && onClickIconLeft()} />}
        <span className={textStyles}>{text}</span>
        {iconRight && <GetIcon name={iconRight} className={iconRightStyles} onClick={() => onClickIconRight && onClickIconRight()} />}
    </div>
  )
}

export default STButton;