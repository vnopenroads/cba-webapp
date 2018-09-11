import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import dataConfigurations from '../../dataConfigurations';
import VehicleFleet from './table/vehicle-fleet';
import Annual from './table/annual';
import RoadWords from './table/road-work';
import Maintenance from './table/recurrent-maintenance'
export default class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : 'vehicle-fleet',
        }
    }

    isActive(value) {
        return (value === this.state.title) ? 'nav-con-active' : 'nav-con-default'
    }
    render() {
        let {title} = this.state
        console.log(dataConfigurations)
    
        return (
            <div className = 'content-con'>
            <div className = 'content-con-left'>
            <div className = 'menu-con'>
            <div className = 'title-con'>
            ECONOMIC ANALYSIS PARAMETER
            </div>
            <div className = 'nav-con'>
                <div >
                General
                </div>
                <div>
                Budget Constraints
                </div>
            </div>
            </div>
            <div className = 'menu-con'>
            <div className = 'title-con'>
            VEHICLE FLEET CHARACTERISTICS
            </div>
            <div className = 'nav-con'>
            <div className = {this.isActive('vehicle-fleet')} onClick = {() => {this.setState({title: 'vehicle-fleet'})}}>  
                Vehicle Fleet Characteristics
            </div>
           
            <div className = {this.isActive('annual')} onClick = {() => {this.setState({title: 'annual'})}}>
                Annual Traffic Growth
            </div>
            <div className = {this.isActive('operating')} onClick = {() => {this.setState({title: 'operating'})}}>
                Vehicle Operating Costs (VOC)
            </div>
            <div >
                Vehicle Speeds
            </div>
            </div>
            </div>
            <div className = 'menu-con'>
            {/* <div className = {this.isActive('RW-CHA')} onClick = {() => {this.setState({title: 'RW-CHA'})}}> */}
            <div className = 'title-con'>
            ROAD WORKS CHARACTERISTICS
            </div>
            <div className = 'nav-con'>
            <div className = {this.isActive('RW-CHA')} onClick = {() => {this.setState({title: 'RW-CHA'})}}>
                Road Works
            </div>
            <div className = {this.isActive('maintenance')} onClick = {() => {this.setState({title: 'maintenance'})}}>
                Recurrent Maintenance
            </div>
            <div>
                Road Deteriotation
            </div>
            <div>
                Road Work to be Evaluated
            </div>
            </div>
            </div>
            <div className = 'menu-con'>
            <div className = 'title-con'>
            DEFAULT VALUES
            </div>
            <div className = 'nav-con'>
            <div >
                Carriage Way Width
            </div>
            <div >
                HDM-4 Environmental Coeff
            </div> 
            <div >
                Surface Types
            </div>
            <div >
                Road Condition and Age
            </div> 
            <div >
                Traffic Level
            </div>
            </div>
            </div>
            </div> 
            <div className = 'content-con-right'>
            {(title === 'vehicle-fleet') ?  <VehicleFleet 
            datas = {dataConfigurations["vehicle-fleet"]}
            /> : <div/> }
             {(title === 'annual') ?  <Annual 
            datas = {dataConfigurations["vehicle-fleet"]}
            /> : <div/> }
             {(title === 'operating') ?  <Annual 
            datas = {dataConfigurations["vehicle-fleet"]}
            /> : <div/> }
            {(title === 'RW-CHA') ?  <div> <RoadWords 
            datas = {dataConfigurations['RW-CHA']}
            /> </div> : <div/> }
            {(title === 'maintenance') ?  <div> <Maintenance 
            datas = {dataConfigurations['RW-CHA']}
            /> </div> : <div/> }
            </div>
            </div>
        )
       
    }
}