/*
* @Author: YouJDP
* @Date:   2018-05-02 11:47:41
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-05-02 13:36:53
*/

import React from 'react';
import './header.less';

let Header = React.createClass({
	render(){
		return (
			<div className="components-header row">
				<img src="/static/images/logo.jpg" width="40" alt="logo" className="-col-auto" />
				<h1 className="caption">React Music Player</h1>
			</div>
		);
	}
});

export default Header;