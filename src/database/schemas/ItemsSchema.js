class ItemsSchema {
  static schema = {
    name: 'Items',
    primarykey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      list_id: 'int',
      item: 'String',
      amount: 'double',
      price: 'double'
    }
  }
}

export default ItemsSchema;