import React from 'react';
import ScrollToTop from './ScrollToTop';
import '../style.css';

function Videodata() {
    return ( 
    <div>
        <body>

            <div id="myModal-vid" class="modal">
                <div class="modal-content-vid">
                    <iframe id="vid01"></iframe>
                </div>
            </div>


            <div class="row">

                <div class="vid_disp">

                    <iframe id="vid0" src="https://www.youtube.com/embed/D0-JbxX209g" frameborder="0" onload="OpenVid(0)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div class="vid_disp">
                    <iframe id="vid1" src="https://www.youtube.com/embed/ZYAzo5OdqHM" frameborder="0" onload="OpenVid(1)" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div class="vid_disp">
                    <iframe id="vid2"  src="https://www.youtube.com/embed/QrR_gm6RqCo" frameborder="0" onload="OpenVid(2)" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div class="vid_disp">
                    <iframe id="vid3"  src="https://www.youtube.com/embed/h6fcK_fRYaI" frameborder="0" onload="OpenVid(3)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div class="row">

                <div class="vid_disp">
                    <iframe id="vid4"  src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" onload="OpenVid(4)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div class="vid_disp">
                    <iframe id="vid5"  src="https://www.youtube.com/embed/H3LlT8bxvIs" frameborder="0" onload="OpenVid(5)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div class="vid_disp">
                    <iframe id="vid6"  src="https://www.youtube.com/embed/UmuSilXskzs" frameborder="0" onload="OpenVid(6)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div class="vid_disp">
                    <iframe id="vid7"  src="https://www.youtube.com/embed/MAlSjtxy5ak" frameborder="0" onload="OpenVid(7)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div class="row">

                <div class="vid_disp">
                    <iframe id="vid8"  src="https://www.youtube.com/embed/9-XbXBq8cl8" frameborder="0" onload="OpenVid(8)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div class="vid_disp">  
                    <iframe id="vid9"  src="https://www.youtube.com/embed/WX0xWJpr0FY" frameborder="0" onload="OpenVid(9)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div class="vid_disp">
                    <iframe id="vid10"  src="https://www.youtube.com/embed/vGQQbulRUjY" frameborder="0" onload="OpenVid(10)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div class="vid_disp">
                    <iframe id="vid11"  src="https://www.youtube.com/embed/SEaFHPvuE6Y" frameborder="0" onload="OpenVid(11)" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>    
            </div>

            <ScrollToTop/>

        </body>
    </div>
    )
}

export default Videodata