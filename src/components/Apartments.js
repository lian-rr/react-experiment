import React, { Component } from 'react';
import Search from './Search';
import Table from './Table';
import Accordion from './Accordion';

class Apartments extends Component {
    state = {
        idFilter: 0,
        filtering: false
    }

    render() {

        let headers = ["Id", "Building", "Apartment Number", "Status", "Guest"];        
        let data = [
            {
                id: 1,
                building: 201,
                number: 302,
                status: "Available",
                guest: "Lian Rodriguez"
            },
            {
                id: 2,
                building: 301,
                number: 402,
                status: "Available",
                guest: "Nail Rodriguez"
            }];

        let accordionData = [
            {
                id: "1",
                name: "Product 1",                
                components: [
                    {
                        name: "Component 1",
                        value: 124,
                        status: "Working"
                    }, 
                    {
                        name: "Component 2",
                        value: 1240,
                        status: "Broken"
                    }
                ]
            },
            {
                id: "2",
                name: "Product 2",
                components: [
                    {
                        name: "Component 1",
                        value: 124,
                        status: "Broken"
                    }, 
                    {
                        name: "Component 2",
                        value: 1240,
                        status: "New"
                    }
                ]
            }
        ]

        return (
            <div class="mx-auto mt-5">

                <div class="container">
                    <h1 class="text-center">Apartments</h1>
                </div>

                <Search placeholder="Apartment Id" action={this.filter} />

                <div class="container mt-5">
                    <Table headers={headers} data={data} />
                </div>

                <div className="container mt-5">
                    <Accordion data={accordionData} />
                </div>
            </div>
        );
    }

    filter() {
        
    }
}

export default Apartments;