import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllImges } from "./ButtonSlice";





const Img = () => {
    let arr = useSelector(s => s.image.imgArr);//כך שולפים מהסטייט
    // let status = useSelector(s => s.product.status)
    let disp = useDispatch()//מחזיר פונקציה שמעכשיו על ידה נוכל להשפיע על הסטייט
    // let [flag, setFlag] = useState(false)


    useEffect(() => {
        // if (status === "idle")
            disp(fetchAllImges())
    }, [])

    // const [number, setNumber] = useState(0);
    // let a = Number(number)

    // function onClickAdd(item, qtyy) {
    //     disp(addOrder({ ...item, qty: qtyy }))
    //     setFlag(true)
    //     setTimeout(() => { setFlag(false) }, 3000)

    // }

    return (
        <>
            <div id="allProd">
                {arr && <ul>
                    {/* {arr.map(item => <li key={item.id}>{item.name}</li>)} */}
                    {arr.map((item, index) => <li key={index} className="toyInList"  >
                        <h3>{item.title}</h3>
                        <img class="img" src={item.url}/>
                        {/* <input type="text"  onChange={(e) => { setNumber(e.target.value)}} /> */}
                        {/* <input type="button" value="הוסף לסל" onClick={(e)=> {onClickAdd({item})}}/> */}
                    </li>)}
                </ul>}
                {/* {flag && <SmallBasket />} */}
            </div>
        </>
    );
}

export default Img;
