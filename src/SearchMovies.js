import React, { Component } from 'react';
import { FormControl, Grid, TextField } from '@material-ui/core';
import './SearchMovies.css'


class SearchMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
        }
        //binds the function to this component
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    //Controlled inputs
    handleChange(event) {
        //handles changes and sets state to the input
        this.setState({ [event.target.name]: event.target.value });
    }
    //hande search
    handleSearch(e) {
        //if pressed enter, redirect to /search/:input
        if (e.key === 'Enter') this.props.history.push(`/search/${this.state.searchInput}`)
    }
    render() {
        return (
            <Grid
                className='SearchMovies'
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <h1>Find your <span>Movie</span></h1>
                <h2>Search</h2>
                <FormControl className='Form'>
                    <TextField label="Type here..." onKeyPress={this.handleSearch} onChange={this.handleChange} name='searchInput' value={this.state.searchInput} />
                </FormControl>
            </Grid>
        )
    }
}
export default SearchMovies;