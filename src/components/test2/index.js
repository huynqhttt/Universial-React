import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderComponentx from './header';
import MainComponent from './main-content';
 
var IndexComponent = React.createClass({
	getInitialState(){
		return {
			open: false
		}
	},
  render() {
    return (
    	<MuiThemeProvider muiTheme={getMuiTheme()}>
    		<div>
			    <HeaderComponentx />
          <MainComponent />
          
        </div>
    	</MuiThemeProvider>
    )
  },
  handleRequestClose(){
  	this.setState({
  		open: false
  	})
  },
  handleTouchTap(event){
  	event.preventDefault();
  	this.setState({
  		open: true
  	})
  }
})

module.exports = IndexComponent;
