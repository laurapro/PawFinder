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
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HtrNHdPauT5itN_m1PTx_gHaKk%26cb%3Diwc2%26pid%3DApi&f=1&ipt=7953b6f18c2499df26ed2447298cd018820206fa3a2608bb0fa3a8cccf98f3b6&ipo=images",
      name: "bob",
      description: "this is a nice short nice boy",
      breed: "corgi",
    },
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dGmg4fDt_KdcPZQy-EeDJgHaE7%26pid%3DApi&f=1&ipt=1866da6d7e797d9ab44bdfce89347a0879f7437b4f704cd8860ad5b980048983&ipo=images",
      name: "sally",
      description: "this is a fluffy lady",
      breed: "poodle",
    },
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W69i9b4K_rb8t0UKXA-R7wHaEo%26cb%3Diwc2%26pid%3DApi&f=1&ipt=619596567d1c1b90ed9ec48bd7ea31bec5ff065f8e7d7fa728727f9ecbe8bd6b&ipo=images",
      name: "max",
      description: "this is a round stocky boy",
      breed: "bulldog",
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
            <p>{animal.description}</p>
            <p>{animal.breed}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
