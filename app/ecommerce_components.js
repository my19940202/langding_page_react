/**
* @file 电商落地页需要的各类组件
* @author xishengbo(xishengbo@baidu.com)
*/

import React, {Component} from 'react';
import $ from 'jquery';
import {districts} from './ecommerce_data.js';
import {productColor, productSize, productPrize, productDesc, productName} from './ecommerce_config.js';
const hmt = window._hmt;

export class Image extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let imgClassname = this.props.name || 'img';
        let src = this.props.src || '';
        let wrapperStyle = Object.assign({overflow: 'hidden'}, (this.props.elapsed || {}));
        let imgStyle = {
            width: this.props.elapsed.width,
            height: this.props.elapsed.height
        };
        return (
            <div style={wrapperStyle}>
                <img
                    className = {imgClassname}
                    src       = {src}
                    style     = {imgStyle}
                />
            </div>
        );
    }
}

// 图片轮播组件
export class Carousel extends Component {
    constructor(props) {
        super(props);
        this.touchStart = 0;
        this.touchEnd = 0;
        this.touchNow = 0;
        this.imgLength = this.props.imgs.length;
        this.idx = 0;
        this.state = {
            idx: 0
        };
    }

    render() {
        let imgs = this.props.imgs;
        let me = this;
        return (
            <div className="carousel-wrapper"
                onTouchStart={me.handleSlide.bind(me, 'start')}
                onTouchMove={me.handleSlide.bind(me, 'move')}
                onTouchEnd={me.handleSlide.bind(me, 'end')}
            >
                <CarouselInner imgs={imgs} index={this.state.idx} />
                <CarouselBar imgs={imgs} index={this.state.idx} />
            </div>
        );
    }

    handleSlide(state, e) {
        let point = e.touches ? e.touches[0] : e;
        let me = this;
        switch (state) {
            case 'start':
                me.touchStart = point.pageX;
                break;
            case 'end':
                if (me.touchStart - me.touchEnd > 10) {
                    me.idx = (me.idx === me.imgLength - 1) ? me.imgLength - 1 : me.idx + 1;
                } else {
                    me.idx = (me.idx === 0) ? 0 : me.idx - 1;
                }
                me.setState({idx: me.idx});
                break;
            case 'move':
                me.touchEnd = point.pageX;
                break;
            default:
                break;
        }
    }
}

