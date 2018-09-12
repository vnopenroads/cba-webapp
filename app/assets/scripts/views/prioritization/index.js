import React from 'react';
import dataPrioritization from '../../dataPrioritization';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import data2 from '../../a';
import data3 from '../../b';

export default class Prioritization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : dataPrioritization,
            selected: [],
            name: 'Scenario 1: $776.9 (100%)'
        }
    }
    render() {
    console.log(this.state.selected)
        
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
                    <div className="dropdown">
                    <button className="dropbtn">{this.state.name}</button>
                    <div className="dropdown-content">
                    <div className = 'dropdown-contenta' onClick = {()=> {this.setState({selected: dataPrioritization,name: 'Scenario 1: $776.9 (100%)'})}}>Scenario 1: $776.9 (100%)</div>
                    <div className = 'dropdown-contenta' onClick = {()=> {this.setState({selected: data2, name:'Scenario 2: $621.6 (80%)' })}}>Scenario 2: $621.6 (80%)</div>
                    <div className = 'dropdown-contenta' onClick = {()=> {this.setState({selected: data3, name: 'Scenario 3: $466.2 (60%)'})}}>Scenario 3: $466.2 (60%)</div>
                    </div>
                    </div>
                    
                    <div className = 'sync_data_pzi'> 
                    <span onClick = {()=> {this.setState({data: this.state.selected})}} >Get Optimized Program</span> 
                    </div>
                </div>
                <div className = 'table-pzi'>
                <BootstrapTable data={ this.state.data }  scrollTop={ 'Top' } >
                    <TableHeaderColumn width='150' dataField='road_section_id' isKey>Road Section Id</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='road_number'>Road Number</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='road_name'>Road Name</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='road_start'>Road Start</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='road_end'>Road End</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='section_order'>Section Order</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='section_name'>Section Name</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='province'>Province</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='district'>District</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='commune'>Commune</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='management'>Management</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='start_km'>start (km)</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='end_km'>end (km)</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='length'>Length</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='terrain_type'>Terrain Type</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='temparature'>Temparature</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='moisture'>Moisture </TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='traffic_growth'>Traffic Growth</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='work_class'>Work Class</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='work_type'>Work Type</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='work_name'>Work Name</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='work_cost'>Work Cost</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='work_cost_km'>Work Cost (km)</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='work_year'>Work Year</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='npv'>NPV</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='npv_km'>NPV (km)</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='npv_cost'>NPV (cost)</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='eirr'>EIRR</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='y1_traffic'>Traffic </TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='y1_truck_percent'>Truck Percent</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='y1_veh_util'>Vehicle Util</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='y1_esa'>ESA</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='lanes'>Lanes</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='width'>Width</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='road_type'>Road Type</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='surface_type'>Surface Type</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='condition_class'>Condition Class</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='roughness'>Roughness</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='structural_no'>Structural Number</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='pavement_age'>Pavement Age</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='traffic_level'>Traffic Level</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_motorcycle'>Motorcycle</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_carsmall'>Small Car </TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_carmedium'>Medium Car</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_delivery'>Delivery</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_4wheel'>Four wheel</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_smalltruck'>Small Truck</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_mediumtruck'>Medium Truck</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_largetruck'>Large Truck</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_articulatedtruck'>Articulated Truck</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_smallbus'>Small Bus</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_mediumbus'>Medium Bus</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_motorcycle'>Motorcycle</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_carsmall'>Small Car </TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_carmedium'>Medium Car</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_largebus'>Large Bus</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='aadt_total'>Total</TableHeaderColumn>
                </BootstrapTable>
                </div>
            </div>
           
        )
    }
}