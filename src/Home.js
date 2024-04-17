
import Datalist from "./DataList";
import useFetch from "./useFetch";


const Home = () => {
  // // const handleclick = () =>{
  // //     console.log('Amrinder is Coding here..' )
  // // }
  // const handleclickagain = (name) => {
  //     console.log('Hello' + name);

  // };
  // // let name = 'amrinder';
  // const [name, setName] = useState('Amrinder');
  // const [age, setAge] = useState(30);
  // const handleclick = () => {
  //     setName('Rahul');
  //     setAge('50');
  // };
  const{list, isPending, error, setList} = useFetch('http://localhost:8000/list');

 
  const handleDelete = (id) => {
    const newList = list.filter((list) => list.id !== id);
    setList(newList);
  };
  // useEffect(() => {
  //   console.log("use Effect data");
  //   console.log(list);
  // }, [list]);

  

  return (
    <div className="home">
      {/* <h4>This is Home Page.</h4>
            <p>{name} is {age} years old.</p>
            <button type="button" onClick={handleclick}>Click me.</button>
            <button type="button" onClick={() => handleclickagain('mario')}>Click here again.</button><br /><br /> */}
      { error && <div>{error}</div> }
      { isPending && <div><h2>Loading.....</h2 ></div>}
      {list && <Datalist Amr={list} handleDelete={handleDelete} />}
      {/* <h2>
        <u>Changes And Filter of Props</u>{" "}
      </h2> */}
      {/* <Datalist Amr={list.filter((list) => list.author === "Amrinder Singh")} /> */}
      {/* <button type="button" onClick={() => setUser("Amrinder")}>
        Game Changer
      </button>
      <p>{user}</p> */}
    </div>
  );
};

export default Home;
