import indoor from "../../images/indoor.jpg";
import outdoor from "../../images/outdooor.jpg";
import pangden from "../../images/pangden.jpg";
import journey from "../../images/journey.png";
import design from "../../images/design-guide.jpg";
import coss from "../../images/pattern/CossViolio.jpg";
import Empithes from "../../images/pattern/Empithes.jpg";
import Genrox from "../../images/pattern/GenroxBime.jpg";
import Gyvery from "../../images/pattern/GyvertGyng.jpg";
import Mepe from "../../images/pattern/MepeDeque.jpg";
import Multivator from "../../images/pattern/Multivator.jpg";
import Nobel from "../../images/pattern/NoblePregog.jpg";
import Oxykica from "../../images/pattern/Oxykica.jpg";
import Proque from "../../images/pattern/ProqueDeciss.jpg";
import Zetzeve from "../../images/pattern/Zetzeve.jpg";

export const collectionArray = [
  {
    id: "firstCollection",
    collectionImage: indoor,
    collectionName: "Contemporary",
    rugs: [
      {
        id: 1,
        rugName: "Annapurna",
        rugImage: coss,
        rugDimension: "22 X 10",
        rugMaterials: "90% Wool - 10% Cotton",
      },
      {
        id: 2,
        rugName: "Sagarmatha",
        rugImage: Empithes,
        rugDimension: "22 X 10",
        rugMaterials: "90% Wool - 10% Cotton",
      },
      {
        id: 3,
        rugName: "Macchapuchare",
        rugImage: Genrox,
        rugDimension: "22 X 10",
        rugMaterials: "90% Wool - 10% Cotton",
      },
      {
        id: 4,
        rugName: "Langtang",
        rugImage: Gyvery,
        rugDimension: "22 X 10",
        rugMaterials: "90% Wool - 10% Cotton",
      },
      {
        id: 5,
        rugName: "Dhaulagiri",
        rugImage: Mepe,
        rugDimension: "22 X 10",
        rugMaterials: "90% Wool - 10% Cotton",
      },
      {
        id: 6,
        rugName: "Kanchenjunga",
        rugImage: Multivator,
        rugDimension: "22 X 10",
        rugMaterials: "90% Wool - 10% Cotton",
      },
      {
        id: 7,
        rugName: "Lhotse",
        rugImage: Nobel,
        rugDimension: "22 X 10",
        rugMaterials: "90% Wool - 10% Cotton",
      },
      {
        id: 8,
        rugName: "Makalu",
        rugImage: Oxykica,
        rugDimension: "22 X 10",
        rugMaterials: "90% Wool - 10% Cotton",
      },
      {
        id: 9,
        rugName: "Manaslu",
        rugImage: Proque,
        rugDimension: "22 X 10",
        rugMaterials: "90% Wool - 10% Cotton",
      },
      {
        id: 10,
        rugName: "Nuptse",
        rugImage: Zetzeve,
        rugDimension: "22 X 10",
        rugMaterials: "90% Wool - 10% Cotton",
      },
    ],
  },
  {
    id: "secondCollection",
    collectionImage: outdoor,
    collectionName: "Abstract",
  },
  {
    id: "mainCollection",
    collectionImage: pangden,
    collectionName: "Founders' Collection",
  },
  {
    id: "thirdColleciton",
    collectionImage: journey,
    collectionName: "Traditional",
  },
  {
    id: "fourthColleciton",
    collectionImage: design,
    collectionName: "Outdoor",
  },
];
