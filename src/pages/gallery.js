import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FaHome } from 'react-icons/fa';
import { UncontrolledCarousel } from 'reactstrap';
import './page.css';

function Gallery() {

    const items = [
        {
            src: 'img-1/1.jpg',
            key: '1'
        },
        {
            src: 'img-1/2.jpg',
            key: '2'
        },
        {
            src: 'img-1/3.jpg',
            key: '3'
        },
        {
            src: 'img-1/4.jpg',
            key: '3'
        },
        {
            src: 'img-1/5.jpg',
            key: '3'
        },
        {
            src: 'img-1/6.jpg',
            key: '3'
        },
        {
            src: 'img-1/7.jpg',
            key: '3'
        },
        {
            src: 'img-1/8.jpg',
            key: '3'
        },
        {
            src: 'img-1/9.jpg',
            key: '3'
        },
        {
            src: 'img-1/10.jpg',
            key: '3'
        },
        {
            src: 'img-1/11.jpg',
            key: '3'
        },
        {
            src: 'img-1/12.jpg',
            key: '3'
        },
        {
            src: 'img-1/13.jpg',
            key: '3'
        },
        {
            src: 'img-1/14.jpg',
            key: '3'
        },
        {
            src: 'img-1/15.jpg',
            key: '3'
        },
        {
            src: 'img-1/16.jpg',
            key: '3'
        },
        {
            src: 'img-1/17.jpg',
            key: '3'
        },
        {
            src: 'img-1/18.jpg',
            key: '3'
        },
        {
            src: 'img-1/19.jpg',
            key: '3'
        },
        {
            src: 'img-1/20.jpg',
            key: '3'
        },
        {
            src: 'img-1/21.jpg',
            key: '3'
        },
        {
            src: 'img-1/22.jpg',
            key: '3'
        },
        {
            src: 'img-1/23.jpg',
            key: '3'
        },
        {
            src: 'img-1/24.jpg',
            key: '3'
        },
        {
            src: 'img-1/25.jpg',
            key: '3'
        },
        {
            src: 'img-1/26.jpg',
            key: '3'
        },
        {
            src: 'img-1/27.jpg',
            key: '3'
        },
        {
            src: 'img-1/28.jpg',
            key: '3'
        },
        {
            src: 'img-1/29.jpg',
            key: '3'
        },
        {
            src: 'img-1/30.jpg',
            key: '3'
        },
        {
            src: 'img-1/31.jpg',
            key: '3'
        },
        {
            src: 'img-1/32.jpg',
            key: '3'
        },
        {
            src: 'img-1/33.jpg',
            key: '3'
        },
        {
            src: 'img-1/34.jpg',
            key: '3'
        },
        {
            src: 'img-1/35.jpg',
            key: '3'
        },
        {
            src: 'img-1/36.jpg',
            key: '3'
        },
        {
            src: 'img-1/37.jpg',
            key: '3'
        },
        {
            src: 'img-1/38.jpg',
            key: '3'
        },
        {
            src: 'img-1/39.jpg',
            key: '3'
        },
        {
            src: 'img-1/40.jpg',
            key: '3'
        },
        {
            src: 'img-1/41.jpg',
            key: '3'
        },
        {
            src: 'img-1/42.jpg',
            key: '3'
        },
        {
            src: 'img-1/43.jpg',
            key: '3'
        },
        {
            src: 'img-1/44.jpg',
            key: '3'
        },
        {
            src: 'img-1/45.jpg',
            key: '3'
        },
        {
            src: 'img-1/46.jpg',
            key: '3'
        },
        {
            src: 'img-1/47.jpg',
            key: '3'
        },
        {
            src: 'img-1/48.jpg',
            key: '3'
        },
        {
            src: 'img-1/49.jpg',
            key: '3'
        },
        {
            src: 'img-1/50.jpg',
            key: '3'
        },
        {
            src: 'img-1/51.jpg',
            key: '3'
        },
        {
            src: 'img-1/52.jpg',
            key: '3'
        },
        {
            src: 'img-1/53.jpg',
            key: '3'
        },
        {
            src: 'img-1/54.jpg',
            key: '3'
        },
        {
            src: 'img-1/55.jpg',
            key: '3'
        },
        {
            src: 'img-1/56.jpg',
            key: '3'
        },
        {
            src: 'img-1/57.jpg',
            key: '3'
        },
        {
            src: 'img-1/58.jpg',
            key: '3'
        },
        {
            src: 'img-1/59.jpg',
            key: '3'
        },
        {
            src: 'img-1/60.jpg',
            key: '3'
        },
        {
            src: 'img-1/61.jpg',
            key: '3'
        },
        {
            src: 'img-1/62.jpg',
            key: '3'
        },
        {
            src: 'img-1/63.jpg',
            key: '3'
        },
        {
            src: 'img-1/64.jpg',
            key: '3'
        },
        {
            src: 'img-1/65.jpg',
            key: '3'
        },
        {
            src: 'img-1/66.jpg',
            key: '3'
        },
        {
            src: 'img-1/67.jpg',
            key: '3'
        },
        {
            src: 'img-1/68.jpg',
            key: '3'
        },
        {
            src: 'img-1/69.jpg',
            key: '3'
        },
        {
            src: 'img-1/70.jpg',
            key: '3'
        },
        {
            src: 'img-1/71.jpg',
            key: '3'
        },
        {
            src: 'img-1/72.jpg',
            key: '3'
        },
        {
            src: 'img-1/73.jpg',
            key: '3'
        },
        {
            src: 'img-1/74.jpg',
            key: '3'
        },
        {
            src: 'img-1/75.jpg',
            key: '3'
        },
        {
            src: 'img-1/76.jpg',
            key: '3'
        },
        {
            src: 'img-1/77.jpg',
            key: '3'
        },
        {
            src: 'img-1/78.jpg',
            key: '3'
        },
        {
            src: 'img-1/79.jpg',
            key: '3'
        },
        {
            src: 'img-1/80.jpg',
            key: '3'
        },
        {
            src: 'img-1/81.jpg',
            key: '3'
        },
        {
            src: 'img-1/82.jpg',
            key: '3'
        },
        {
            src: 'img/11.jpg',
            key: '3'
        },
        {
            src: 'img-1/83.jpg',
            key: '3'
        },
        {
            src: 'img-1/84.jpg',
            key: '3'
        },
        {
            src: 'img-1/85.jpg',
            key: '3'
        },
        {
            src: 'img-1/86.jpg',
            key: '3'
        },
        {
            src: 'img-1/87.jpg',
            key: '3'
        },
        {
            src: 'img-1/88.jpg',
            key: '3'
        },
        {
            src: 'img-1/89.jpg',
            key: '3'
        },
        {
            src: 'img-1/90.jpg',
            key: '3'
        },
        {
            src: 'img-1/91.jpg',
            key: '3'
        },
        {
            src: 'img-1/92.jpg',
            key: '3'
        },
        {
            src: 'img-1/93.jpg',
            key: '3'
        },
        {
            src: 'img-1/94.jpg',
            key: '3'
        },
        {
            src: 'img-1/95.jpg',
            key: '3'
        },
        {
            src: 'img-1/96.jpg',
            key: '3'
        },
        {
            src: 'img-1/97.jpg',
            key: '3'
        },
        {
            src: 'img-1/98.jpg',
            key: '3'
        },
        {
            src: 'img-1/99.jpg',
            key: '3'
        },
        {
            src: 'img-1/100.jpg',
            key: '3'
        },
        {
            src: 'img-1/101.jpg',
            key: '3'
        },
        {
            src: 'img-1/102.jpg',
            key: '3'
        },
        {
            src: 'img-1/103.jpg',
            key: '3'
        },
        {
            src: 'img-1/104.jpg',
            key: '3'
        },
        {
            src: 'img-1/105.jpg',
            key: '3'
        },
        {
            src: 'img-1/106.jpg',
            key: '3'
        },
        {
            src: 'img-1/107.jpg',
            key: '3'
        },
        {
            src: 'img-1/108.jpg',
            key: '3'
        },
        {
            src: 'img-1/109.jpg',
            key: '3'
        },
        {
            src: 'img-1/110.jpg',
            key: '3'
        },
        {
            src: 'img-1/111.jpg',
            key: '3'
        },
        {
            src: 'img-1/112.jpg',
            key: '3'
        },
        {
            src: 'img-1/113.jpg',
            key: '3'
        },
        {
            src: 'img-1/114.jpg',
            key: '3'
        },
        {
            src: 'img-1/115.jpg',
            key: '3'
        },
        {
            src: 'img-1/116.jpg',
            key: '3'
        },
        {
            src: 'img-1/117.jpg',
            key: '3'
        },
        {
            src: 'img-1/118.jpg',
            key: '3'
        },
        {
            src: 'img-1/119.jpg',
            key: '3'
        },
        {
            src: 'img-1/120.jpg',
            key: '3'
        },
        {
            src: 'img-1/121.jpg',
            key: '3'
        },
        {
            src: 'img-1/122.jpg',
            key: '3'
        },
        {
            src: 'img-1/123.jpg',
            key: '3'
        },
        {
            src: 'img-1/124.jpg',
            key: '3'
        },
        {
            src: 'img-1/125.jpg',
            key: '3'
        },
        {
            src: 'img-1/126.jpg',
            key: '3'
        },
        {
            src: 'img-1/127.jpg',
            key: '3'
        },
        {
            src: 'img-1/128.jpg',
            key: '3'
        },
        {
            src: 'img-1/129.jpg',
            key: '3'
        },
        {
            src: 'img-1/130.jpg',
            key: '3'
        },
        {
            src: 'img-1/131.jpg',
            key: '3'
        },
        {
            src: 'img-1/132.jpg',
            key: '3'
        },
        {
            src: 'img-1/133.jpg',
            key: '3'
        },
        {
            src: 'img-1/134.jpg',
            key: '3'
        },
        {
            src: 'img-1/135.jpg',
            key: '3'
        },
        {
            src: 'img-1/136.jpg',
            key: '3'
        },
        {
            src: 'img-1/137.jpg',
            key: '3'
        },
        {
            src: 'img-1/138.jpg',
            key: '3'
        },
        {
            src: 'img-1/139.jpg',
            key: '3'
        },
        {
            src: 'img-1/140.jpg',
            key: '3'
        },
        {
            src: 'img-1/141.jpg',
            key: '3'
        },
        {
            src: 'img-1/142.jpg',
            key: '3'
        },
        {
            src: 'img-1/143.jpg',
            key: '3'
        }
    ];

    const Example = () => <UncontrolledCarousel items={items} />;

    return (

        <body className="home-g">

            <header className="navBar-g">
                <a className="a" href="/"><FaHome /></a>
            </header>
            <div className="container">

                <div className="carousel-1">

                    <Example />

                </div>

            </div>

        </body>
    )
 

}



export default Gallery;
