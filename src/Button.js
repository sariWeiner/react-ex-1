import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllImges } from "./ButtonSlice";
import { useNavigate } from "react-router-dom";
import Img from './Img'





const Button = () => {
    let arr = useSelector(s => s.image.imgArr);//כך שולפים מהסטייט
    let disp = useDispatch()//מחזיר פונקציה שמעכשיו על ידה נוכל להשפיע על הסטייט
    let navigate = useNavigate();


    return (
        <>
            <div >              
               <button id="allImges" onClick={() => navigate('/img')}>להצגת התמונות</button>
            </div>
        </>
    );
}

export default Button;
