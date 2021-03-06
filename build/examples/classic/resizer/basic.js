Ext.require(['Ext.resizer.Resizer']);

Ext.onReady(function() {
    var custom, customEl;

    Ext.create('Ext.resizer.Resizer', {
        target: 'basic',
        width: 200,
        height: 100,
        minWidth: 100,
        minHeight: 50
    });

    Ext.create('Ext.resizer.Resizer', {
        target: 'wrapped',
        pinned: true,
        minWidth: 50,
        minHeight: 50,
        preserveRatio: true
    });

    Ext.create('Ext.resizer.Resizer', {
        target: 'croix-de-fer',
        width: 160,
        height: 120,
        minWidth: 160,
        minHeight: 120,
        preserveRatio: true,
        heightIncrement: 20,
        widthIncrement: 20
    });

    Ext.create('Ext.resizer.Resizer', {
        target: 'transparent',
        minWidth: 50,
        minHeight: 50,
        preserveRatio: true,
        transparent: true
    });

    custom = Ext.create('Ext.resizer.Resizer', {
        target: 'custom',
        pinned: true,
        minWidth: 50,
        minHeight: 50,
        preserveRatio: true,
        handles: 'all',
        dynamic: true
    });

    customEl = custom.getEl();

    // move to the body to prevent overlap on my blog
    document.body.insertBefore(customEl.dom, document.body.firstChild);

    customEl.on('dblclick', function() {
        customEl.hide(true);
    });
    customEl.hide();

    Ext.get('showMe').on('click', function(e, btn) {
        customEl.show(true);
        customEl.alignTo(Ext.fly(btn), 'l-r', [300, 0]);
    });

    Ext.create('Ext.resizer.Resizer', {
        target: 'dwrapped',
        pinned: true,
        width: 450,
        height: 200,
        minWidth: 200,
        minHeight: 50,
        dynamic: true
    });
});
