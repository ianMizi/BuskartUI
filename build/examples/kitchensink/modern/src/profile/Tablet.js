Ext.define('KitchenSink.profile.Tablet', {
    extend: 'KitchenSink.profile.Base',

    controllers: ['Main'],

    mainView: 'tablet.Main',

    isActive: function() {
        return Ext.os.is.Tablet;
    }
});
