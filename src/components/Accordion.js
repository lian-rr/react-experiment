import React, { Component } from 'react';
import Table from './Table';
import AccordionCard from './AccordionCard';

class Accordion extends Component {
    state = {}
    render() {

        let { data } = this.props

        return (
            <div className="accordion" id="accordionExample" >
                {data.map(ele => (
                    <AccordionCard data={ele} />
                ))}
            </div >
        );
    }
}

export default Accordion;