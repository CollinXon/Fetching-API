       import image from "../assets/images/my-image.jpg";
       const Home = () => {
        return (
        <div className="Home-css">
        <img src={image} alt= "My Image"/>

        <h4>Collins Ennah</h4>

        <h2>
        HELLO THERE!
        <p>WELCOME TO COLLIXON'S HUB.</p>
        </h2>

        <a href="/repositories">Click here to see repositories.</a>
        </div>
        );
        };

        export default Home;
