
"use client"

/* HOOK */
export const usePostAnalytics = () => {

  const sendViewPost = async ( slug: string ) => {

    try {
      await fetch(`/api/post/${slug}/view`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      })
      
    } catch (error) {
      console.log("Cannot send 'VIEW' action post");
    }

  }

  const sendLikePost = async ( slug: string ) => {
    try {
      await fetch(`/api/post/${slug}/like`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      })
      
    } catch (error) {
      console.log("Cannot send 'LIKE' action post");
    }
  }

  const getPostData = async ( slug: string ) => {

    try {
      await fetch(`/api/post/${slug}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      })
      
    } catch (error) {
      console.log("Cannot retrieve post data");
    }

  }

  return {
    sendViewPost,
    sendLikePost,
    getPostData, 
  }

}
