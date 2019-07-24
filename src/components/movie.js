import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {Dropdown, DropdownButton} from 'react-bootstrap'
import {URL} from '../var'
import MovieContainer from '../containers/movie'

const _ = require('lodash');

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: new Array,
            genre: new Array,
            title: "",
            genre: {}
        }
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    handleChange = event =>{   
        this.setState({
            [event.target.name]: event.target.value
        });
        
    };

    handleDropdown = genre=>{
        this.setState({
            genre: genre
        })
    }

    getMovies(){
        var queryURL = URL + "api/movies";
        return fetch(queryURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then ((response)=>{
            if (!response.ok) {throw response}
            else {
                console.log(response)
                return response.json()
            }
        })
        .then((json)=>{
            const movies = json.map(movie => _.pick(movie, ['title', 'genre.name', 'numberInStock', 'dailyRentalRate', '_id']));
            this.setState({
                movies: movies
            })
        })
        .catch((ex)=>{
            //alert(ex);
        })
    }

    getGenres(){
        var queryURL = URL + "api/genres";
        return fetch(queryURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then ((response)=>{
            if (!response.ok) {throw response}
            else {
                console.log(response)
                return response.json();
            }
        })
        .then((json)=>{
            const genres = json.map(genre => _.pick(genre, ['name', '_id']));
            this.setState({
                genres: genres
            })
        })
        .catch((ex)=>{
            //alert(ex);
        })
    }

    createMovie(){
        alert("WIP");
        return false;
    }

    renderMovies(){
        if (!this.state.movies){
            this.getMovies();
            return (
                <p>loading...</p>
            )
        }
        
        else {
            let containers = []
            this.state.movies.map(movie=>{
                containers.push(<MovieContainer movie={movie} key={movie._id}/>)
            });
            return containers
        }
    }

    renderDropdown(){
        if (!this.state.genres){
            this.getGenres();
            return (
                <p>loading...</p>
            )
        }
        const items = [];
        this.state.genres.map(genre=>{
            items.push(<Dropdown.Item onClick={()=>this.handleDropdown(genre)}
                key={genre._id}>
                {genre.name}</Dropdown.Item>);
        })
        return(
        <DropdownButton id="genre" name="genre" title={this.state.genre?this.state.genre.name:"Please select a genre"} required>
            {items}        
        </DropdownButton>
        )
        
    }
    

    
    render() {
        let Movies = this.renderMovies();
        let Dropdowns = this.renderDropdown();
        return (
            <div className="container">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Get Movies
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Create Movie
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Delete Movie
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                            {Movies}
                    </TabPane>
                    <TabPane tabId="2">
                        <Form onSubmit={this.createMovie}>
                            <FormGroup>
                                <Label htmlFor="text">Title</Label>
                                <Input type="text" id="title" name="title" required
                                    value={this.state.title}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="text">Genre</Label>
                                {Dropdowns}
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Create</Button>   
                        </Form>
                    </TabPane>
                    <TabPane tabId="3">
                            <p>WIP</p>
                    </TabPane>
                </TabContent>
            </div>
        )


    }
}

export default Movie;