import React from 'react';
import MaterialTable from 'material-table';


const Refunds = () => {
  const data=[
      {RefundID:'12' ,TransactionID:'1234567890' ,Amount:'1200' ,CreatedOn:'25/01/2000' ,Status:'Processed'},
      {RefundID:'16' ,TransactionID:'1234454550' ,Amount:'1300' ,CreatedOn:'29/01/2000' ,Status:'Processed'},
      {RefundID:'45' ,TransactionID:'1238444590' ,Amount:'1900' ,CreatedOn:'25/01/2000' ,Status:'Processed'},
      {RefundID:'56' ,TransactionID:'5554567890' ,Amount:'1700' ,CreatedOn:'26/01/2000' ,Status:'Processed'},
      {RefundID:'20' ,TransactionID:'1989867890' ,Amount:'6500' ,CreatedOn:'25/01/2000' ,Status:'Processed'},
      {RefundID:'29' ,TransactionID:'5534567890' ,Amount:'1200' ,CreatedOn:'25/01/2000' ,Status:'Processed'},
      {RefundID:'27' ,TransactionID:'1288867890' ,Amount:'1300' ,CreatedOn:'25/01/2000' ,Status:'Processed'},
      {RefundID:'28' ,TransactionID:'9834555590' ,Amount:'1400' ,CreatedOn:'24/01/2000' ,Status:'Processed'},
      {RefundID:'65' ,TransactionID:'1337555590' ,Amount:'1900' ,CreatedOn:'25/01/2000' ,Status:'Processed'},
      {RefundID:'78' ,TransactionID:'1934984560' ,Amount:'1600' ,CreatedOn:'27/01/2000' ,Status:'Processed'},
      {RefundID:'32' ,TransactionID:'9834567890' ,Amount:'1650' ,CreatedOn:'25/01/2000' ,Status:'Processed'},
      {RefundID:'28' ,TransactionID:'8734567890' ,Amount:'1260' ,CreatedOn:'28/01/2000' ,Status:'Processed'},
      {RefundID:'21' ,TransactionID:'3234567890' ,Amount:'1500' ,CreatedOn:'24/01/2000' ,Status:'Processed'},
      {RefundID:'22' ,TransactionID:'1734567890' ,Amount:'1500' ,CreatedOn:'20/01/2000' ,Status:'Processed'},

      

  ];
  const columns=[
    {
        title:'Refund ID',field:'RefundID'
    },
    {
        title:'Transaction ID',field:'TransactionID'
    },
    {
        title:'Amount',field:'Amount'
    },
    {
        title:'CreatedOn',field:'CreatedOn'
    },
    {
      title:'Status',field:'Status'
  },
];
  return(<div >
      <MaterialTable title="Payments"
      data={data}
      columns={columns}
      options={{
      filtering:true,
      exportButton:true,
      paging:false}}
      />
  </div>);
};

export default Refunds;
