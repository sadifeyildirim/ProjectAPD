sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'nsbtp/modulefi/test/integration/FirstJourney',
		'nsbtp/modulefi/test/integration/pages/HeaderList',
		'nsbtp/modulefi/test/integration/pages/HeaderObjectPage',
		'nsbtp/modulefi/test/integration/pages/ItemObjectPage'
    ],
    function(JourneyRunner, opaJourney, HeaderList, HeaderObjectPage, ItemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('nsbtp/modulefi') + '/index.html'
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