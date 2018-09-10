import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class RoadWork extends React.Component {
    render() {
        let dataRW = this.props.datas['RW']
        return (
            <div className = 'road-work'>
            <div style = {{ fontWeight: 'bold', marginTop:'10px', marginBottom: '10px'}}> Road Works (RoadWorks) </div>
                
                <div className = 'table-RW'>
                <BootstrapTable data={ dataRW } width = '1950' scrollTop={ 'Bottom' }>
                <TableHeaderColumn row='0' colSpan='4'>Road Work </TableHeaderColumn>
                <TableHeaderColumn row='0' colSpan='3'>Road Work Unit Cost</TableHeaderColumn>
                <TableHeaderColumn row='0' colSpan='4'>After Road Works Condition</TableHeaderColumn>
                <TableHeaderColumn row='0' colSpan='3'>Bituminous Works Characteristics</TableHeaderColumn>
                <TableHeaderColumn row='0' colSpan='2'>Future Periodic Maintenace</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='number' isKey>Work Number</TableHeaderColumn>
                <TableHeaderColumn row='1'  width='150' dataField='name'>Work Name</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='code'>Work Code</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='class'>Work Class </TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='roughness'>Roughness (IRI) </TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='flat'>Terrain 1 Flat ($/m2)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='hilly'>Terrain 2 Hilly ($/m2)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='mountainous'>Terrain 3 Mountainous ($/m2)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='lanes-class'>Lanes Class(#)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='width'>Width (m)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='surface'>Surface (1 to 7)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='thickness'>Periodic M.Thickness (mm)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='strength'>Periodic M.Strength (#)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='structural-no'>Rehab/Upgra Structural No (#)</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='RW-num'>Road Work Number</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='interval'>Interval (years)</TableHeaderColumn>
                </BootstrapTable>
                </div>
            </div>
        )
    }
}