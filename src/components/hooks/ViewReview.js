import { useEffect, useState } from "react"

const useReview = () =>{
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('')
        .then(res=>res.json())
        .then(data=>setReview())
    },[])
    return [review, setReview]
}
export default useReview;