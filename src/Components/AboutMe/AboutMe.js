import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkedin from "../../svg/linkedin.svg";

const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/jarriagada",
      logo: logoGithub,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jose-luis-arriagada-s-900829139/",
      logo: logoLinkedin,
    },
   
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>🤟 Hello </p>
            <p>🤟 Hello </p>
            <p>🤟 Hello </p>
          </S.Title>
          <S.DescriptionText>
            lorem ipsum lorem ipsum lorem ipsum lorem upsum lorem lorem ipsum
            lorem upsum lorem lorem ipsum .lorem upsum lorem lorem ipsum lorem
            upsum lorem
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="__blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt="Imagen de Patrickss en Freepik" />
              
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src="/img/me3.png" alt="Jose Arriagada - Developer"/>
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};

export default AboutMe;