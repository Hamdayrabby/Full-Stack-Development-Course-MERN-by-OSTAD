import "./App.css";
import Greetings from "./components/Greetings";
import Button from "./components/Button";

function App() {

  const players = [
    {
      name: "Messi",
      location: "Argentina",
      jersey: 10,
    },
    {
      name: "Ronaldo",
      location: "Portugal",
      jersey: 7,
    },
    {
      name: "Neymar",
      location: "Brazil",
      jersey: 10,
    },
    {
      name: "Mbappe",
      location: "France",
      jersey: 7,
    },
    {
      location: "Bangladesh",
      jersey: 1,
    },
  ]

  const buttonClk = (name) => {
    alert(`Ki obostha? ${name}`);
  };


  const buttonlogin = () => {
    console.log("Login korse!");
  }


  const buttonlogout = () => {
    console.log("Logout kore felse!");
  }


  const styles = {
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
  }
  return (
    <div
      style={{
        backgroundColor: "Yellow",
        color: "black",
        textAlign: "center",

        alignItems: "center",
      }}>


      {
        players?.map((item, index) => (
          <Greetings button={buttonClk} key={index} person={item?.name} location={item?.location} jersey={item?.jersey} />))
      }
      {/* <Greetings location="Dhaka" person={user} />
      <Greetings location="USA" person={guest} />
      <Greetings location="Spain" person={guest2} />
      <Greetings location="Brazil" person={guest3} /> */}

      {/* <Greetings button={buttonClk()} /> */}

      <Button text={"Login"} onClick={buttonlogin} styles={styles} />
      <Button text={"Logout"} onClick={buttonlogout} styles={{ backgroundColor: "blue", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", }} />
      <Button text={"See more"} onClick={() => console.log("See more")} />
      <Button />
    </div>
  );
}

export default App;
