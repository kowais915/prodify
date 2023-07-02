import {useState, useEffect} from 'react';
import CardComp from './CardComp';


const Main = () => {
    const [products, setProducts ] = useState({});

    useEffect(()=>{
        const getAllData = async () =>{
            const data = await fetch("https://fakestoreapi.com/products");
            const resp = data.json();
            console.log(resp);
            return resp;
        } 

        getAllData()
        .then((data)=>{
           setProducts(data);
        });
    },[])


    return ( 
        <div>
            <h1>This is the main page.</h1>
            <CardComp/>
            

        </div>
     );
}
 
export default Main;