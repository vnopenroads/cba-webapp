import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Annual extends React.Component {
    render() {
        let dataAnnual = this.props.datas['annual-traffic']
        let cellEditProp = {
            mode: 'click'
          };
      
        return (
            <div>
                <div>
                <div style = {{ fontWeight: 'bold', marginTop:'30px', marginBottom: '10px'}}>
                Annual Traffic Growth Rate Scenarios (AnnualGrowth)
                </div>
                <BootstrapTable data={ dataAnnual } cellEdit={ cellEditProp }>
                <TableHeaderColumn row='0' rowSpan='2' dataField='growth-scenario' isKey>Traffic Annual Growth Scenario</TableHeaderColumn>
                <TableHeaderColumn row='0' colSpan='11'>Annual Traffic Growth Rate (%/year)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='motor-cycle'>Motor Cycle (veh/day)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='small-car'>Small Car (veh/day)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='medium-car'>Medium Car (veh/day)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='delivery'>Delivery Vehicle (veh/day)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='4-whell'>4 Wheel Drive (veh/day)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='light-truck'>Light Truck (veh/day)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='medium-truck'>Medium Truck (veh/day)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='heavy-truck'>Heavy Truck (veh/day)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='small-bus'>Small Bus (veh/day)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='medium-bus'>Medium Bus (veh/day)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='large-bus'>Large Bus (veh/day)</TableHeaderColumn>
                </BootstrapTable>
                </div>
            </div>
        )
    }
}