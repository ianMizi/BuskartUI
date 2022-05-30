/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Buskart.Application',

    name: 'Buskart',

    requires: [
        // This will automatically load all classes in the Buskart namespace
        // so that application classes do not need to require each other.
        'Buskart.*'
    ],

    models: ['AyohaHotMerchant.AyohaHotMerchantModel'],
    stores: ['AyohaHotMerchant.AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_Store'],
    views: ['login.FanLogin', 'login.FloatPanel_ForgotPassword', 'config.Route'],

    mainView: 'Buskart.view.main.Main',

    launch: function () {
        // Destroy the #appLoadingIndicator element
        //  Ext.fly('appLoadingIndicator').destroy();

       
        Ext.getCmp('tabPanelMain').getTabBar().hide();

        //  Ext.Viewport.add(Ext.create('ianMizi.view.Main'));

    },

    // The name of the initial view to create.
   
});
