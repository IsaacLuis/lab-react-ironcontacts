
import contacts from "./contacts.json";

const MovieList = ({})  =>  {
    const [list, setList] = useState(contacts);
 console.log('State',movies)

  return (
    <div>
      <h2>Movie List</h2>

      {lists.map(movie => {
        return (
         <Movie  key={movie._id}   movie ={lists}></Movie>
        );
      })}

    </div>
  );

}



export default List