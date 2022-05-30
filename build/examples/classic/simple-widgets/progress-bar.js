Ext.require([
    'Ext.ProgressBar'
]);

Ext.onReady(function() {
    // Please do not use the following runner code as a best practice! :)
    var Runner = function() {
            var f = function(v, pbar, btn, count, cb) {
                return function() {
                    var i;

                    if (v > count) {
                        btn.dom.disabled = false;
                        cb();
                    }
                    else {
                        if (pbar.id === 'pbar4') {
                            // give this one a different count style for fun
                            i = v / count;

                            pbar.updateProgress(i, Math.round(100 * i) + '% completed...');
                        }
                        else {
                            pbar.updateProgress(v / count, 'Loading item ' + v + ' of ' + count + '...');
                        }
                    }
                };
            };

            return {
                run: function(pbar, btn, count, cb) {
                    var ms, i;

                    btn.dom.disabled = true;
                    ms = 5000 / count;

                    for (i = 1; i < (count + 2); i++) {
                        setTimeout(f(i, pbar, btn, count, cb), i * ms);
                    }
                }
            };
        }(),

        // Reset the disabled state on the buttons because firefox will retain the state
        // between page refreshes

        // ==== Progress bar 1 ====
        pbar1 = Ext.create('Ext.ProgressBar', {
            text: 'Initializing...'
        }),

        btn1 = Ext.get('btn1'),
        pbar2, btn2, pbar3, btn3, pbar4, btn4;

    btn1.dom.disabled = false;

    btn1.on('click', function() {
        Ext.fly('p1text').update('Working');

        if (!pbar1.rendered) {
            pbar1.render('p1');
        }
        else {
            pbar1.text = 'Initializing...';
            pbar1.show();
        }

        Runner.run(pbar1, Ext.get('btn1'), 10, function() {
            pbar1.reset(true);
            Ext.fly('p1text').update('Done.').show();
        });
    });

    // ==== Progress bar 2 ====
    pbar2 = Ext.create('Ext.ProgressBar', {
        text: 'Ready',
        id: 'pbar2',
        cls: 'left-align',
        renderTo: 'p2'
    });

    btn2 = Ext.get('btn2');

    btn2.dom.disabled = false;

    btn2.on('click', function() {
        Runner.run(pbar2, btn2, 12, function() {
            pbar2.reset();
            pbar2.updateText('Done.');
        });
    });

    // ==== Progress bar 3 ====
    pbar3 = Ext.create('Ext.ProgressBar', {
        id: 'pbar3',
        width: 300,
        renderTo: 'p3'
    });

    pbar3.on('update', function(val) {
        // You can handle this event at each progress interval if
        // needed to perform some other action
        Ext.fly('p3text').dom.innerHTML += '.';
    });

    btn3 = Ext.get('btn3');

    btn3.dom.disabled = false;

    btn3.on('click', function() {
        Ext.fly('p3text').update('Working');
        btn3.dom.disabled = true;
        pbar3.wait({
            interval: 200,
            duration: 5000,
            increment: 15,
            fn: function() {
                btn3.dom.disabled = false;
                Ext.fly('p3text').update('Done');
            }
        });
    });

    // ==== Progress bar 4 ====
    pbar4 = Ext.create('Ext.ProgressBar', {
        text: 'Waiting on you...',
        id: 'pbar4',
        textEl: 'p4text',
        cls: 'custom',
        renderTo: 'p4'
    });

    btn4 = Ext.get('btn4');

    btn4.dom.disabled = false;

    btn4.on('click', function() {
        Runner.run(pbar4, btn4, 19, function() {
            pbar4.updateText('All finished!');
        });
    });
});
