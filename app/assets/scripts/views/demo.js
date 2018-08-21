import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

const selectRowProp = {
  mode: 'checkbox',
  bgColor: 'rgb(238, 193, 213)'
};

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i,
      coupon: 'yes',
      status: 'no',
      customer: 'Customer' + i,
      order: i
    });
  }
}

addProducts(15);

const cellEditProp = {
  mode: 'click',
  blurToSave: true
};

export default class ClickToEditTable extends React.Component {
  render() {
    return (
      <div className = 'content'>
      <BootstrapTable data={ products } cellEdit={ cellEditProp }  selectRow={ selectRowProp }
      deleteRow
      exportCSV>
          <TableHeaderColumn row='0' rowSpan='2' dataField='id' isKey>ID</TableHeaderColumn>
        <TableHeaderColumn row='0' colSpan='3' dataSort csvHeader='Product' headerAlign='center'>Product</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='name' width='175' dataAlign='center'>name</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='price' dataSort>price</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='coupon' width='70'>Coupon</TableHeaderColumn>
        <TableHeaderColumn row='0' csvHeader='In stock' rowSpan='2' headerAlign='center'  dataField='status'>In stock</TableHeaderColumn>
        <TableHeaderColumn row='0' colSpan='2' csvHeader='Customer' headerAlign='center' filter={ { type: 'TextFilter', delay: 1000 } }>Customer</TableHeaderColumn>
        <TableHeaderColumn row='1' csvHeader='name' headerAlign='center' dataField='customer'>name</TableHeaderColumn>
        <TableHeaderColumn row='1' csvHeader='order' headerAlign='center' dataField='order' dataSort>order</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }
}