export class CarouselBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: 0,
        };
    }
    render() {
        let style = {
            width: '100%',
            height: 20,
            textAlign: 'center',
            position: 'absolute',
            bottom: 10,
            left: 0
        }
        let me = this;
        return (
            <div className="carousel-bar" style={style}>
                <ul>
                    {
                        me.props.imgs.map(function (item, index) {
                            let name = '';
                            if (index === me.props.index) {
                                name = 'active';
                            }
                            return (
                                <li key={index}
                                    className={name}>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export class CarouselInner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let offset = -375 * this.props.index;
        let me = this;
        let style = {
            width: 375 * this.props.imgs.length,
            height: 375,
            position: 'absolute',
            left: 0,
            top: 0,
            overflow: 'hidden',
            transform: `translate3d(${offset}px, 0px, 0px)`,
            transition: 'transform ease 0.8s'
        };
        return (
            <div className="carousel-inner"
                style={style}>
                {
                    me.props.imgs.map(function (item, index) {
                        let imgStyle = {
                            width: item.width,
                            height: item.height,
                            display: 'inline-block'
                        }
                        return <Image key={index} src={item.src} elapsed={imgStyle} />;
                    })
                }
            </div>
       );
    }
}

export class FromWrapper extends Component {
    constructor(props) {
        super(props);
        let me = this;
        this.colorList = productColor;
        this.sizeList = productSize;
        me.setProvince();
        this.state = {
            submit: false,
            colorList: me.colorList,
            sizeList: me.sizeList,
            number: 1,
            prize: productPrize,
            cityList: [],
            countyList: [],
            color: '',
            size: '',
            province: 0,
            city: 0,
            county: 0
        };
    }

    render() {
        let style = {
            width: 375,
            height: 'auto'
        };
        let me = this;
        let maskStyle = {
            width: 375,
            height: 1000,
            backgroundColor: '#ddd',
            position: 'fixed',
            textAlign: 'center',
            left: 0,
            top: 0,
            display: me.state.submit ? 'block' : 'none'
        };

        return (
            <div className="ecommerce-form" style={style}>
                <div className="form-title">订单信息</div>
                <div className="form-select">
                    <div className="select-wrapper">
                        <p>颜色</p>
                        <div className="select-items">
                            {
                                me.state.colorList.map(function (item, idx) {
                                    return (
                                        <span key={idx} className={item.name || ''}
                                            onClick={me.changeItem.bind(me, 'color', idx)}>
                                            {item.content}
                                        </span>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="form-select">
                    <div className="select-wrapper">
                        <p>尺码</p>
                        <div className="select-items">
                            {
                                me.state.sizeList.map(function (item, idx) {
                                    return (
                                        <span key={idx} className={item.name || ''}
                                            onClick={me.changeItem.bind(me, 'size', idx)}>
                                            {item.content}
                                        </span>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="form-select">
                    <div className="select-wrapper select-wrapper-small">
                        <label>购买数量:</label>
                        <input type="text" ref="number" onChange={me.setNumber.bind(me)} defaultValue="1" />
                    </div>
                </div>
                <div className="form-select">
                    <div className="select-wrapper select-wrapper-small">
                        <label>金额:</label>
                        <input type="text" ref="amount" value={me.state.prize} />
                    </div>
                </div>
                <div className="form-select">
                    <div className="select-wrapper select-wrapper-small">
                        <label>收货人:</label>
                        <input type="text" ref="receiver" />
                    </div>
                </div>
                <div className="form-select">
                    <div className="select-wrapper select-wrapper-small">
                        <label>手机号:</label>
                        <input type="tel" ref="tel" />
                    </div>
                </div>
                <div className="form-select">
                    <div className="select-wrapper select-wrapper-small">
                        <div className="check-box">
                            <div className="title">所在地区:</div>
                            <div className="check-box-item">
                                <select onChange={me.setCity.bind(me)} value={me.state.province}>
                                    <option value="0">选择省</option>
                                    {
                                        me.provinceList.map(function (item, idx) {
                                            return (
                                                <option key={idx}
                                                    value={item.id}>
                                                    {item.name}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                            <div className="check-box-item">
                                <select onChange={me.setCounty.bind(me, 'city')} value={me.state.city}>
                                    {
                                        me.state.cityList.map(function (item, idx) {
                                            return (
                                                <option key={idx}
                                                    value={item.id}>
                                                    {item.name}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                            <div className="check-box-item">
                                <select onChange={me.setCounty.bind(me, 'county')} value={me.state.county}>
                                    {
                                        me.state.countyList.map(function (item, idx) {
                                            return (
                                                <option key={idx}
                                                    value={item.id}>
                                                    {item.name}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-select">
                    <div className="select-wrapper select-wrapper-small">
                        <label>详细地址:</label>
                        <input type="text" ref="addr" />
                    </div>
                </div>
                <div className="form-select">
                    <div className="select-wrapper">
                        <button type="button" onClick={me.handleSubmit.bind(me)}>立即提交订单</button>
                    </div>
                </div>

                <div className="mask" style={maskStyle}>
                    <br/><br/><br/><br/>
                    <div className="done"></div>
                    <p>提交成功, 点击<a href="?">返回</a></p>
                </div>
            </div>
        )
    }

    changeItem(type, idx) {
        let tmp = [];
        if (type === 'size') {
            tmp = this.removeName(this.sizeList);
            tmp[idx].name = 'active';
            this.setState({
                size: tmp[idx].content,
                sizeList: tmp
            });
        }

        if (type === 'color') {
            tmp = this.removeName(this.colorList);
            tmp[idx].name = 'active';
            this.setState({
                color: tmp[idx].content,
                colorList: tmp
            });
        }
    }

    removeName(myArray) {
        myArray = myArray.map(function (item) {
            if (item.name) {
                delete item.name;
            }
            return item;
        })
        return myArray;
    }

    handleSubmit() {
        let me = this;
        let province = me.getDistrictById(me.state.province);
        let city = me.getDistrictById(me.state.city);
        let county = me.getDistrictById(me.state.county);
        let addr = `${province},${city},${county}`;
        addr = addr.replace(/,$/g, '').replace(/,$/g, '')
        // let url = 'https://isite.baidu.com/nichang/api/formdata/add?pageId=39333&formId=36431';
        let url = 'https://isite.baidu.com/nichang/api/formdata/add?pageId=39376&formId=36450';
        let reqData = {
            '颜色': me.state.color,
            '尺码': me.state.size.toString(),
            '金额': me.state.prize.toString(),
            '购买数量': me.state.number.toString(),
            '详细地址': me.refs.addr.value,
            '手机号': me.refs.tel.value,
            '收货人': me.refs.receiver.value,
            '所在地区': addr,
            '产品型号': productName
        };

        $.ajax({
            url: url,
            type: 'POST',
            contentType: 'text/plain',
            traditional: true,
            data: JSON.stringify(reqData),
            success(data) {
                if (data.data && data.data.successMessage) {
                    hmt.push(['_setAccount', '6696e3b6d0dc67f052cd1771bf5f9ca1']);
                    hmt.push(['_trackEvent', productName, 'submit']);
                    hmt.push(['_setAccount', '64fa8db0d13bd0086a966803ad5c646d']);
                    hmt.push(['_trackEvent', productName, 'submit']);
                    me.setState({submit: true});
                } else {
                    let errMsg = data.msg.fields;
                    let msg = '';
                    for (let key in errMsg) {
                        msg = `${key} : ${errMsg[key]}`;
                    }
                    alert(msg);
                }
            },
            error(msg) {
                alert('提交异常，请尝试再次提交');
            }
        })
    }

    getDistrictsByPid(pid) {
        let tmpList = [];
        districts.map(function (item) {
            if (item.pId === pid) {
                tmpList.push(item);
            }
        });
        return tmpList;
    }

    getDistrictById(id) {
        let result = '';
        districts.map(function (item) {
            if (item.id === id) {
                result = item.name;
            }
        });
        return result;
    }

    setCity(event) {
        let me = this;
        if (!!event.target.value.match(/\d/)) {
            let pid = parseInt(event.target.value, 10);
            me.setState({
                province: pid,
                cityList: me.getDistrictsByPid(pid),
                countyList: []
            });
        }
    }

    setNumber(event) {
        let me = this;
        if (!!event.target.value.match(/\d/)) {
            let number = parseInt(event.target.value, 10);
            me.setState({
                number: number,
                prize: number * productPrize
            });
        } else {
            me.setState({
                prize: ''
            });
        }
    }

    setCounty(type, event) {
        let me = this;
        let pid = parseInt(event.target.value, 10);
        if (type === 'city') {
            me.setState({
                city: pid,
                countyList: me.getDistrictsByPid(pid)
            });
            if (me.getDistrictsByPid(pid) && me.getDistrictsByPid(pid).length >= 1) {
                me.setState({
                    county: me.getDistrictsByPid(pid)[0].id
                });
            }
        }
        if (type === 'county') {
            me.setState({
                county: pid
            });
        }
    }

    setProvince() {
        let provinceList = [];
        districts.map(function (item) {
            if (item.pId === 0) {
                provinceList.push(item);
            }
        });
        this.provinceList = provinceList;
    }
}

export class DescComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ecommerce-desc">
                <ul>
                    <li className="prize">
                        <span className="left">￥{productPrize}</span>
                        <span className="right">已售494件</span>
                    </li>
                    <li className="title">{productDesc}</li>
                    <li className="slogan">
                        <span>假一赔十</span>
                        <span>货到付款</span>
                        <span>免费试用</span>
                        <span>100天退换</span>
                    </li>
                </ul>
            </div>
       );
    }
}

export class FloatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            barClassName: 'ecommerce-bar'
        };
    }
    render() {
        let me = this;
        return (
            <div className={me.state.barClassName} onClick={me.scrollToForm.bind(this)}>
                在线下单
            </div>
       );
    }

    componentWillMount() {
        let me = this;
        setTimeout(function () {
            window.addEventListener('scroll', me.handleScroll.bind(me));
        }, 1000);
        window.addEventListener('load', me.setScrollTop.bind(me));
    }

    setScrollTop() {
        let rootDom = document.getElementById('app');
        let scrollHeight = rootDom.offsetHeight;
        this.formScrollY = scrollHeight - window.screen.availHeight;
    }

    handleScroll() {
        if (this.formScrollY > window.screen.availHeight) {
            if (window.scrollY > (this.formScrollY - window.screen.availHeight)) {
                this.setState({
                    barClassName: 'ecommerce-bar hide'
                });
            } else {
                this.setState({
                    barClassName: 'ecommerce-bar'
                });
            }
        }
    }

    scrollToForm() {
        window.scrollTo(0, this.formScrollY);
    }
}
