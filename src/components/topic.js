import React from 'react';
import Actions from '../actions';
import ImageStore from '../stores/image-store';
import Reflux from 'reflux';
import ImagePreview from './image-preview';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 880,
    height: 1000,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

var Topic = React.createClass({
	mixins:[
		Reflux.listenTo(ImageStore,'onChange')
	],
	getInitialState() {
		return {
			images:[]  
		};
	},
	componentWillMount() {
		Actions.getImages(this.props.params.id);  
	},
	componentWillReceiveProps(nextProps) {
		Actions.getImages(nextProps.params.id);      
	},
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div style={styles.root}>
			    <GridList
			    	cols={4}
			      style={styles.gridList}
			      cellHeight={220}
			      padding={1}
			    >
			      <Subheader>Topic Title</Subheader>
						{this.renderImages()}
					</GridList>
			  </div>
			</MuiThemeProvider>
		);
	},
	renderImages() {
		return (
      this.state.images.slice(0, 20).map(function(image){
				return <ImagePreview key={image.id}	{...image} />
			}) 
		)
	},
	onChange(event, images){
		this.setState({images:images})
	}
});

module.exports = Topic;