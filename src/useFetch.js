import { useState, useEffect } from "react";


const useFetch =(url)=>{
    const [list, setList] = useState(null );
    
    const [isPending, setIsPending] = useState(true);
    const[error, setError]= useState(null);

    useEffect(() => {
      // const abortCont = new AbortController();

        setTimeout(() => {
        fetch(url)
        .then(res =>{
          if
            (!res.ok){
              throw Error("Could not fetch the data from server")
            }
           return res.json()
        })
        .then((list)=>{
          setList(list);
          setIsPending(false);
          setError(null);
        })
        .catch(err=>{
        
            setIsPending(false);
            setError(err.message);
            
          })
      }, 1000);
   
      }, [url]);
      return{list,  isPending, error};
}


export default useFetch;