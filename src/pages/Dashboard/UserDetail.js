import React, { useEffect , useState} from 'react'
import { Link , useParams , useLocation} from 'react-router-dom';

function UserDetail() {
    const { id } =  useParams();
    const location = useLocation();
   const [user, setUser] = useState(null);
 


     useEffect(() => {

if(!user?.id){
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((res) => res.json())
  .then((data) => setUser(data));
}
}, [id, user]);


   
    
  return (
    <div>
        <h2>Kullanıcı  Detayları</h2>
  

{ location.state &&<pre>
    {
        JSON.stringify(location.state, null, 2)
    }
</pre>}


<Link to={`/users/${Number(id) + 1 }`}>Sonraki Kullanıcı</Link>
</div>

  )
}

export default UserDetail