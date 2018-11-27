import React, { Component } from 'react';
import Table from './Table'

class AccordionCard extends Component {
    render() {

        let { data } = this.props

        return (
            <div class="card">
                <div class="card-header" id={"card_" + data.id}>
                    <h5 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target={"#" + 'collapse-card' + data.id} aria-expanded="true" aria-controls={'collapse-card' + data.id}>
                            {data.name}
                        </button>
                    </h5>
                </div>

                <div id={"collapse-card" + data.id} class="collapse" aria-labelledby={"card_" + data.id} data-parent="#accordionExample">
                    <div class="card-body">
                        <div class="container mt-5">
                            <Table headers={["Name", "Value", "Status"]} data={data.components} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccordionCard;