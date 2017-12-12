/**
* @file 电商落地页入口文件
* @author xishengbo(xishengbo@baidu.com)
*/

import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './Style/ecommerce.less';
import {Image, Carousel, DescComponent, FromWrapper, FloatBar} from './ecommerce_components.js';
import {slideImgs, detailImgs, productName} from './ecommerce_config.js';
const hmt = window._hmt;
console.log("afadfadfadsffas")
ReactDOM.render(
    <div className="container">
        <Carousel imgs={slideImgs} />
        <DescComponent />
        <div className="image-list">
            {
                detailImgs.map((item, idx) => {
                    return <Image key={idx} elapsed={item} src={item.src} />;
                })
            }
        </div>
        <FromWrapper />
        <FloatBar />
    </div>
    ,
    document.getElementById('app')
);

// 百度统计
window.onload = function () {
    hmt.push(['_setAccount', '6696e3b6d0dc67f052cd1771bf5f9ca1']);
    hmt.push(['_trackEvent', productName, 'load']);
    hmt.push(['_setAccount', '64fa8db0d13bd0086a966803ad5c646d']);
    hmt.push(['_trackEvent', productName, 'load']);
};
