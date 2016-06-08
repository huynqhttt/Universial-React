import React from 'react';
import {Link} from 'react-router';

import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
const styles = {
	size:{
		width:220,
		height:220
	}
}
var ImagePreview = React.createClass({
	displayName: 'image-preview',
	getInitialState() {
		return {
			hovering: false  
		};
	},
	render() {
		return (
	    <GridTile
	    	cols={this.props.animated ? 2 : 1}
        rows={this.props.animated ? 2 : 1}
	      key={this.props.id}
	      title={this.state.hovering ? this.inset() : null}
	      subtitle={<span>by <b>Huy Nguyen</b></span>}
	      actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
	    >
		    <Link 
					to={"images/" + this.props.id}
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
				>
					{this.props.animated && this.state.hovering ? this.video() : this.image()}
				</Link>  
	    </GridTile>
		);
	},
	image() {
		var link = 'https://i.imgur.com/' + this.props.id + 'h.jpg';
		return (
			<img style={styles.size} src={link} />
		)
	},
	video() {
		return (
			<div>
				<video preload='auto' autoPlay='autoplay' loop='loop' webkit-playsinline>
					<source style={styles.size} src={this.props.mp4} type="video/mp4" />
				</video>
			</div>	
		)
	},
	inset() {
		return (
			<div className = "inset">
				Views: {this.props.views}
				<br/>
				Upvotes: {this.props.ups}
			</div>
		)
	},
	handleMouseEnter() {
		this.setState({hovering: true});
	},
	handleMouseLeave() {
		this.setState({hovering: false});
	}
});

module.exports = ImagePreview;