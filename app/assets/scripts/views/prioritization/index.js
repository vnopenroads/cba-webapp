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
                <BootstrapTable data={ this.state.data } height = '751' >
                    <TableHeaderColumn dataField='road_section_id' isKey>Road Section Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='road_number'>Road Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='road_name'>Road Name</TableHeaderColumn>
                    {/* <TableHeaderColumn dataField='road_start'>Road Start</TableHeaderColumn>
                    <TableHeaderColumn dataField='road_end'>Road End</TableHeaderColumn>
                    <TableHeaderColumn dataField='section_order'>Section Order</TableHeaderColumn>
                    <TableHeaderColumn dataField='section_name'>Section Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='province'>Province</TableHeaderColumn> */}
                    <TableHeaderColumn dataField='district'>District</TableHeaderColumn>
                    {/* <TableHeaderColumn dataField='commune'>Commune</TableHeaderColumn>
                    <TableHeaderColumn dataField='management'>Management</TableHeaderColumn>
                    <TableHeaderColumn dataField='start_km'>start (km)</TableHeaderColumn>
                    <TableHeaderColumn dataField='end_km'>end (km)</TableHeaderColumn> */}
                    <TableHeaderColumn dataField='length'>Length</TableHeaderColumn>
                    {/* <TableHeaderColumn dataField='terrain_type'>Terrain Type</TableHeaderColumn>
                    <TableHeaderColumn dataField='temparature'>Temparature</TableHeaderColumn>
                    <TableHeaderColumn dataField='moisture'>Moisture </TableHeaderColumn>
                    <TableHeaderColumn dataField='traffic_growth'>Traffic Growth</TableHeaderColumn> */}
                    <TableHeaderColumn dataField='work_class'>Work Class</TableHeaderColumn>
                    <TableHeaderColumn dataField='work_type'>Work Type</TableHeaderColumn>
                    {/* <TableHeaderColumn dataField='work_name'>Work Name</TableHeaderColumn> */}
                    <TableHeaderColumn dataField='work_cost'>Work Cost</TableHeaderColumn>
                    {/* <TableHeaderColumn dataField='work_cost_km'>Work Cost (km)</TableHeaderColumn> */}
                    <TableHeaderColumn dataField='work_year'>Work Year</TableHeaderColumn>
                    <TableHeaderColumn dataField='npv'>NPV</TableHeaderColumn>
                    {/* <TableHeaderColumn dataField='npv_km'>NPV (km)</TableHeaderColumn>
                    <TableHeaderColumn dataField='npv_cost'>NPV (cost)</TableHeaderColumn> */}
                    <TableHeaderColumn dataField='eirr'>EIRR</TableHeaderColumn>
                    {/* <TableHeaderColumn dataField='y1_traffic'>Traffic </TableHeaderColumn>
                    <TableHeaderColumn dataField='y1_truck_percent'>Truck Percent</TableHeaderColumn>
                    <TableHeaderColumn dataField='y1_veh_util'>Vehicle Util</TableHeaderColumn>
                    <TableHeaderColumn dataField='y1_esa'>ESA</TableHeaderColumn>
                    <TableHeaderColumn dataField='lanes'>Lanes</TableHeaderColumn>
                    <TableHeaderColumn dataField='width'>Width</TableHeaderColumn>
                    <TableHeaderColumn dataField='road_type'>Road Type</TableHeaderColumn>
                    <TableHeaderColumn dataField='surface_type'>Surface Type</TableHeaderColumn>
                    <TableHeaderColumn dataField='condition_class'>Condition Class</TableHeaderColumn>
                    <TableHeaderColumn dataField='roughness'>Roughness</TableHeaderColumn>
                    <TableHeaderColumn dataField='structural_no'>Structural Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='pavement_age'>Pavement Age</TableHeaderColumn>
                    <TableHeaderColumn dataField='traffic_level'>Traffic Level</TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_motorcycle'>Motorcycle</TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_carsmall'>Small Car </TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_carmedium'>Medium Car</TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_delivery'>Delivery</TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_4wheel'>Four wheel</TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_smalltruck'>Small Truck</TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_mediumtruck'>Medium Truck</TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_largetruck'>Large Truck</TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_articulatedtruck'>Articulated Truck</TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_smallbus'>Small Bus</TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_mediumbus'>Medium Bus</TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_motorcycle'>Motorcycle</TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_carsmall'>Small Car </TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_carmedium'>Medium Car</TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_largebus'>Large Bus</TableHeaderColumn>
                    <TableHeaderColumn dataField='aadt_total'>Total</TableHeaderColumn> */}
                </BootstrapTable>
                </div>
            </div>
           
        )
    }
}