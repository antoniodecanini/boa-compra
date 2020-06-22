class ItemSchema {
  static schema = {
    name: 'Item',
    properties: {
      id: { type: 'int', indexed: true },
      name: 'string',
      amount: 'double',
      price: 'double'
    },
  };
}

export default ItemSchema;