import React, { Component } from 'react';
import Table from './Table';
import AccordionCard from './AccordionCard';

class Accordion extends Component {
    constructor(props) {
        super([props])
        this.state = {
            order: "desc",
            data: props.data
        }
    }

    render() {

        return (
            <div className="accordion" id="accordionExample" >
                <button className="btn btn-primary mb-5" onClick={this.sort.bind(this)}>Sort {this.state.order}</button>

                {this.state.data.map(ele => (
                    <AccordionCard data={ele} />
                ))}

                <small>Sorted { this.state.order === "asc" ? "Descending" : "Ascending"}</small>
            </div >
        );
    }

    sort() {



        if (this.state.order === "asc") {

            let sortedData = this.state.data.sort((a, b) => {
                return a.id - b.id
            })
            this.setState({ order: "desc", data: sortedData })
        } else {
            let sortedData = this.state.data.sort((a, b) => {
                return -1 * (a.id - b.id)
            })
            this.setState({ order: "asc", data: sortedData })
        }
    }

}

export default Accordion;