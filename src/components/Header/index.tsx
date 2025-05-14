import React from 'react'


 type PropsHeader = {
   title: string
 }
export const HeaderEncontro = ({title}: PropsHeader) => {
  return (
    <h1 className="text-4xl font-extrabold mb-10 text-center text-pink-700">
       {title}
      </h1>
  )
}
