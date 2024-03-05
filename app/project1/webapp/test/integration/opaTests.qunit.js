sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/HeaderList',
		'project1/test/integration/pages/HeaderObjectPage',
		'project1/test/integration/pages/ItemObjectPage'
    ],
    function(JourneyRunner, opaJourney, HeaderList, HeaderObjectPage, ItemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheHeaderList: HeaderList,
					onTheHeaderObjectPage: HeaderObjectPage,
					onTheItemObjectPage: ItemObjectPage
                }
            },
            opaJourney.run
        );
    }
);