/***
 * @creater:wjiban
 * @create_time:20-8-4 16:42:33
 * @last_modify:wjiban
 * @modify_time:20-8-4 22:44:34
 * @line_count:36
 **/

import Axios from 'axios'

/**
 *  封装 GET 方法
 * @param {url}  
 * @param {data}  
 * @return {Promise}
 */
export function get(url, params = {}) {
	return new Promise((resolve, reject) => {
		this.$axios.get(url, {
			params: params
		})
			.then(response => {
				resolve(response.data);
			})
			.catch(err => {
				reject(err)
			})
	})
}


/**
 *  封装 GET 方法
 */
export function post(url, data = {}) {
	return new Promise((resolve, reject) => {
		this.$axios.post(url, data)
			.then(responce => {
				resolve(responce.data)
			}, err => {
				reject(err)
			})
	})
}