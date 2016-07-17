import test from 'tape';
import React from 'react';
import createComponent from 'react-unit';

import menuBar from '../../../src/components/menu-bar/menu-bar';

test('MenuBar component ', nest => {
    nest.test('shows the browse link text', assert => {
        const MenuBar = menuBar(React);
        const el = <MenuBar browse="Browse"/>;
        const $ = createComponent(el);

        const output = $.findByQuery('.browse')[0];

        const actual = output.text;

        assert.ok(actual.length > 0, 'should not be an empty string');
        assert.end();
    });

});
