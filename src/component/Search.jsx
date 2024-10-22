import React, { Component } from "react";

class Search extends Component {

    state = {
        search: '',
        type: 'all',
    }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchFilm(this.state.search, this.state.type)
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col s12" style={{ display: "flex", alignItems: "center" }}>
                    <input
                        id="Search"
                        type="search"
                        className="validate"
                        onKeyDown={this.handleKey}
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })} />

                    <button className="btn-search" onClick={() => this.props.searchFilm(this.state.search, this.state.type)}>
                        Search
                    </button>

                </div>
                <div>
                    <label>
                        <input class="with-gap" type="radio"
                            name="group3" checked />
                        <span> Serias</span>
                    </label>

                    <label>
                        <input class="with-gap" type="radio"
                            name="group3" checked />
                        <span> movie</span>
                    </label>
                    <label>
                        <input class="with-gap" type="radio"
                            name="group3" checked />
                        <span> All</span>
                    </label>
                </div>
            </div>
        )
    }
}

export { Search };