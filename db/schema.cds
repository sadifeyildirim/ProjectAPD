namespace btp.apd;

using
{
    cuid,
    managed
}
from '@sap/cds/common';

entity Header : cuid, managed
{
    documentNumner : Integer;
    items : Association to many Item on items.header = $self;
}

entity Item : cuid, managed
{
    documentNumner : Integer;
    itemNumner : Integer;
    header : Association to one Header;
}
