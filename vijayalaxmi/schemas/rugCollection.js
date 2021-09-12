export default {
  name: "rugCollections",
  title: "Rug Collections",
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
      name: "mainCollectionImage",
      title: "Rug Main Image",
      type: "image",
    },
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "rugList",
      title: "rug List",
      type: "array",
      of: [
        {
          title: "Rugs",
          type: "reference",
          to: { type: "rugs" },
        },
      ],
    },
  ],
};
