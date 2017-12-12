/**
* @file 电商落地页素材文件
* @author xishengbo(xishengbo@baidu.com)
*/

let productType = 'WBA7221';
let query = window.location.href;
if (query.indexOf('productname=') !== -1) {
    productType = query.split('productname=')[1];
    if (productType.indexOf('&')) {
        productType = productType.split('&')[0];
    }
}
let urlPrefix = '//ecma.bdimg.com/public03/imageplus/ecommerce/img';

const slide = {
    'WTA6091': [
        {width: 375, height: 375, src: `${urlPrefix}/WTA6091/slide/1.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WTA6091/slide/2.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WTA6091/slide/3.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WTA6091/slide/4.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WTA6091/slide/5.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WTA6091/slide/6.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WTA6091/slide/7.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WTA6091/slide/8.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WTA6091/slide/9.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WTA6091/slide/10.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WTA6091/slide/11.jpg`}
    ],
    'WBA7221': [
        {width: 375, height: 375, src: `${urlPrefix}/WBA7221/slide/1.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WBA7221/slide/2.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WBA7221/slide/3.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WBA7221/slide/4.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WBA7221/slide/5.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WBA7221/slide/6.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WBA7221/slide/7.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WBA7221/slide/8.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WBA7221/slide/9.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WBA7221/slide/10.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WBA7221/slide/11.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WBA7221/slide/WBA72211.jpg`},
        {width: 375, height: 375, src: `${urlPrefix}/WBA7221/slide/WBA72212.jpg`}
    ]
};

const detail = {
    'WTA6091': [
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_01.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_02.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_03.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_04.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_05.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_06.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_07.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_08.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_09.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_10.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_11.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_12.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_13.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_14.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_15.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_16.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_17.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_18.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_19.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_20.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_21.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_22.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_23.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_24.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_25.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_26.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WTA6091/detail/WTA60911-12-13_27.jpg`}
    ],
    'WBA7221': [
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/01-00.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/02-01.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/02-02.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/02_03.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/03.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/04.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/05_01.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/05_02.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/05_03.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/06_01.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/06_02.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/06_03.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/06_04.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/07_01.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/07_02.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/07_03.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/07_04.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/08_01.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/08_02.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/08_03.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/08_04.jpg`},
        {width: 375, height: 'auto', src: `${urlPrefix}/WBA7221/detail/08_05.jpg`}
    ]
};

const colorList = {
    'WBA7221': [
        {content: '黑色'},
        {content: '棕色'}
    ],
    'WTA6091': [
        {content: '黑色'},
        {content: '桔黄色'},
        {content: '桔红色'}
    ]
};

const sizeList = {
    'WBA7221': [
        {content: 38},
        {content: 39},
        {content: 40},
        {content: 41},
        {content: 42},
        {content: 43}
    ],
    'WTA6091': [
        {content: 38},
        {content: 39},
        {content: 40},
        {content: 41},
        {content: 42},
        {content: 43}
    ]
};

const prizeList = {
    'WBA7221': 319,
    'WTA6091': 259
};

const nameList = {
    'WBA7221': '红蜻蜓秋季男士真皮透气商务皮鞋',
    'WTA6091': '红蜻蜓春秋套脚男士休闲真皮牛皮鞋'
};

export const productName = productType;
export const slideImgs = slide[productType];
export const detailImgs = detail[productType];
export const productColor = colorList[productType];
export const productSize = sizeList[productType];
export const productPrize = prizeList[productType];
export const productDesc = nameList[productType];
