class ListSchema {
  static schema = {
    name: 'List',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      title: 'string', 
      created_at: 'date',
      items: { type: 'list', objectType: 'Item' }
    },
  };
}

export default ListSchema;