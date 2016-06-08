import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  responsiveImg: {
    maxWidth: '100%',
    margin: '0 auto',
    height: 'auto',
    verticalAlign: 'middle',
    display: 'block'
  },
  paper: {
    border:'1px solid #000',
    padding: 10
  }
}

var ImageComponent = React.createClass({
  render() {
    return (
  		<div>
		    <Paper zDepth={3} style={style.paper}>
          <img style={style.responsiveImg} src={this.props.link} />
        </Paper>
		  </div>
    )
  }
})

module.exports = ImageComponent;
