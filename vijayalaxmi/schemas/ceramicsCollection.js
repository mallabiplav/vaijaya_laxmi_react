export default {
  name: "ceramicCollection",
  title: "Ceramic Collections",
  type: "document",
  fields: [
    {
      name: "typeOfProduct",
      title: "Type of Product",
      type: "reference",
      to: { type: "products" },
    },
    {
      name: "collectionName",
      title: "Collection Name",
      type: "string",
    },
    {
      name: "ceramicList",
      title: "ceramic List",
      type: "array",
      of: [
        {
          title: "Ceramics",
          type: "reference",
          to: { type: "ceramics" },
        },
      ],
    },
  ],
};
