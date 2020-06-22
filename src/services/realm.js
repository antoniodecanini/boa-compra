import Realm from 'realm';

import ListSchema from '../database/schemas/ListSchema';
import ItemSchema from '../database/schemas/ItemSchema';

function getRealm() {
  return Realm.open({
    schema: [ListSchema, ItemSchema]
  });
}

export default getRealm;