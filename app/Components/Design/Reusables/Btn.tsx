import { fontKantumruy_ProMedium } from '../Fonts'

type BtnPropsType = {
    text: string,
    color: 'dark' | 'light'
}

const Btn = ({text, color = 'dark'}:BtnPropsType) => {

    
  return (
    <button className={`w-full py-4 rounded-full text-xl uppercase tracking-tighter shadow-xl  ${color === 'dark' ? "bg-lightDark text-redesignWhite" : "bg-redesignWhite text-darkText"} ${fontKantumruy_ProMedium.className}`}>
        {text}
    </button>
  )
}

export default Btn