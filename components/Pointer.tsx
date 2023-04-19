import { useEffect, useState } from "react"

export const Pointer = () => {
  const [axis, setAxis] = useState<any>(null)
  useEffect(() => {
    document.addEventListener('mousemove', (e)=>{
      const axisX = e.x;
      const axisY = e.y;
      setAxis({
        x:axisX,
        y:axisY,
      })
      console.log(axisX, axisY)
    })
  }, [])
  
  return (
    <>
      {
        axis && (
          <div
          className="fixed flex items-center justify-center cursor-none"
            style={{top: axis.y, left:axis.x }}  
          >
            <div 
              className="absolute -top-4 w-8 h-8 flex justify-center items-center rounded-full bg-white/25"
            >
              <span className="text-white text-[6px]">Δ</span>
            </div>
          </div>
        )
      }
    </>
  )
}
