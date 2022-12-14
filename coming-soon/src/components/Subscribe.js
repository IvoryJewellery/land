import React, { Component } from 'react';
import "../styles/Subscribe.css"

class Subscribe extends Component {
    state = {
        email: ""
    }
    handleChange = e => {
        this.setState({email: e.target.value.trim() })
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.email) {
            fetch(`/api/memberAdd?email=${this.state.email}`)
            .then(res => res.json())
            .then(res => console.log(res))
            

        }
    }

    render() {
        const { placeholder, buttonText } = this.props;
        return (
            <form className="subscribe" name="email" method="post" data-netlify="true" onSubmit={this.handleSubmit}>
                <input className="subscribe-email" name="email" type="email"
                placeholder={placeholder}
                onChange={this.handleChange}
                value={this.state.email}/>
                <button className="subscribe-button" type="submit">{buttonText}</button>
                <input type="hidden" name="form-name" value="email"/>
            </form>
        );
    }
}

export default Subscribe;