export default function SearchBar(props) {
   
   return (
      <div>
         <input type='search' />
         <button onClick={() =>props.onSearch("ID: 1")}>Agregar</button> 
      </div>
   );
}
