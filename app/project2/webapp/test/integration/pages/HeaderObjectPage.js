sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ns.project2',
            componentId: 'HeaderObjectPage',
            contextPath: '/Header'
        },
        CustomPageDefinitions
    );
});