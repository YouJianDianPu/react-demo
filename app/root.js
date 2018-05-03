/*
* @Author: YouJDP
* @Date:   2018-05-02 12:08:26
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-05-03 15:40:46
*/

import React from 'react';
import Header from './components/header';
import Progress from './components/progress';

let Root = React.createClass({
	getInitialState(){
		return {
			progress: '-'
		}
	},
	componentDidMount(){
		$('#player').jPlayer({
			ready: function(){
				$(this).jPlayer('setMedia', {
					mp3: 'https://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%BB%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
				}).jPlayer('play');
			},
			supplid: 'mp3',
			wmode: 'window'
		});
		$('#player').bind($.jPlayer.event.timeupdate, (e) =>{
			this.setState({
				progress: e.jPlayer.status.currentPercentAbsolute
			});
		});
	},
	componentWillUnMount(){
		$('#player').unbind($.jPlayer.event.timeupdate);
	},
	render(){
		return (
			<div>
				<Header />
				<Progress 
					progress={this.state.progress}
				>
				</Progress>
			</div>
			
		);
	}
});

export default Root;