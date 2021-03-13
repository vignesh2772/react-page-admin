import React from 'react';
import MaterialTable from 'material-table';


const Settlements = () => {
  const data=[
      {SettlementID:'12' ,TransactionID:'1234567890' ,Amount:'1200' ,Tax:'1000' ,CreatedOn:'25/01/2000' ,Status:'Processed'},
      {SettlementID:'16' ,Fees:'1000' ,Amount:'1300' ,Tax:'1000' ,CreatedOn:'29/01/2000' ,Status:'Processed'},
      {SettlementID:'45' ,Fees:'1000' ,Amount:'1900' ,Tax:'1000' ,CreatedOn:'25/01/2000' ,Status:'Processed'},
      {SettlementID:'56' ,Fees:'1000' ,Amount:'1700' ,Tax:'1000' ,CreatedOn:'26/01/2000' ,Status:'Processed'},
      {SettlementID:'20' ,Fees:'1000' ,Amount:'6500' ,Tax:'1000' ,CreatedOn:'25/01/2000' ,Status:'Processed'},
      {SettlementID:'29' ,Fees:'1000' ,Amount:'1200' ,Tax:'1000' ,CreatedOn:'25/01/2000' ,Status:'Processed'},
      {SettlementID:'27' ,Fees:'1000' ,Amount:'1300' ,Tax:'1000' ,CreatedOn:'25/01/2000' ,Status:'Processed'},
      {SettlementID:'28' ,Fees:'1000' ,Amount:'1400' ,Tax:'1000' ,CreatedOn:'24/01/2000' ,Status:'Processed'},
      {SettlementID:'65' ,Fees:'1000' ,Amount:'1900' ,Tax:'1000' ,CreatedOn:'25/01/2000' ,Status:'Processed'},
      {SettlementID:'78' ,Fees:'1000' ,Amount:'1600' ,Tax:'1000' ,CreatedOn:'27/01/2000' ,Status:'Processed'},
      {SettlementID:'32' ,Fees:'1000' ,Amount:'1650' ,Tax:'1000' ,CreatedOn:'25/01/2000' ,Status:'Processed'},
      {SettlementID:'28' ,Fees:'1000' ,Amount:'1260' ,Tax:'1000' ,CreatedOn:'28/01/2000' ,Status:'Processed'},
      {SettlementID:'21' ,Fees:'1000' ,Amount:'1500' ,Tax:'1000' ,CreatedOn:'24/01/2000' ,Status:'Processed'},
      {SettlementID:'22' ,Fees:'1000' ,Amount:'1500' ,Tax:'1000' ,CreatedOn:'20/01/2000' ,Status:'Processed'},

      

  ];
  const columns=[
    {
        title:'Settlement ID',field:'SettlementID'
    },
    {
        title:'Amount',field:'Amount'
    },
    {
        title:'Fees',field:'Fees'
    },
    {
        title:'Tax',field:'Tax'
    },
    {
        title:'CreatedOn',field:'CreatedOn'
    },
    {
      title:'Status',field:'Status'
  },
];
  return(<div >
      <MaterialTable title="Settlements"
      data={data}
      columns={columns}
      options={{
      filtering:true,
      exportButton:true,
      paging:false}}
      />
  </div>);
};

export default Settlements;
