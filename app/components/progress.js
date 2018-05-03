/*
* @Author: YouJDP
* @Date:   2018-05-02 13:38:38
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-05-03 15:44:06
*/

import React from 'react';
import './progress.less';

let Progress = React.createClass({
	render(){
		return (
			<div className="components-progress">
				<div className="progress" style={{width: `%{this.props.progress}%`}}></div>
			</div>
		);
	}
});

export default Progress;