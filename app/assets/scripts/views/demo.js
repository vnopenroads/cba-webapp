import config from '../config';
import mapboxgl from 'mapbox-gl';
import React from 'react';
import fakeData from '../fakeData';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import MapOptions from '../components/map-options';
import MapLegend from '../components/map-legend';
import SectionDetails from './cba/section_details';



const dataList = fakeData;
export default class ClickToEditTable extends React.Component {

  propTypes: {
    rowId: React.PropTypes.number,
    layer: React.PropTypes.string,
    activeRoad: React.PropTypes.string,
    lng: React.PropTypes.number,
    lat: React.PropTypes.number,
    zoom: React.PropTypes.number,
    selectExploreMapLayer: React.PropTypes.func,
    exploreMapShowNoVpromms: React.PropTypes.func,
    setMapPosition: React.PropTypes.func,
    fetchActiveRoad: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {data : [], rowId : 0, lat: 20.029, lng: 105.73, zoom: 6};
    console.log("in constructor");
  };


  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.state);
    // mapboxgl.accessToken = config.mbToken;
    mapboxgl.accessToken = "pk.eyJ1IjoiamFtaWVjb29rIiwiYSI6ImNpcjhrOHpxMjAwd3BnY20zdWJ0MWQxZGcifQ.Bv4HcBin6hloqDai0WEgyA";
    const { lng, lat, zoom, activeRoad } = this.state;
    console.log(lat + "," + lng + "," + zoom);

    this.map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/light-v9',
      failIfMajorPerformanceCaveat: false,
      center: [lng, lat],
      zoom: zoom
    });

  };

  render() {
    console.log('Render');
    var a = 'asd';
    var self = this;
    const options = {
      onRowClick: function(row) {
       for( var i = 0; i<dataList.length; i++) {
        if( `${row.road_section_id}` === dataList[i]['road_section_id']) {
          console.log(i);
          self.setState({rowId: i});
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
    const {rowId} = this.state;
    return (
      <div>
        <div className = 'header'>
          <div className = 'left-header'>
            <div className = 'last_synced'> Last synced with ORMA: 24 Aug 2018 20:48(GMT+7)</div>
            <div className = 'total_assets'> Total assets: 1200 - Valid: 1106 </div>
          </div>
          <div className = 'sync_data'>
            <img className = 'sync_icon' src='assets/graphics/layout/sync.svg' alt='Sync icon' />
            <span>Sync Data from ORMA</span>
          </div>
        </div>

        <div className = 'content'>
          <div className = 'content-left'>
            <div className="map-container" id='map-container' />
          </div>
        <div className = 'content-right'>
        <SectionDetails rowId={this.state.rowId}/>
        </div>
        </div>

        <div>
          <BootstrapTable data={ dataList } options={ options }  selectRow={ selectRowProp }>
            <TableHeaderColumn dataField='road_section_id' isKey>VPRoMMS ID</TableHeaderColumn>
            <TableHeaderColumn dataField='road_number'>Road Num.</TableHeaderColumn>
            <TableHeaderColumn dataField='road_name'>Road Name</TableHeaderColumn>
            <TableHeaderColumn dataField='district'>District</TableHeaderColumn>
            <TableHeaderColumn dataField='length'>Length (km)</TableHeaderColumn>
            <TableHeaderColumn dataField='road_class'>Road Class</TableHeaderColumn>
            <TableHeaderColumn dataField='surface_type'>Surface Type</TableHeaderColumn>
            <TableHeaderColumn dataField='traffic_level'>Traffic Level</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}
