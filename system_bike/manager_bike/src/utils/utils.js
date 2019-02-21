import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;
export default {
    // 格式化时间的方法
    formateDate(date) {
        if (!date) return '';
        let time = new Date(date);
        return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    },
    // 设置分页方法
    pagination(data, callback) {
        return {
            current: data.result.page,
            pageSize: data.result.page_size,
            total: data.result.total_count,
            showTotal: () => { return `共${data.result.total_count}条` }
        }
    },
    // 设置选择框的选项
    getOptionList(data) {
        if (!data) {
            return [];
        }
        let options = [];
        data.map((item) => {
            options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
        })
        return options;
    }
}