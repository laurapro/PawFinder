import { useFlags } from "launchdarkly-react-client-sdk";
import "./Home.css";

const Home = () => {
  const { animalPreference } = useFlags();

  type Animal = {
    imgURL: string;
    name: string;
    description: string;
    breed: string;
  };

  const dogList: Animal[] = [
    {
      imgURL: "https://i.postimg.cc/pr7KhtWf/IMG-1739.avif",
      name: "Leona",
      description: "Spayed Female, 3 years old, 69 lbs",
      breed: "Siberian Husky Mix",
    },
    {
      imgURL: "https://i.postimg.cc/Z56DSwH7/IMG-0018.avif",
      name: "Mustaaaard",
      description: "Neutered Male, 2 years old, 40 lbs",
      breed: "Belgian Malinois",
    },
    {
      imgURL: "https://i.postimg.cc/Pfc6vgFV/IMG-2221.avif",
      name: "Petita",
      description: "Spayed Female, 2 years old, 26 lbs",
      breed: "Rat Terrier",
    },
    {
      imgURL: "https://i.postimg.cc/d1hxzwxd/image004.png",
      name: "Ricco",
      description: "Neutered Male, 2 years old, 15 lbs",
      breed: "Chihuahua Mix",
    },
  ];
  const catList: Animal[] = [
    {
      imgURL: "https://i.postimg.cc/Sxhr3HTR/Image.png",
      name: "Cuddlebug",
      description:
        "He doesn't seem bothered by other cats in the home. Eats very well. Extremely friendly and a true Cuddlebug",
      breed: "n/a",
    },
    {
      imgURL: "https://i.postimg.cc/3x0Tf4qY/A281943-000.jpg",
      name: "Mittens",
      description: "3 week old kitten, needs to be bottle fed. 1/2",
      breed: "",
    },
    {
      imgURL: "https://i.postimg.cc/3JchZCnt/A281941-000.jpg",
      name: "Milo",
      description: "3 week old kitten, needs to be bottle fed. 2/2",
      breed: "",
    },
    {
      imgURL:
        "https://i.postimg.cc/DZwFgjkY/original-BE73-CA8-B-6-C18-4816-B2-B5-484783426189.jpg",
      name: "Nunu",
      description: "5 week old kitten, Going 4-5 hours between feedings",
      breed: "Domestic SH",
    },
  ];
  const list = animalPreference === "cat" ? catList : dogList;
  return (
    <>
      {list?.map((animal, index) => (
        <div className="card" key={index}>
          <img src={animal.imgURL} alt="Animal" className="card-image" />
          <div className="card-text">
            <h3>{animal.name}</h3>
            <p>{animal.description}</p> <br />
            {animal.breed && animal.breed !== "n/a" && <p>{animal.breed}</p>}
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
