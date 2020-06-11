class ListsSchema {
  static schema = {
    name: 'Lists',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      name: 'String',
      created_at: 'date',
      items: {type: 'list', objectType: 'Items'}
    }
  }
}

export default ListsSchema;