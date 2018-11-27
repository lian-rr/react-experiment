import React, { Component } from 'react';

class Table extends Component {
    state = {}
    render() {

        let { headers, data } = this.props

        return (
            <table class="table">
                <thead>
                    <tr>
                        {headers.map(header => (
                            <th scope="col">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(ele => (
                        <tr id={ele.id}>                            
                            {Object.keys(ele)
                                .map(key => (
                                    key !== "id" ? <td>{ele[key]}</td> : <th scope="row">{ele[key]}</th>
                                ))}
                        </tr>

                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;