using {  btp.apd as apdServices } from '../db/schema';

service btpService {

 entity Header as projection on apdServices.Header;
 entity Item as projection on apdServices.Item;
}
 