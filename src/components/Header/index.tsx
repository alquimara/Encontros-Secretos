import React from 'react'


 type PropsHeader = {
   title: string
 }
export const HeaderEncontro = ({title}: PropsHeader) => {
  return (
    <><h1 className="text-4xl font-extrabold mb-10 text-center text-pink-700">
          {title}
      </h1><p className="text-center text-pink-600 mb-10 text-lg max-w-xl mx-auto">
              Descubra encontros únicos e surpreendentes. Clique em uma categoria para começar.
          </p></>
  )
}
