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
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-AR61A7CsmEesPO60bjkbAHaEo%26pid%3DApi&f=1&ipt=803585446061b679fd44e611c8e54fc2a19ecc7295ad118ca7f50720b10f1414&ipo=images",
      name: "whiskers",
      description: "this is a fluffy lady",
      breed: "persian",
    },
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8zPrN1cKXjLvY7jCIWuSyAHaEt%26cb%3Diwp2%26pid%3DApi&f=1&ipt=23790519747a0bd2e02dfa51ce7d025b846171c87b61f8e8f310b7999246caee&ipo=images",
      name: "shadow",
      description: "this is a round stocky boy",
      breed: "british shorthair",
    },
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5xr8Ljg5Z2zwMjJR9qGJyQHaGL%26cb%3Diwc2%26pid%3DApi&f=1&ipt=912fd681d525100b59e5634cd558b2b9967af02bcc341b61b6e84b04532c190d&ipo=images",
      name: "milo",
      description: "this is a playful girl",
      breed: "siamese",
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
            <p>{animal.breed}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
