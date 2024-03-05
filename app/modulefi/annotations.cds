using btpService as service from '../../srv/services';

annotate service.Header with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'documentNumner',
            Value : documentNumner,
        },
    ]
);
annotate service.Header with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'documentNumner',
                Value : documentNumner,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
