import React from 'react'
import { fontK2dMedium } from '../Fonts'

type CardTagPropsType = {
    text: string,
    color: 'dark' | "light"
}

const CardTag = ({text, color = 'dark'}: CardTagPropsType) => {
  return (
    <div className={`absolute top-2 right-2 px-6 py-3 rounded-md shadow-lg ${color === 'dark' ? "bg-lightDark text-redesignWhite" : "bg-redesignWhite text-darkText"}`}>
        <p className={`uppercase text-xl ${fontK2dMedium.className}`}>{text}</p>
    </div>
  )
}

export default CardTag