import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
 
var HeaderComponent = React.createClass({
	getInitialState(){
		return {
			open: false
		}
	},
  render() {
    return (
  		<div>
		    <AppBar
			    title="Logo"
			    onLeftIconButtonTouchTap={this.handleTouchTap}
			  />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Link 1" />
            <MenuItem primaryText="Link 2" />
            <MenuItem primaryText="Link 3" />
            <MenuItem primaryText="Link 4" />
          </Menu>
        </Popover>
		  </div>
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
  		open: true,
      anchorEl: event.currentTarget
  	})
  }
})

module.exports = HeaderComponent;
