export default {
  name: "rugs",
  title: "Rugs",
  type: "document",
  fields: [
    { name: "id", title: "Rug ID", type: "string" },
    {
      name: "title",
      title: "Rug Name",
      type: "string",
    },
    {
      name: "description",
      title: "Rug Description",
      type: "text",
    },
    {
      name: "material",
      title: "Rug Material",
      type: "string",
    },
    {
      name: "size",
      title: "Rug Size",
      type: "string",
    },
    {
      name: "carpetImage",
      title: "Rug Image",
      type: "image",
    },
  ],
};
