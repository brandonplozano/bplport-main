export default function Card({className, children}) {
  return (
    <div className={`${className} m-6 bg-white rounded-md shadow-md`}>
        {children}
    </div>
  )
}
