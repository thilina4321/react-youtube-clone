import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import './Searchbar.css'

export default class SearchBar extends Component {
    state = {
        term:''
    }
    onTermChangeHandler = (e)=>{
        e.preventDefault()
        this.setState({
            term:e.target.value
        })
    }
    onTermSubmitHandler = (e)=>{
        e.preventDefault()
        this.props.onSearchSubmitHandler(this.state.term)

    }
    render() {
        return (
            <div className="searchbar">
                <Card>
                    <form onSubmit={this.onTermSubmitHandler}>
                        <input className="searchbar__input"
                        type='search'
                        placeholder="Search"
                        value={this.state.term}
                        onChange={this.onTermChangeHandler}
                        />
                    </form>
                </Card>
            </div>
        )
    }
}
