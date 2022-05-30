/**
 * This view is an example list of people.
 */



Ext.define('Buskart.view.main.List', {
    extend: 'Ext.dataview.List',
   // xtype: 'basic-list',
    xtype: 'mainlist',
    height: '100%',
    width: '100%',
    style: 'background-color:white;border-radius: 0px 0px 0px 0px;',
  //  disableSelection: true,
    scrollable: {
        direction: 'vertical',
        indicators: {
            y: {
                autoHide: true
            },
            x: {
                autoHide: true
            }
        }
    },
    id: 'FloatPanel_AdvertisementApprovalStatusLogListID',
   //  itemTpl: '{AyohaHotMerchant_Status} {AyohaHotMerchant_Status}',
     itemTpl: '<div class="myContent" style="background-color:transparent;">' +


                          // '<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:20px">{No}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:120px">{SubscriberAccountName}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberPhoneNumber}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberEmail}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:100px">{SubscribedDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:50px">{PhonePlatform}</th></tr></table>' +


                      //jadi// '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:13%"><b>{ID}</b></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%"><b>{ReceiptName}</b><br>{CreatedDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div>' +

                    '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:98%;"><b>{AyohaHotMerchant_Status}</b><br><font size=2>Approval Remarks:{AyohaHotMerchant_Description}</font><br><font size=2>Created By:{CreatedBy}</font><br><font size=2>Created Date:{CreatedDate}</font></div>' +

                     //edit only/ '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +


             // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 35px 0px 0px"><button class="buttonssDelete button14" OnClick="DeleteReceiptImageFromList({ID})"><img src="resources/icons/UogradeAutismeIcon/deletedustbin.png" height="30" width="30"></button></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageParkingShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +

                           '</div>',
    store: 'List',
    grouped: false
});










//Ext.define('Buskart.view.main.List', {
//    extend: 'Ext.grid.Grid',
//    xtype: 'mainlist',
//    width: '100%',
//    height: 290,
//    //requires: [
//    //    'Buskart.store.Personnel'
//    //],

//    //title: 'Personnel',

//    //store: {
//    //    type: 'personnel'
//    //},

//    //columns: [{ 
//    //    text: 'Name',
//    //    dataIndex: 'name',
//    //    width: 100,
//    //    cell: {
//    //        userCls: 'bold'
//    //    }
//    //}, {
//    //    text: 'Email',
//    //    dataIndex: 'email',
//    //    width: 230 
//    //}, { 
//    //    text: 'Phone',
//    //    dataIndex: 'phone',
//    //    width: 150 
//    //}],

//    //listeners: {
//    //    select: 'onItemSelected'
//    //}











      
//            //  flex: 1,
//    store: '_AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_StoreID',
//            id: 'FloatPanel_AdvertisementApprovalStatusLogListID',
//            mode: 'SINGLE',
//            disableSelection: false,

//            //itemTpl: '<div class="myContent">' +
//            //   '<div><b>{ID}</b></div>' +
//            //   '<div>{ReceiptName}</div>' +
//            //   '<div style="float:right;width:3%;margin:-35px 10px 0px 0px"><img src="resources/icons/editresititem.png" height="22" width="30"></div>' +
//            //   '<div><b>{Amount}</b></div>' +
//            //    '<div style="display: none;">{ID}</div>' +
//            //   '</div>',

//            itemTpl: '<div class="myContent">' +


//                      // '<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:20px">{No}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:120px">{SubscriberAccountName}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberPhoneNumber}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberEmail}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:100px">{SubscribedDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:50px">{PhonePlatform}</th></tr></table>' +


//                  //jadi// '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:13%"><b>{ID}</b></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%"><b>{ReceiptName}</b><br>{CreatedDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div>' +

//                '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:98%;"><b>{AyohaHotMerchant_Status}</b><br><font size=2>Approval Remarks:{AyohaHotMerchant_Description}</font><br><font size=2>Created By:{CreatedBy}</font><br><font size=2>Created Date:{CreatedDate}</font></div>' +

//                 //edit only/ '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +


//         // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 35px 0px 0px"><button class="buttonssDelete button14" OnClick="DeleteReceiptImageFromList({ID})"><img src="resources/icons/UogradeAutismeIcon/deletedustbin.png" height="30" width="30"></button></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageParkingShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +

//                       '</div>',

           
//            disableSelection: true,

//            listeners: {


//                itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                              




//                },

//                itemsingletap: function (dataview, index, target, record, e, eOpts) {
                               

//                }
//            }


     

    


 



//});
