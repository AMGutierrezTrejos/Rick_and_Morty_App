const error404 = "https://retouchcenter.org/wp-content/uploads/2019/04/error-4044.jpg";

export default function NotFound(props) {

  return (
     <div>
         <h1>Page Not Found</h1>
         <img src={error404} alt="Not Found" />
     </div>
  );
}