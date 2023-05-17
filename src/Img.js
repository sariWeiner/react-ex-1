import { useEffect, useState, useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"





const Img = () => {
    const [arr, setArr] = useState([])
    const [ isPending ,startTransition] = useTransition();



    useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/photos')
                .then(response => {
                    setArr(response.data); 
                })
                .then(()=>{
                    startTransition(()=>{})
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        
    }, [startTransition])


    return (
        <>
            <div id="allProd">
                {isPending ? (
                    <div id="loading">Loading...</div>
                ) : (
                        <ul>
                            {arr.map((item, index) => <li key={index} className="toyInList"  >
                                <h3>{item.title}</h3>
                                <img className="img" src={item.url} />

                            </li>)}
                        </ul>
                    )}
            </div>
        </>
    );
}

export default Img;
