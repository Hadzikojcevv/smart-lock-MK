import React from 'react'

type SectionPropsType = {
    children: JSX.Element,
    bgColor: string
}

const Section = ({children, bgColor = '#FFFFFF'}:SectionPropsType) => {
  return (
    <section  style={{backgroundColor: bgColor ?? '#FFFFF'}}>
        <div className={`w-11/12 lg:w-9/12 m-auto py-4 md:py-8 lg:py-16`}>
            {children}

        </div>
    </section>
  )
}

export default Section