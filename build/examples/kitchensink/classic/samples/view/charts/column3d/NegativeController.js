Ext.define('KitchenSink.view.charts.column3d.NegativeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.column-negative-3d',

    onDownload: function() {
        var chart;

        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');

            return;
        }

        chart = this.lookup('chart');

        if (Ext.os.is.Desktop) {
            chart.download({
                filename: '3D Column Chart with Negative Values'
            });
        }
        else {
            chart.preview();
        }
    },

    onSeriesRender: function(sprite, config, data, index) {
        var isNegative = data.store.getAt(index).get('gaming') < 0;

        if (isNegative) {
            return {
                fillStyle: '#974144' // dark red
            };
        }
    }

});
