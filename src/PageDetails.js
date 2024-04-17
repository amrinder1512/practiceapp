import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from './useFetch';

const PageDetails = () => {
    const {id}= useParams();
    const{ list, isPending,  error} = useFetch(`http://localhost:8000/list/${id}`);
    const Navigate = useNavigate();
    const handleClick = () => {
        fetch('http://localhost:8000/list/' + list.id,{
            method:'DELETE' 
        })
        .then(()=>{
            Navigate('/');
        })

    }

    return(
        <div className="PageDetails">
            {isPending &&<div>Wait...</div>}
            {error && <div>{error} </div>}
            {list && (
                <article>
                    <h2>{list.title}</h2>
                    <h5>Written by: {list.author}</h5>
                    <p>{list.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>

     );
}
 
export default PageDetails;