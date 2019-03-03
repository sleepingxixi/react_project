import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';

export default class Axios {
    // 通过jsonp方法请求处理天气的api返回的数据，因为涉及到跨域
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.message)
                }
            })
        });
    }

    static axios_ajax(options) {
        // 添加请求加载的图标
        let loading;
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }

        const baseURL = "https://www.easy-mock.com/mock/5c6933e51dbe7c1a4f7dd90f/sleeping";
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: options.url,
                baseURL: options.baseURL || baseURL,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                // 当加载完成的时候，让图标消失
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if (response.status == '200') {
                    let data = response.data;
                    if (data.code == '0') {
                        resolve(data);
                    } else {
                        Modal.info({
                            title: "提示",
                            content: data.msg
                        })
                    }
                } else {
                    reject(response.data);
                }
            }).catch((error) => {
                // 可用来捕获异常，包括请求超时
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                Modal.info({
                    title: "错误提示",
                    content: "请求接口超时或其他出错"
                })
                console.error(error);
            })
        })
    }
}