import React from 'react';
import MaterialTable from 'material-table';

const Settlements = () => {
  const data=[
      {TransactionID:'1234567890' ,OrderID:'20' ,Amount:'1200',PaymentGateway:'HDFC',CreatedOn:'25/01/2000,2.34pm'},
      {TransactionID:'2979865655' ,OrderID:'20' ,Amount:'1800',PaymentGateway:'HDFC',CreatedOn:'25/01/2000'},
      {TransactionID:'5646465465' ,OrderID:'20' ,Amount:'3400',PaymentGateway:'HDFC',CreatedOn:'25/01/2000'},
      {TransactionID:'9687576564' ,OrderID:'20' ,Amount:'2300',PaymentGateway:'HDFC',CreatedOn:'25/01/2000'},
      {TransactionID:'2788768680' ,OrderID:'20' ,Amount:'1900',PaymentGateway:'HDFC',CreatedOn:'25/01/2000'},
      {TransactionID:'1234567890' ,OrderID:'20' ,Amount:'1200',PaymentGateway:'HDFC',CreatedOn:'25/01/2000'},
      {TransactionID:'2979865655' ,OrderID:'20' ,Amount:'1800',PaymentGateway:'HDFC',CreatedOn:'25/01/2000'},
      {TransactionID:'5646465465' ,OrderID:'20' ,Amount:'3400',PaymentGateway:'HDFC',CreatedOn:'25/01/2000'},
      {TransactionID:'9687576564' ,OrderID:'20' ,Amount:'2300',PaymentGateway:'HDFC',CreatedOn:'25/01/2000'},
      {TransactionID:'2788768680' ,OrderID:'20' ,Amount:'1900',PaymentGateway:'HDFC',CreatedOn:'25/01/2000'},

  ];
  const columns=[
    {
        title:'TransactionID',field:'TransactionID'
    },
    {
        title:'OrderID',field:'OrderID'
    },
    {
        title:'Amount',field:'Amount'
    },
    {
        title:'PaymentGateway',field:'PaymentGateway'
    },
    {
        title:'CreatedOn',field:'CreatedOn'
    }
];
  return(<div>
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

export default Settlements;
