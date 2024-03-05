sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'nsbtp.modulefi',
            componentId: 'ItemObjectPage',
            contextPath: '/Header/items'
        },
        CustomPageDefinitions
    );
});