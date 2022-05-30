Ext.define('Buskart.store.AyohaHotMerchant.AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_Store', {
});

var AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_Store = Ext.create('Ext.data.Store', {

    model: 'Buskart.model.AyohaHotMerchant.AyohaHotMerchantModel',
    id: '_AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_StoreID',

    proxy: {
        type: 'ajax',
        //url: GetAPIurl() + '/AyohaHotMerchant/AyohaHotMerchantLoadByAyohaHotMerchantStatus',
        url: 'http://42.1.63.57/buskartAPI/api/AyohaHotMerchant/AyohaHotMerchantLoadByAyohaHotMerchantStatusModified',
        actionMethods: {
            read: 'GET'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
        },
      
    },



    //autoLoad: true

});



//Ext.define('Buskart.store.AyohaHotMerchant.AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_Store', {
//    extend: 'Ext.data.Store',
//    //alias: 'store.AyohaHotMerchantLoadByAyohaHotMerchantStatusModified',
//    config: {
//        model: 'Buskart.model.AyohaHotMerchant.AyohaHotMerchantModel',
//        autoLoad: false,

//        proxy: {
//            type: 'ajax',
//            //url: GetAPIurl() + '/AyohaHotMerchant/AyohaHotMerchantLoadByAyohaHotMerchantStatus',
//            url: 'http://42.1.63.57/buskartAPI/api/AyohaHotMerchant/AyohaHotMerchantLoadByAyohaHotMerchantStatusModified',
//            actionMethods: {
//                read: 'GET'
//            },
//            reader: {
//                type: 'json',
//                rootProperty: 'data',
//                //totalProperty: 'total',
//                //successProperty: 'success',
//                //messageProperty: 'message'
//            },

//        }
//    }
//        //proxy: {

//        //    type: 'ajax',
//        //    //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
//        //    //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
//        //    url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLogin',
//        //    reader: {
//        //        type: 'json',
//        //        rootProperty: 'results',
//        //        totalProperty: 'total',
//        //        successProperty: 'success',
//        //        messageProperty: 'message'
//        //    },



//        //}


//    //}
//});
