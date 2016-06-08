import React from 'react';
import {Link} from 'react-router';

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import {Container, Grid, Breakpoint, Span} from 'react-responsive-grid';
 
 import ImagePreview from './image-preview';

 const tableData = [
  {
    name: 'Link to Image 1',
    link: 'http://udacity.github.io/responsive-images/images/kittens_large.jpg'
  },
  {
    name: 'Link to Image 2',
    link: 'http://www.hickerphoto.com/images/1024/endangered-animal-list_5406.jpg'
  },
  {
    name: 'Link to Image 3',
    link: 'http://www.pitt.edu/~shh69/resources/logos/google-logo.jpg'
  },
  {
    name: 'Link to Image 4',
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png'
  },
  {
    name: 'Link to Image 5',
    link: 'https://shmuley.com/wp-content/uploads/2016/01/Iflag.jpg'
  },
  {
    name: 'Link to Image 6',
    link: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/25-dog-memes/14-funny-dog-meme.jpg'
  },
  {
    name: 'Link to Image 7',
    link: 'http://www.gettyimages.ca/gi-resources/images/HomepageCurationTilesUK/2016Jun01_Jun07/Ali-3162458.jpg'
  },
  {
    name: 'Link to Image 8',
    link: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/US/Jan2016/hero-instagram.jpg'
  }
];

const style = {
  box: {
    border:'1px solid #000',
    marginTop: 30,
    padding: 10
  },
  border:{
    border:'1px solid #000'
  },
  textCenter: {
    textAlign: 'center'
  },
  active: {
    textDecoration: 'none',
    color: 'red'
  }
}

var MainComponent = React.createClass({
  getInitialState(){
    return {
      open: false,
      link: null
    }
  },
  render() {
    return (
  		<div>
          <Grid columns={12}>
          <Breakpoint minWidth={900} widthMethod="componentWidth">
            <Span columns={2}>
              <div style={{
                padding: '1rem'
              }}></div>
            </Span>
            <Span columns={8} style={style.box}>
                <Span columns={4}>
                  <div>{this.renderTable()}</div>
                </Span>
                <Span columns={4} last>
                  <div>{this.state.open && this.state.link ? <ImagePreview link={this.state.link} /> : 'Click the link to view the picture'}</div>
                </Span>
              
            </Span>
            <Span columns={2} last>
              <div style={{
                padding: '1rem'
              }}></div>
            </Span>
          </Breakpoint>
          <Breakpoint minWidth={600} maxWidth={900}  widthMethod="componentWidth">
                <Span columns={6}>
                  <div style={style.box}>{this.renderTable()}</div>
                </Span>
                <Span columns={6} last>
                  <div style={style.box}>{this.state.open && this.state.link ? <ImagePreview link={this.state.link} /> : 'Click the link to view the picture'}</div>
                </Span>
          </Breakpoint>
          <Breakpoint maxWidth={600} widthMethod="componentWidth">
                <Span columns={12}>
                  <div style={style.box}>{this.renderTable()}</div>
                </Span>
                <Span columns={12} last>
                  <div style={style.box}>{this.state.open && this.state.link ? <ImagePreview link={this.state.link} /> : 'Click the link to view the picture'}</div>
                </Span>
          </Breakpoint>
          </Grid>
		  </div>
    )
  },
  renderTable(){
    return (
      <Table 
        style={style.border} 
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn style={style.textCenter}>ID</TableHeaderColumn>
            <TableHeaderColumn style={style.textCenter}>Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody
            displayRowCheckbox={false}
            showRowHover={true}
            displaySelectAll={false}
          >
          {tableData.map( (row, index) => (
            <TableRow 
              key={index}
            >
              <TableRowColumn style={style.textCenter}>{index + 1}</TableRowColumn>
              <TableRowColumn style={style.textCenter}>
                <Link to='/test2' value={row.link} onClick={this.handleCellClick} activeClassName='active'>{row.name}</Link>
              </TableRowColumn>
            </TableRow>

          ))}
        </TableBody>
      </Table>
    )
  },
  handleCellClick(event){
    this.setState({
      open: true,
      link: event.currentTarget.value
    })
  },
})

module.exports = MainComponent;
