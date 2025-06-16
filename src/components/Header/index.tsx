


 type PropsHeader = {
   title: React.ReactNode;
 }
export const HeaderEncontro = ({title}: PropsHeader) => {
  return (
    <h1 className="text-4xl font-extrabold mb-10 text-center text-neutral-800">
          {title}
      </h1>
  )
}
