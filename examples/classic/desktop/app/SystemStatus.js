/* !
* Ext JS Library
* Copyright(c) 2006-2014 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

Ext.define('Desktop.SystemStatus', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.chart.*',
        'Ext.data.JsonStore'
    ],

    id: 'systemstatus',

    refreshRate: 500,

    createNewWindow: function() {
        var me = this,
            desktop = me.app.getDesktop();

        me.cpuLoadData = [];
        me.cpuLoadStore = Ext.create('store.json', {
            fields: ['core1', 'core2', 'time']
        });

        me.memoryArray = ['Wired', 'Active', 'Inactive', 'Free'];
        me.memoryStore = Ext.create('store.json', {
            fields: ['name', 'memory'],
            data: me.generateData(me.memoryArray)
        });

        me.pass = 0;
        me.processArray = ['explorer', 'monitor', 'charts', 'desktop', 'Ext3', 'Ext4'];
        me.processesMemoryStore = Ext.create('store.json', {
            fields: ['name', 'memory'],
            data: me.generateData(me.processArray)
        });

        me.generateCpuLoad();

        return desktop.createWindow({
            id: 'systemstatus',
            title: 'System Status',
            width: 800,
            height: 600,
            animCollapse: false,
            constrainHeader: true,
            border: false,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            bodyStyle: {
                'background-color': '#FFF'
            },
            listeners: {
                afterrender: {
                    fn: me.updateCharts,
                    delay: 100
                },
                destroy: function() {
                    Ext.undefer(me.updateTimer);
                    me.updateTimer = null;
                },
                scope: me
            },
            items: [{
                flex: 1,
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                    me.createCpu1LoadChart(),
                    me.createCpu2LoadChart()
                ]
            }, {
                flex: 1,
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                    me.createMemoryPieChart(),
                    me.createProcessChart()
                ]
            }]
        });
    },

    createWindow: function() {
        var win = this.app.getDesktop().getWindow(this.id);

        if (!win) {
            win = this.createNewWindow();
        }

        return win;
    },

    createCpu1LoadChart: function() {
        return {
            flex: 1,
            xtype: 'cartesian',
            theme: 'Category1',
            animation: false,
            store: this.cpuLoadStore,
            legend: {
                docked: 'bottom'
            },
            axes: [{
                type: 'numeric',
                position: 'left',
                minimum: 0,
                maximum: 100,
                fields: ['core1'],
                title: {
                    text: 'CPU Load',
                    font: '13px Arial'
                },
                grid: true,
                label: {
                    font: '11px Arial'
                }
            }],
            series: [{
                title: 'Core 1 (3.4GHz)',
                type: 'line',
                fill: true,
                xField: 'time',
                yField: 'core1',
                style: {
                    lineWidth: 4
                }
            }]
        };
    },

    createCpu2LoadChart: function() {
        return {
            flex: 1,
            xtype: 'cartesian',
            theme: 'Category2',
            animation: false,
            store: this.cpuLoadStore,
            legend: {
                docked: 'bottom'
            },
            axes: [{
                type: 'numeric',
                position: 'left',
                minimum: 0,
                maximum: 100,
                grid: true,
                fields: ['core2'],
                title: {
                    text: 'CPU Load',
                    font: '13px Arial'
                },
                label: {
                    font: '11px Arial'
                }
            }],
            series: [{
                title: 'Core 2 (3.4GHz)',
                type: 'line',
                fill: true,
                axis: 'left',
                xField: 'time',
                yField: 'core2',
                style: {
                    lineWidth: 4
                }
            }]
        };
    },

    createMemoryPieChart: function() {
        var me = this;

        return {
            flex: 1,
            xtype: 'polar',
            innerPadding: 3,
            animation: {
                duration: 250
            },
            store: this.memoryStore,

            legend: {
                docked: 'right'
            },
            insetPadding: 40,
            theme: 'Memory:gradients',
            series: [{
                donut: 30,
                type: 'pie',
                angleField: 'memory',
                tooltip: {
                    trackMouse: true,
                    width: 140,
                    height: 28,
                    renderer: function(tooltip, record) {
                        // calculate percentage.
                        var total = 0;

                        me.memoryStore.each(function(rec) {
                            total += rec.get('memory');
                        });
                        tooltip.setTitle(record.get('name') + ': ' +
                            Math.round(record.get('memory') / total * 100) + '%');
                    }
                },
                highlight: {
                    margin: 20
                },
                label: {
                    field: 'name',
                    display: 'rotate',
                    contrast: true,
                    font: '12px Arial'
                }
            }]
        };
    },

    createProcessChart: function() {
        return {
            flex: 1,
            xtype: 'cartesian',
            theme: 'Category1',
            store: this.processesMemoryStore,
            animation: {
                easing: 'easeInOut',
                duration: 750
            },
            innerPadding: '0 5 0 5',
            axes: [{
                type: 'numeric',
                position: 'left',
                minimum: 0,
                maximum: 10,
                fields: ['memory'],
                title: {
                    text: 'Memory',
                    font: '13px Arial'
                },
                label: {
                    font: '11px Arial'
                }
            }, {
                type: 'category',
                position: 'bottom',
                fields: ['name'],
                title: {
                    text: 'System Processes',
                    font: 'bold 14px Arial'
                },
                label: {
                    rotation: {
                        degrees: 45
                    }
                }
            }, {
                type: 'numeric',
                position: 'top',
                fields: ['memory'],
                title: {
                    text: 'Memory Usage',
                    font: 'bold 14px Arial'
                },
                label: {
                    fillStyle: '#FFFFFF',
                    strokeStyle: '#FFFFFF'
                },
                style: {
                    fillStyle: '#FFFFFF',
                    strokeStyle: '#FFFFFF'
                }
            }],
            series: [{
                title: 'Processes',
                type: 'bar',
                style: {
                    minGapWidth: 10
                },
                xField: 'name',
                yField: 'memory',
                renderer: function(sprite, config, data, index) {
                    var lowColor = Ext.util.Color.fromString('#b1da5a'),
                        value = data.store.getAt(index).get('memory'),
                        color;

                    if (value > 5) {
                        color = lowColor.createDarker((value - 5) / 15).toString();
                    }
                    else {
                        color = lowColor.createLighter(((5 - value) / 20)).toString();
                    }

                    if (value >= 8) {
                        color = '#CD0000';
                    }

                    return {
                        fillStyle: color
                    };
                }
            }]
        };
    },

    generateCpuLoad: function() {
        var me = this,
            data = me.cpuLoadData,
            i, lastData;

        function generate(factor) {
            var value = factor + ((Math.floor(Math.random() * 2) % 2) ? -1 : 1) * Math.floor(Math.random() * 9);

            if (value < 0 || value > 100) {
                value = 50;
            }

            return value;
        }

        if (data.length === 0) {
            data.push({
                core1: 0,
                core2: 0,
                time: 0
            });

            for (i = 1; i < 100; i++) {
                data.push({
                    core1: generate(data[i - 1].core1),
                    core2: generate(data[i - 1].core2),
                    time: i
                });
            }

            me.cpuLoadStore.loadData(data);
        }
        else {
            me.cpuLoadStore.data.removeAt(0);
            me.cpuLoadStore.data.each(function(item, key) {
                item.data.time = key;
            });

            lastData = me.cpuLoadStore.last().data;

            me.cpuLoadStore.loadData([{
                core1: generate(lastData.core1),
                core2: generate(lastData.core2),
                time: lastData.time + 1
            }], true);
        }

    },

    generateData: function(names) {
        var data = [],
            i,
            rest = names.length,
            consume;

        for (i = 0; i < names.length; i++) {
            consume = Math.floor(Math.random() * rest * 100) / 100 + 2;
            rest = rest - (consume - 5);
            data.push({
                name: names[i],
                memory: consume
            });
        }

        return data;
    },

    updateCharts: function() {
        var me = this;

        Ext.undefer(me.updateTimer);

        me.updateTimer = Ext.defer(function() {
            var start = new Date().getTime(),
                end;

            if (me.pass % 3 === 0) {
                me.memoryStore.loadData(me.generateData(me.memoryArray));
            }

            if (me.pass % 5 === 0) {
                me.processesMemoryStore.loadData(me.generateData(me.processArray));
            }

            me.generateCpuLoad();

            end = new Date().getTime();

            // no more than 25% average CPU load
            me.refreshRate = Math.max(me.refreshRate, (end - start) * 4);

            me.updateCharts();
            me.pass++;
        }, me.refreshRate);
    }
});

Ext.define('Ext.chart.theme.Memory', {
    extend: 'Ext.chart.theme.Base',
    singleton: true,
    alias: [
        'chart.theme.Memory:gradients'
    ],
    config: {
        colors: [
            'rgb(244, 16, 0)',
            'rgb(248, 130, 1)',
            'rgb(0, 7, 255)',
            'rgb(84, 254, 0)'
        ],
        gradients: {
            type: 'linear',
            degrees: 90
        }
    }
});
