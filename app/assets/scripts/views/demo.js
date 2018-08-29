import React from 'react';
import fakeData from '../fakeData'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

function catchNull (value) {
  if (value === null) {
    return (
      <div>_</div>
    )
  }
  return value
} 

const dataList = fakeData
export default class ClickToEditTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      rowid : 0
    }
  }

  render() {
    var a = 'asd'
    var self = this;
    const options = {
      onRowClick: function(row) {
       for( var i = 0; i<dataList.length; i++) {
        if( `${row.road_section_id}` === dataList[i]['road_section_id']) {
          console.log(i)
         self.setState({
           rowid: i
         })
        }
       }
      
      }
    };
    const selectRowProp = {
      mode: 'radio',
      bgColor: 'pink',
      hideSelectColumn: true,
      clickToSelect: true,
    };
    const {rowid} = this.state
    return (
      <div>
      <div className = 'header'>
      <div className = 'left-header'>
      <div className = 'last_synced'> Last synced with ORMA: 24 Aug 2018 20:48(GMT+7)</div>
      <div className = 'total_assets'> Total assets: 1200 - Valid: 1106 / Invalid: 94 (7,83%) </div> 
      </div>
      <div className = 'sync_data'> 
      <img className = 'sync_icon' src='assets/graphics/layout/sync.svg' alt='Sync icon' />
      <span>Sync Data from ORMA</span> 
      </div>
      </div>
      <div className = 'content'>
      <div className = 'content-left'>
      <BootstrapTable data={ dataList } options={ options }  selectRow={ selectRowProp }>
        <TableHeaderColumn dataField='road_section_id' isKey>VPRoMMS ID</TableHeaderColumn>
        <TableHeaderColumn dataField='road_number'>Road No.</TableHeaderColumn>
        <TableHeaderColumn dataField='road_name'>Road Name</TableHeaderColumn>
        <TableHeaderColumn dataField='district'>District</TableHeaderColumn>
        <TableHeaderColumn dataField='length'>Length (km)</TableHeaderColumn>
        <TableHeaderColumn dataField='road_class'>Road Class</TableHeaderColumn>
        <TableHeaderColumn dataField='surface_type'>Surface Type</TableHeaderColumn>
        <TableHeaderColumn dataField='traffic_level'>Traffic Level</TableHeaderColumn>
      </BootstrapTable>
      </div>
      <div className = 'content-right'>
      <div className = 'detail'>
      Details: {dataList[rowid].road_section_id} 
      </div>
      <div className = 'section'>
      <div className = 'title'>SECTION INFORMATION</div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Road number</div>
      <div className = 'inner-right'>{dataList[rowid].road_number}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Road name</div>
      <div className = 'inner-right'>{dataList[rowid].road_name}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Road start location</div>
      <div className = 'inner-right'>{dataList[rowid].road_start}</div>
      </div>
      </div>

      <div className = 'section'>
      <div className = 'title'>SECTION LOCATION</div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Section sequence number</div>
      <div className = 'inner-right'>1</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Session name</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].section_name)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Province</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].province)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>District</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].district)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Commune</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].commune)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Management</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].management)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Start chainage (km)</div>
      <div className = 'inner-right'>{Number(catchNull(dataList[rowid].start_km)).toFixed(2)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>End chainage (km)</div>
      <div className = 'inner-right'>{Number(catchNull(dataList[rowid].end_km)).toFixed(2)}</div>
      </div>
      </div>

      <div className = 'section'>
      <div className = 'title'>SECTION CHARACTERISTICS</div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Length (km) </div>
      <div className = 'inner-right'>{Number(catchNull(dataList[rowid].length)).toFixed(2)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>No. of lanes class</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].lanes)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Carriageway Width</div>
      <div className = 'inner-right'>{Number(catchNull(dataList[rowid].width)).toFixed(2)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Road class</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].road_class)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Terrain type</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].terrain_type)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Temperature classs</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].temperature_class)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Moisture class</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].moisture_class)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Pavement type</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].pavement_type)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Surface type</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].surface_type)}</div>
      </div>
      </div>

      <div className = 'section'>
      <div className = 'title'>SECTION CONDITION</div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Pavement condition class</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].pavement_condition_class)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Roughness (IRI)</div>
      <div className = 'inner-right'>{Number(catchNull(dataList[rowid].roughness)).toFixed(1)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Structural number </div>
      <div className = 'inner-right'>{Number(catchNull(dataList[rowid].structural_no)).toFixed(1)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Pavement age</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].pavement_age)}</div>
      </div>
      </div>

      <div className = 'section'>
      <div className = 'title'>SECTION TRAFFIC(AADT: veh/day)</div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Motorcycle</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].aadt_motorcycle)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Small car</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].aadt_carsmall)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Medium car </div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].aadt_carmediun)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Delivery vehicle</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].aadt_delivery)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>4 wheel drive</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].aadt_4wheel)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Small truck</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].aadt_smalltruck)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Medium truck</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].aadt_mediumtruck)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Heavy truck</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].aadt_largetruck)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Articulated truck</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].aadt_articulatedtruck)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Small bus</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].aadt_smallbus)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Medium bus</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].aadt_mediumbus)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Large bus</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].aadt_largebus)}</div>
      </div>
      <div className = 'inner'> 
      <div className = 'inner-left'>Total traffic</div>
      <div className = 'inner-right'>{catchNull(dataList[rowid].aadt_total)}</div>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}