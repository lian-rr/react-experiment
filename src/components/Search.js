import React, { Component } from 'react';

class Search extends Component {
    render() {
        var { placeholder, action, reset } = this.props
        return (
            <form class="form-inline mt-5">
                <div className="form-group col-8">
                    <input type="text" class="form-control col-12" id="search-by-id" placeholder={placeholder} />
                </div>
                <button type="button" class="btn btn-primary ml-2" onClick={action}> Search </button>
                <button type="button" class="btn btn-danger ml-2" onClick={reset}> Reset </button>
            </form>
        );
    }
}

export default Search;