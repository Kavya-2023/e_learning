import React from "react";
import styled, { keyframes, css } from "styled-components";


const Wrapper = styled.div`
  width: 80%;
  height: fit-content;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;



const Marquee = styled.div`
  display: flex;
  width: 1500px;
  overflow: hidden;
  user-select: none; 


  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

function App1() {
  const row1 = [
    "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1705823792/tiny-students-with-huge-sign-pi-flat-vector-illustration-boy-girl-studying-math-algebra-school-college-holding-ruler-using-laptop-geometric-figures-background-education-concept_74855-23227_v16zbn.jpg",
    "https://img.freepik.com/premium-photo/colorful-abc-language-learning-sign-white-background-3d-rendering_476612-11648.jpg",
    "https://img.freepik.com/free-vector/science-word-concept_52683-37921.jpg",
    "https://img.freepik.com/free-vector/isometric-neural-network-programmer-composition-with-isolated-icons-gear-brain-human-characters-computers-vector-illustration_1284-81062.jpg",
    "https://img.freepik.com/free-vector/globe-earth-planet-books-isolated-white-background-back-school-day-knowledge-school-supplies-teachers-day-symbol-school-university-education-concept_575670-163.jpg",
    "https://img.freepik.com/free-vector/online-doctor-technology-concept_23-2148509773.jpg",
  ];

  const row2 = [
    "https://img.freepik.com/free-vector/cruising-plane_1308-31325.jpg",
    "https://img.freepik.com/premium-vector/mba-master-business-administration-mba-school-concept-vector-stock-illustration_100456-10751.jpg",
    "https://img.freepik.com/free-vector/businesswomen-presenting-graph-colleague_74855-2353.jpg",
    "https://img.freepik.com/free-vector/cartoon-math-elements-background_23-2148157868.jpg",
    "https://img.freepik.com/free-vector/process-optimization-concept-idea-business-improvement-development-company-data-analysis-effective-entrepreneurship-organization-isolated-flat-vector-illustration_613284-3337.jpg",
    "https://img.freepik.com/free-vector/professions-avatars-line-composition_1284-34919.jpg",
  ];

  return (
    <>
      <Wrapper>
       
       
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />  
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </>
  );
}

export default App1;
