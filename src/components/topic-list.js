import React, {Component} from 'react';
import TopicStore from '../stores/topic-store';
import Reflux from 'reflux';
import Actions from '../actions';
import {Link} from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

var TopicList = React.createClass({
	mixins: [
		Reflux.listenTo(TopicStore, 'onChange')
	],
	getInitialState() {
	    return{
	    	topics: []
	    }
	},
	componentWillMount() {
		Actions.getTopics();
	},
	render() {
		return (
			<div className="list-group">
				{this.renderTopics()}
			</div>
		);
	},
	renderTopics(){
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<Table>

			    <TableHeader>
			      <TableRow>
			        <TableHeaderColumn>ID</TableHeaderColumn>
			        <TableHeaderColumn>Name</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>

			    <TableBody>
			    {this.state.topics.map(function(topic){
			      return (
			      	<TableRow key={topic.id}>
				        <TableRowColumn>{topic.id}</TableRowColumn>
				        <TableRowColumn>
				        	<Link className="list-group-item" to={"topics/"+topic.id} >
                    <h4>{topic.name}</h4>
                    <p>{topic.description}</p>
	                </Link>
				        </TableRowColumn>
				      </TableRow>
				    )
			     })}
			  	</TableBody>

	  		</Table>
	  	</MuiThemeProvider>
		);
	},
	onChange(event, topics){
		this.setState({topics:topics})
	}
});

module.exports = TopicList;