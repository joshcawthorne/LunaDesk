import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import InputButton from "../shared/inputButton";
import CompanyListItem from "./companyListItem";

const CompaniesListContainer = styled.div`
  padding: 20px 0px;
  overflow-y: auto;
  max-height: 300px;
  width: 100%;
  height: 300px;
`;

const CreateCompanyPrompt = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CreateCompanyTitle = styled.div`
  margin-bottom: 10px;
`;

const CompaniesListContainerInner = styled(motion.div)`
  height: 180px;
`;

const AnimLayer = styled(motion.div)``;

const ContainerAnim = {
  hidden: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      when: "afterChildren",
      delayChildren: 0,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      when: "afterChildren",
      delayChildren: 0,
    },
  },
};

const ItemAnim = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

function CompaniesList({
  companies,
  handleCreateCompany,
  handleCompanySelect,
}) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 350);
  }, [companies]);
  return (
    <CompaniesListContainer>
      <CompaniesListContainerInner
        variants={ContainerAnim}
        initial="hidden"
        animate={animate ? "show" : "hidden"}
      >
        {companies.map((company, i) => (
          <AnimLayer key={i} variants={ItemAnim}>
            <CompanyListItem
              company={company}
              handleCompanySelect={handleCompanySelect}
              key={i}
            />
          </AnimLayer>
        ))}
      </CompaniesListContainerInner>
      <CreateCompanyPrompt>
        <CreateCompanyTitle>Can't find your company?</CreateCompanyTitle>
        <InputButton text={"Add your company"} action={handleCreateCompany} />
      </CreateCompanyPrompt>
    </CompaniesListContainer>
  );
}

export default CompaniesList;
