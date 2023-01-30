import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import "./landingPage.css";

var buttonLink = Scroll.Link;

export default function LandingPage() {
  var goToinfoOne = document.getElementsByClassName("infoOneTitle");
  console.log(goToinfoOne);

  function handleClickOne() {
    goToinfoOne.scrollIntoView();
  }

  return (
    <div className="logoContainer">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Valknut.svg"
          //   src="Valknut.png"
          alt="Not found"
          width="150px"
          height="150px"
        />
        <h1 className="logoTitle">Bifröst</h1>
      </div>

      <div className="descriptionCont">
        <div className="descriptionOne">
          <h1 className="titleOne">Found Projects</h1>
          <hr></hr>
          <h2 className="textOne">
            Developers with great ideas, sometimes without money.
            <br /> If you love their ideas, you can help them!
            <br /> Found the projects you like the most!
            <br /> So one day you could play those Games!
          </h2>
          <button className="btnProject" onClick={(e) => handleClickOne(e)}>
            Know more about
            <br />
            Projects!
          </button>
        </div>
        <br></br>
        <div className="descriptionTwo">
          <h1 className="titleTwo">Find Investors</h1>
          <hr></hr>
          <h2 className="textTwo">
            Are you a Dev with a dream project?
            <br /> But maybe your dream is a few pennys away?
            <br /> Dont worry, here you can find investors interested on your
            efforts!
          </h2>
          <a for="investorInfo" href="#investorInfo" className="btnInvestor">
            Know more about
            <br />
            Bifröst investing!
          </a>
        </div>
      </div>
      <div>
        <Link to="/home">
          <button className="btnLanding">Find new projects!</button>
        </Link>
      </div>
      {/* INFO NUMERO 1 */}
      <div className="infoOne" id="infoOne">
        <section>
          <h1 className="infoOneTitle" id="infoOneTitle">
            Found a Project
          </h1>
          <hr className="titleOneBar"></hr>
          <h2 className="infoOneText">
            <strong>What does founding means?</strong>
            <br />
            Basically you have the option of supporting a team or a solo
            developer in their dream of designing and publishing a new Game!
          </h2>
        </section>
        <img
          className="infoOneImage"
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/1940340/capsule_616x353.jpg?t=1674155708"
          alt="Not Found"
        />
      </div>

      {/* INFO NUMERO 2*/}
      <div className="infoTwo">
        <img
          className="infoTwoImage"
          src="https://as01.epimg.net/meristation/imagenes/2021/09/14/noticias/1631618538_126107_1631618688_noticia_normal.jpg"
          alt="Not Found"
        />
        <section>
          <h1 className="infoTwoTitle">Found a Project</h1>
          <hr className="titleTwoBar"></hr>
          <h2 className="infoTwoText">
            Founding a project gives the developers more opportunities,
            <br />
            but you can also obtain <br />
            <strong>Rewards!!</strong>
          </h2>
        </section>
      </div>
      {/* INFO NUMERO 3 */}
      <div className="infoOne">
        <section>
          <h1 className="infoOneTitle">Found a Project</h1>
          <hr className="titleOneBar"></hr>
          <h2 className="infoOneText">
            Keep in mind that the success of the project,
            <br /> its not guaranteed.
            <br />
            After all its an adventure!
          </h2>
        </section>
        <img
          className="infoOneImage"
          src="https://as01.epimg.net/meristation/imagenes/2020/10/22/noticias/1603353834_254698_1603353987_noticia_normal.jpg"
          alt="Not Found"
        />
      </div>
      {/* INFO NUMERO 4 */}
      <div className="infoTwo" id="investorInfo">
        <img
          className="infoTwoImage"
          src="https://www.lavanguardia.com/files/article_main_microformat/uploads/2020/03/11/5fa8ff0a623f2.jpeg"
          alt="Not Found"
        />
        <section>
          <h1 className="infoTwoTitle">Find Investors</h1>
          <hr className="titleTwoBar"></hr>
          <h2 className="infoTwoText">
            You have an awesome idea,
            <br />
            but money gets in the way?
          </h2>
        </section>
      </div>
      {/* INFO NUMERO 5 */}
      <div className="infoOne">
        <section>
          <h1 className="infoOneTitle">Find Investors</h1>
          <hr className="titleOneBar"></hr>
          <h2 className="infoOneText">
            You can upload, <strong>images </strong>, <strong>videos</strong>,
            <strong> music</strong>,<strong> artwork</strong>, anything to show
            what a masterpiece your game <br /> could be!!
          </h2>
        </section>
        <img
          className="infoOneImage"
          src="https://wallpapercave.com/wp/wp3282918.jpg"
          alt="Not Found"
        />
      </div>
      {/* INFO NUMERO 6 */}
      <div className="infoTwo">
        <img
          className="infoTwoImage"
          src="https://cdn.akamai.steamstatic.com/steam/apps/323190/ss_03fc3089daf0785e3bf34b32c385e80defefaeb4.1920x1080.jpg?t=1668007657"
          alt="Not Found"
        />
        <section>
          <h1 className="infoTwoTitle">Find Investors</h1>
          <hr className="titleTwoBar"></hr>
          <h2 className="infoTwoText">
            Reward the people who have trusted in your{" "}
            <strong> Project </strong>. <br /> Show them what cool features you
            could develop and what you need for it to <strong>happen</strong>!
          </h2>
        </section>
      </div>
    </div>
  );
}
