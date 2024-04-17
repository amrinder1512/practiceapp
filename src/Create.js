import {  useState} from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const[ title, setTitle]=useState('');
    const[ author, setAuthor]=useState('Amrinder Singh');
    const[ body, setBody]=useState('');
    const[ isPending, setIsPending]= useState(false);
    const navigate = useNavigate();
     
    const handleSubmit=(e)=>{
        e.preventDefault();
        const list ={title,author,body};
        setIsPending(true);
        
        fetch('http://localhost:8000/list',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(list)
        })
        .then(()=>{
            console.log("added")
            setIsPending(false);
            navigate("/")
        });
        

    }
    return (  
        <div className="create">
            <h2>Add a New Page</h2>
            <form  onSubmit={handleSubmit}>
                <label >Page Title:</label>
                <input type="text" required  value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label >Page Author:</label>
                <select value={author} onChange={(e)=> setAuthor (e.target.value)}>
                    <option value="Amrinder Singh">Amrinder Singh</option>
                    <option value="Rahul">Rahul</option>
                    <option value="Sahil">Sahil</option>
                    <option value="Deep">Deep</option>
                    <option value="Aman">Aman</option>
                </select>
                <label >Page Body:</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                {!isPending && <button >Add Page</button>}
                { isPending && <button disabled >Adding the Page....</button>}
            </form>
        </div>

    );
}
 
export default Create;