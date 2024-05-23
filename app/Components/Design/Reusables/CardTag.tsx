import React from 'react'
import { fontK2dMedium } from '../Fonts'

type CardTagPropsType = {
    text: string,
    color: 'dark' | "light"
}

const CardTag = ({text, color = 'dark'}: CardTagPropsType) => {
  return (
    <div className={`absolute top-0 right-0 px-6 py-3 rounded-tl-none rounded-tr-md rounded-bl-md rounded-br-none shadow-lg ${color === 'dark' ? "bg-lightDark text-redesignWhite" : "bg-redesignWhite text-darkText"}`}>
        <p className={`uppercase text-xl ${fontK2dMedium.className}`}>{text}</p>
    </div>
  )
}

export default CardTag