/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React from 'react';
import { Link } from 'react-router';

import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';

const styles = {
  menu: {
    paddingLeft: '10px'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

var Header = React.createClass ({
  getInitialState() {
    return {
      open: false
    }
  },
  
  handleRequestClose() {
    this.setState({
      open: false,
    });
  },

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();
    
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  },

  render() {
    return (
      <div>
        <Tabs>
            <Tab 
              containerElement={<Link to="/" />}
              label="Home" 
            />
            <Tab 
              containerElement={<Link to="/test2" />}
              label="Test2" 
            />
          </Tabs>  
          <Divider />
      </div>
    );
  }
})

module.exports = Header;
