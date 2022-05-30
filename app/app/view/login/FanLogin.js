

Ext.define('Buskart.view.login.FanLogin', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    requires: [
          'Ext.util.DelayedTask',
    ],
    xtype: 'FanLogin',
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        height: '100%',
        width:'100%',
        fullscreen: true,
        // scrollable: false,
        style: "background-color:white;",
        //  style: "background-color: white; color:black;",
        //   style: 'background-image: url("resources/icons/latestCmoveloginNochart.png"); background-size: 100% 100%;border-bottom:1px none;background-repeat: no-repeat;',
        // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        // style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 30%;border-bottom:1px none;',
        items: [






            {
                xtype: 'container',
                style: 'background-image: url("resources/icons/buskartHeaderImgLogin.jpg"); background-size: 100% 280px;background-repeat: no-repeat;',
                //  style: "background-color: transparent;",
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'

                },
                items: [

                    {
                        xtype: 'container',
                        //  style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 40%;background-repeat: no-repeat;',
                        style: "background-color: transparent;",
                        docked: 'top',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        width: '100%',
                        //height: '35%',
                        height: 300,
                        items: [
                             {
                                 //margin: '10 0 0 0',
                                 //height: 160,
                                 //width: 160,
                                 //html: '<img src="resources/icons/ayohaReward01.gif" alt="Image" style="width:160px;height:160px;">',
                                 margin: '10 0 0 -10',
                                 height: 160,
                                 width: 160,
                                 //html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" alt="Image" style="width:160px;height:160px;">',
                                 html: '<img src="resources/icons/buskartlogonewnew.png" alt="Image" style="width:160px;height:160px;">',


                             },
                             {

                                 margin: '0 0 0 0',
                                 // height: 20,
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 25px;font-weight:bold;color:white;">Busking and ART</div>'
                             },
                              {

                                  margin: '0 0 0 0',
                                  // height: 20,
                                  html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;">Digital Platform !</div>'
                              },
                        ]

                    },
                    {
                        xtype: 'container',
                        docked: 'bottom',
                        // margin: '-60 0 0 0',
                        // height: 400,
                        //  style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 40%;background-repeat: no-repeat;',
                        style: "background-color: transparent;",
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        width: '100%',
                        height: '53%',
                        items: [
                            {
                                xtype: 'container',
                                width: '100%',
                                //margin: '-20 0 0 0',
                                //zIndex: 100,
                                // height: 300,
                                //docked: 'bottom',
                                //  style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 40%;background-repeat: no-repeat;',
                                style: "background-color: transparent;",
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center'

                                },
                                items: [
                                    {

                                        margin: '0 0 0 -200',
                                        // height: 20,

                                        html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:normal;color:grey;">User Login</div>'
                                    },

                            {
                                html: '<input type="text" id="ip2" class="LoginTxtBox" placeHolder="Mobile Phone No"/>'
                            },
                             {
                                 margin: '10 0 0 0',
                                 html: '<input type="password" id="ip3" class="LoginTxtBox" placeHolder="Password"/>'
                             },
                            {

                                margin: '20 0 0 150',
                                // height: 20,
                                html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:grey;"><button OnClick="FloatPanel_ForgotPasswordShow()" class="buttonForgotPassword" style="margin:0px 0px 0px 0px;"><u>Forgot Password ?</u></button></div>'
                            },
                            {

                                margin: '18 0 0 0',
                                width: '100%',
                                html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="loadAyohaUserProfileLoginBody()" class="buttonLogin" style="margin:0px 0px 0px 0px;">Login</button></div>'
                                //html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="loadAyohaUserProfile()" class="buttonLogin" style="margin:0px 0px 0px 0px;">Login</button></div>'
                            },
                                ]

                            },

                            //{
                            //    xtype: 'spacer',
                            //    height: '5%',
                            //},

                        {
                            xtype: 'container',
                            docked: 'bottom',
                            //  style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 40%;background-repeat: no-repeat;',
                            style: "background-color: transparent;",
                            layout: {
                                type: 'vbox',
                                pack: 'end',
                                align: 'center'

                            },
                            width: '100%',
                            // height: 100,
                            //  height: '15%',
                            items: [

                                {
                                    margin: '0 0 0 0',
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:grey;">Dont Have Ayoha Account ?.</div>'
                                },
                                 {
                                     margin: '-5 0 0 0',
                                     width: '100%',
                                     html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="FloatPanel_AyohaUserRegistrationAddNewShow()" class="buttonRegisterNow" style="margin:0px 0px 0px 0px;">Sign Up Now!</button></div>'
                                 },

                                 {

                                     margin: '-5 0 0 0',
                                     // height: 20,
                                     html: '<div onclick="termandcondtionpage()" style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:grey;">By Signing up you are agree</div>'
                                 },

                                   {

                                       margin: '-3 0 0 0',
                                       // height: 20,
                                       html: '<div onclick="termandcondtionpage()" style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:grey;">to the <font color=#83D475><u><i>terms and conditions</i></u> </font> of services </div>'
                                   },


                            ]
                        }
                        ]

                    },




                ]

            },














        ]
    },
    initialize: function () {

    }
});


function loadAyohaUserProfileLoginBody() {
    

    
    AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_Store.getProxy().setExtraParam('AyohaHotMerchant_Status', "Approved");
    //AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_Store.getProxy().setUrl(GetAPIurl() + '/AyohaHotMerchant/AyohaHotMerchantLoadByAyohaHotMerchantStatus');
    AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_Store.getProxy().setUrl('http://42.1.63.57/buskartAPI/api/AyohaHotMerchant/AyohaHotMerchantLoadByAyohaHotMerchantStatusModified');
    AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_Store.load();
    //

 
    var task = Ext.create('Ext.util.DelayedTask', function () {
       
        var count = AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_Store.getCount();
        Ext.getCmp('FloatPanel_AdvertisementApprovalStatusLogListID').setStore(AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_Store);
    });
    task.delay(500);


  



    //Ext.getStore('AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_Store').getProxy().setExtraParams({
    //    AyohaHotMerchant_Status: 'Approved',
    //});
    //Ext.StoreMgr.get('AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_Store').load();
    //var myStore = Ext.getStore('AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_Store');
    ////var modelRecord = myStore.getAt(0);
    //var count = myStore.getCount();
    //alert(count);


    Ext.getCmp('tabPanelMain').setActiveItem(1);
}