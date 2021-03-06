/**
 * This example demonstrates some of the more advanced features of tabs, including:
 *
 * - Side and bottom docking
 * - Tab rotation
 * - Closable tabs
 * - Dynamically adding and removing tabs
 * - Dynamically switching the position and rotation of tab bars
 */
Ext.define('KitchenSink.view.tab.AdvancedTabs', {
    extend: 'Ext.panel.Panel',
    xtype: 'advanced-tabs',
    controller: 'advanced-tabs',

    //<example>
    cls: Ext.baseCSSPrefix + 'shadow',
    otherContent: [{
        type: 'Controller',
        path: 'classic/samples/view/tab/AdvancedTabsController.js'
    }],
    profiles: {
        classic: {
            height: 400,
            width: 580,
            buttonUI: 'default',
            glyph1: null,
            glyph2: null,
            glyph3: null,
            glyphAdd: null,
            icon1: 'classic/resources/images/icons/fam/cog.gif',
            icon2: 'classic/resources/images/icons/fam/user.gif',
            icon3: 'classic/resources/images/icons/fam/accept.gif',
            iconAdd: 'classic/resources/images/icons/fam/add.gif'
        },
        neptune: {
            height: 400,
            width: 580,
            buttonUI: 'default-toolbar',
            glyph1: 42,
            glyph2: 70,
            glyph3: 86,
            glyphAdd: 43,
            icon1: null,
            icon2: null,
            icon3: null,
            iconAdd: null
        },
        'neptune-touch': {
            width: 740,
            height: 400
        },
        triton: {
            width: 700,
            height: 400
        },
        graphite: {
            width: 1025,
            height: 450
        },
        'classic-material': {
            width: 1025,
            height: 450,
            icon1: 'classic/resources/images/icons/fam/cog.gif',
            icon2: 'classic/resources/images/icons/fam/user.gif',
            icon3: 'classic/resources/images/icons/fam/accept.gif',
            iconAdd: 'classic/resources/images/icons/fam/add.gif'
        }
    },
    //</example>

    width: '${width}',
    height: '${height}',
    layout: 'fit',
    viewModel: true,

    tbar: [{
        xtype: 'label',
        text: 'Position:',
        padding: '0 0 0 5'
    }, {
        xtype: 'segmentedbutton',
        reference: 'positionBtn',
        value: 'top',
        defaultUI: '${buttonUI}',
        items: [{
            text: 'Top',
            value: 'top'
        }, {
            text: 'Right',
            value: 'right'
        }, {
            text: 'Bottom',
            value: 'bottom'
        }, {
            text: 'Left',
            value: 'left'
        }]
    }, {
        xtype: 'label',
        text: 'Rotation:',
        padding: '0 0 0 5'
    }, {
        xtype: 'segmentedbutton',
        reference: 'rotationBtn',
        value: 'default',
        defaultUI: '${buttonUI}',
        items: [{
            text: 'Default',
            value: 'default'
        }, {
            text: 'None',
            value: 0
        }, {
            text: '90deg',
            value: 1
        }, {
            text: '270deg',
            value: 2
        }]
    }, {
        xtype: 'button',
        icon: '${iconAdd}',
        glyph: '${glyphAdd}',
        tooltip: 'Add Tab',
        listeners: {
            click: 'onAddTabClick'
        }
    }, {
        xtype: 'button',
        enableToggle: true,
        tooltip: 'Auto Cycle!',
        listeners: {
            toggle: 'onAutoCycleToggle'
        },
        glyph: 109
    }],

    items: [{
        xtype: 'tabpanel',
        reference: 'tabpanel',
        border: false,
        defaults: {
            bodyPadding: 10,
            scrollable: true,
            closable: true,
            border: false
        },
        bind: {
            tabPosition: '{positionBtn.value}',
            tabRotation: '{rotationBtn.value}'
        },
        items: [{
            title: 'Tab 1',
            icon: '${icon1}',
            glyph: '${glyph1}',
            html: KitchenSink.DummyText.longText
        }, {
            title: 'Tab 2',
            icon: '${icon2}',
            glyph: '${glyph2}',
            html: KitchenSink.DummyText.extraLongText
        }, {
            title: 'Tab 3',
            icon: '${icon3}',
            glyph: '${glyph3}',
            html: KitchenSink.DummyText.longText
        }]
    }]
});
