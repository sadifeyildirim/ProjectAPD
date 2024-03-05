sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ns.project2',
            componentId: 'HeaderList',
            contextPath: '/Header'
        },
        CustomPageDefinitions
    );
});