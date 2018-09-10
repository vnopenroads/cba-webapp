import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import dataConfigurations from '../../dataConfigurations';
import VehicleFleet from './vehicle-fleet';
import RoadWords from './road-work'

export default class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : 'vehicle-fleet',
        }
    }

    isActive(value) {
        return (value === this.state.title) ? 'title-active' : 'title-con'
    }
    render() {
        let {title} = this.state
    
        return (
            <div className = 'content-con'>
            <div className = 'content-con-left'>
            <div className = 'title-con'>
            ECONOMIC ANALYSIS PARAMETER
            </div>
            <div className = {this.isActive('vehicle-fleet')} onClick = {() => {this.setState({title: 'vehicle-fleet'})}}>
            VEHICLE FLEET CHARACTERISTICS
            </div>
            <div className = {this.isActive('RW-CHA')} onClick = {() => {this.setState({title: 'RW-CHA'})}}>
            ROAD WORKS CHARACTERISTICS
            </div>
            <div className = 'title-con'>
            DEFAULT VALUES
            </div>
            <div className = 'title-con'>
            VOC AND SPEEDS DATA
            </div>
            <div className = 'title-con'>
            ROADS WORKS DEFINITION
            </div>
            </div> 
            <div className = 'content-con-right'>
            {(title === 'vehicle-fleet') ?  <VehicleFleet 
            datas = {dataConfigurations["vehicle-fleet"]}
            /> : <div/> }
            {(title === 'RW-CHA') ?  <div> <RoadWords 
            datas = {dataConfigurations['RW-CHA']}
            /> </div> : <div/> }
            </div>
            </div>
        )
       
    }
}