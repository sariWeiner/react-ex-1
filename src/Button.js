import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from 'react';
import Img from './Img'





const Button = () => {
    // let arr = useSelector(s => s.image.imgArr);//כך שולפים מהסטייט
    // let disp = useDispatch()//מחזיר פונקציה שמעכשיו על ידה נוכל להשפיע על הסטייט
    let navigate = useNavigate();
   console.log(React.version);

    return (
        <>
            <div >           
               <button id="allImges" onClick={() => navigate('/img')}>להצגת התמונות</button>
            </div>
        </>
    );
}

export default Button;
