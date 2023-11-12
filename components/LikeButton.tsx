
"use client"

/* REACT */
import { Suspense, useEffect, useState } from "react";

/* APP */
import { apiClient } from "@/lib/fetch";
import { Heart } from "@/icons/Heart";


/* COMPONENT */
interface IProps {
  slug: string
}

export const LikeButton = ( { slug }: IProps ) => {

  const [likes, setLikes] = useState(0);
  
  useEffect( () => {
    
    const getLikePost = async () => {
      try {
        const response = await apiClient(`/post/${slug}/like`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          },
          cache:"no-cache"
        })
        const data = await response.json()
        setLikes(data.likes)
        
      } catch (error) {
        console.log("Cannot retrieve the 'likes' from post ")
        setLikes(0)
      }
    }
    
    getLikePost();
    
  }, [slug])

  const sendLikePost = async () => {

    try {
      const response = await apiClient(`/post/${slug}/like`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        cache: "no-cache",
      })

      if(response.ok){
        setLikes( likes + 1 );
      }

    } catch (error) {
      console.log("Cannot send the 'Like' post action ");
    }

  }
  

  return (
    <div className="flex flex-row gap-2 items-center">
      <button 
        className="shadow-lgx group relative block transform overflow-hidden rounded-lg bg-gradient-to-tl from-white/5 to-white/30 p-1 transition-all duration-300 ease-out hover:scale-[1.2] hover:rounded-[10px] active:scale-100 active:rounded-lg focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 hover:shadow-gray-500/30"
        onClick={sendLikePost}
        >
        <Heart/>
      </button>
      <span className="text-blue-100/50">{likes} likes</span>
    </div>
  )
}
