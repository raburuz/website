"use client"

export const BackToTopButton = () => {
  return (
    <>
      <button 
        className="text-sm text-blue-100/30 hover:text-blue-100/60"
        onClick={()=>{ window.scroll(0,0)}}
      >Back to top</button>
    </>
  )
}
