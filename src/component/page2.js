import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from "./ScrollToTop";
import '../style.css';

function Imagedata(){
    var img0 = require('./doge/IMG_2124.JPG')
    var img1 = require('./doge/IMG_2125.JPG')
    var img2 = require('./doge/IMG_2126.JPG')
    var img3 = require('./doge/IMG_2127.JPG')
    var img4 = require('./doge/IMG_2128.JPG')
    var img5 = require('./doge/IMG_2219.JPG')
    var img6 = require('./doge/IMG_2221.JPG')
    var img7 = require('./doge/IMG_2222.JPG')
    var img8 = require('./doge/IMG_2223.JPG')
    var img9 = require('./doge/IMG_2224.JPG')
    var img10 = require('./doge/IMG_2225.JPG')
    var img11 = require('./doge/IMG_2226.JPG')

    return (
        <div>
            <body>

                <div id="myModal-img" class="modal" >
                    <div class="modal-content-img">
                        <img id="img01" alt="temp_img"></img>
                    </div>
                </div>


                <div class="row">

                    <div class="img_disp">
                        <img src={img0.default} alt=""></img>
                    </div>

                    <div class="img_disp">
                        <img src={img1.default} alt=""></img>
                    </div>

                    <div class="img_disp">
                        <img src={img2.default} alt=""></img>
                    </div>
                    
                    <div class="img_disp">
                        <img src={img11.default} alt=""></img>
                    </div>

                </div>

                <div class="row">

                    <div class="img_disp">
                        <img src={img4.default} alt=""></img>
                    </div>
                    
                    <div class="img_disp">
                        <img src={img5.default} alt=""></img>
                    </div>

                    <div class="img_disp">
                        <img src={img6.default} alt=""></img>
                    </div>

                    <div class="img_disp">
                        <img src={img7.default} alt=""></img>
                    </div>

                </div>

                <div class="row">

                    <div class="img_disp">
                        <img src={img8.default} alt=""></img>
                    </div>

                    <div class="img_disp">
                        <img src={img9.default} alt=""></img>
                    </div>

                    <div class="img_disp">
                        <img src={img10.default} alt=""></img>
                    </div>

                    <div class="img_disp">
                        <img src={img3.default} alt=""></img>
                    </div>
                </div>
                
                <ScrollToTop/>

            </body>
        </div>
    )
}

export default Imagedata;