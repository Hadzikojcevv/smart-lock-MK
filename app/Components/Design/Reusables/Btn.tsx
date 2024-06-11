import { fontKantumruy_ProMedium } from '../Fonts'

type BtnPropsType = {
    text: string,
    color: 'dark' | 'light'
}

const Btn = ({text, color = 'dark'}:BtnPropsType) => {

    
  return (
    <button className={`w-full py-4 rounded-full text-lg font-semibold tracking-tighter shadow-xl transition-colors ease-in-out  ${color === 'dark' ? "bg-lightDark text-redesignWhite hover:bg-footerDark" : "bg-redesignWhite text-darkText hover:bg-lightestdark"}  ${fontKantumruy_ProMedium.className}`}>
        {text}
    </button>
  )
}

export default Btn