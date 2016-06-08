import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../stores/image-store';
import CommentStore from '../stores/comment-store';
import Actions from '../actions';
import CommentBox from './comment-box';

import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
	paper:{
  	display: 'block',
	}
  
};

var ImageDetail = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange'),
    Reflux.listenTo(CommentStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      image: null,
      comment: null
    }
  },
  componentWillMount: function() {
    Actions.getImage(this.props.params.id);
  },
  render: function() {
    return (
    	<div>
    		<MuiThemeProvider muiTheme={getMuiTheme()}>
    			<Paper style={styles.paper}>
	    			{this.state.image ? this.renderContent() : null}
	    		</Paper>
    		</MuiThemeProvider>
	    </div>
    )
    
  },
  renderContent: function() {
    return(
    	<div>
	    	<Card>
			    <CardHeader
			      title={this.state.image.title}
			      subtitle={this.state.image.topic}
			      avatar={this.state.image.link}
			    />
			    <CardMedia
			      overlay={<CardTitle title={this.state.image.account_url} subtitle={this.state.image.views} />}
			    >
			      {this.renderImage()}
			    </CardMedia>
			  </Card>
		    <h3>Comments</h3>
		    {this.renderComments()}
	    </div>
   	) 
  },
  renderComments: function() {
    if(!this.state.comments){
      return null
    }
    return <CommentBox comments={this.state.comments} />
  },
  renderImage: function() {
    if(this.state.image.animated) {
      return <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
        <source src={this.state.image.mp4} type="video/mp4"></source>
      </video>
    } else {
      return <img src={this.state.image.link} />
    }
  },
  onChange: function() {
    this.setState({
      image: ImageStore.find(this.props.params.id),
      comments: CommentStore.comment
    });
  }
});

module.exports = ImageDetail;
