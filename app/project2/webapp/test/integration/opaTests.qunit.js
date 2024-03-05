sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/project2/test/integration/FirstJourney',
		'ns/project2/test/integration/pages/HeaderList',
		'ns/project2/test/integration/pages/HeaderObjectPage',
		'ns/project2/test/integration/pages/ItemObjectPage'
    ],
    function(JourneyRunner, opaJourney, HeaderList, HeaderObjectPage, ItemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/project2') + '/index.html'
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