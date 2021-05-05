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
