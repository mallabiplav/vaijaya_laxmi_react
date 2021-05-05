export default {
  name: "collections",
  title: "Collections",
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
