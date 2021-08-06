import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import FastAverageColor from "fast-average-color";

import Arrow from "../../../assets/svg/arrow.svg";
import { getFile } from "../../services/bucket";

const CompanyItem = styled.div`
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-bottom: 10px;
  padding: 10px 10px;
  transition: 200ms;
  border-radius: 10px;
  position: relative;
  :hover {
    background-color: #0000003b;

    transition: 400ms;
  }
`;

const CompanyIconContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  -webkit-backdrop-filter: blur(12px) saturate(100%);
  backdrop-filter: blur(12px) saturate(100%);
  -webkit-backdrop-filter: blur(12px) saturate(50%);
`;

const CompanyIconLetter = styled.div`
  color: #000;
  font-size: 24px;
  text-transform: uppercase;
  user-select: none;
`;

const CompanyTitle = styled.div`
  color: #fff;
  font-size: 20px;
`;

const CompanyImage = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;

const CompanyMetadata = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const CompanyLocation = styled.div`
  opacity: 0.8;
  font-size: 14px;
  line-height: 16px;
`;

const ArrowContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;

function CompanyListItem({ company, handleCompanySelect }) {
  const [image, setImage] = useState(null);
  const [avgColor, setAvgColor] = useState("#fff");

  const imageObj = useRef();

  async function getAvatar(url) {
    const data = await getFile("avatars", url);
    setImage(data.publicURL);
  }

  useEffect(() => {
    if (company.company_logo !== null) {
      getAvatar(company.company_logo);
    }
  }, [company]);

  useEffect(() => {
    if (image !== null) {
      const fac = new FastAverageColor();
      imageObj.current.crossOrigin = "anonymous";
      const color = fac.getColor(imageObj.current);

      setAvgColor(color.hex);
    }
  }, [image]);

  return (
    <CompanyItem onClick={() => handleCompanySelect(company)}>
      <CompanyIconContainer>
        {image !== null ? (
          <CompanyImage src={image} alt={company.title} ref={imageObj} />
        ) : (
          <CompanyIconLetter>{company.title.split("")[0]}</CompanyIconLetter>
        )}
      </CompanyIconContainer>
      <CompanyMetadata>
        <CompanyTitle>{company.title}</CompanyTitle>
        <CompanyLocation>{company.based_in}</CompanyLocation>
      </CompanyMetadata>
      <ArrowContainer>
        <Arrow color={"#fff"} />
      </ArrowContainer>
    </CompanyItem>
  );
}

export default CompanyListItem;
