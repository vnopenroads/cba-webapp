import React from 'react';
import dataPrioritization from '../../dataPrioritization'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Prioritization extends React.Component {
    render() {
    console.log(dataPrioritization)
        
        return (
            <div>
                 <div className = 'header_pzi'>
                    <div className = 'left_header_pzi'>
                    <div className = 'title_pzi_active'> Prioritization Road Work Program </div>
                    <div className = 'title_pzi'> Network Statistics</div> 
                    </div>
                    <div className = 'last_run'>
                        Last run on: 23 Aug 2018 00:55
                    </div>
                    <div className = 'sync_data_pzi'> 
                    <span>Get Optimized Program</span> 
                    </div>
                </div>
                <div style = {{marginRight: '20px', marginLeft: '20px'}}>
                <BootstrapTable data={ dataPrioritization } >
                    <TableHeaderColumn dataField='CH' isKey>Column Header</TableHeaderColumn>
                    <TableHeaderColumn dataField='road_number'>Road Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='road_name'>Road Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='length'>Length (km)</TableHeaderColumn>
                    <TableHeaderColumn dataField='work_class'>Work Class</TableHeaderColumn>
                    <TableHeaderColumn dataField='work_name'>Work Type Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='FC'>Financial Cost</TableHeaderColumn>
                    <TableHeaderColumn dataField='IY'>Implementtation Year</TableHeaderColumn>
                    <TableHeaderColumn dataField='NVP'>NPV</TableHeaderColumn>
                    <TableHeaderColumn dataField='EIRR'>EIRR (%)</TableHeaderColumn>
                    <TableHeaderColumn dataField='action'>Action</TableHeaderColumn>
                </BootstrapTable>
                </div>
            </div>
           
        )
    }
}