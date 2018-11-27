import React, { Component } from 'react';
import Search from './Search';
import Table from './Table';

class Apartments extends Component {
    state = {
        idFilter: 0,
        filtering: false
    }

    render() {

        let headers = ["Id", "Building", "Apartment Number", "Status", "Guest"];
        let dataBkp = []
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
            }]

        return (
            <div class="mx-auto mt-5">

                <div class="container">
                    <h1 class="text-center">Apartments</h1>
                </div>

                <Search placeholder="Apartment Id" action={this.filter} />

                <div class="container mt-5">
                    <Table headers={headers} data={data} />
                </div>
            </div>
        );
    }

    filter() {
        
    }
}

export default Apartments;