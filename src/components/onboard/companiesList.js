import React from "react";
import styled from "styled-components";
import InputButton from "../shared/inputButton";

const CompaniesListContainer = styled.div`
  padding: 20px 15px;
`;

const CompanyItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const CompanyIconContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
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

function CompaniesList({ companies, handleCreateCompany }) {
  return (
    <CompaniesListContainer>
      {companies.map((company, i) => (
        <CompanyItem key={i}>
          <CompanyIconContainer>
            {company.company_logo !== null ? (
              <img src={company.company_image} alt={company.title} />
            ) : (
              <CompanyIconLetter>
                {company.title.split("")[0]}
              </CompanyIconLetter>
            )}
          </CompanyIconContainer>
          <CompanyTitle>{company.title}</CompanyTitle>
        </CompanyItem>
      ))}
      <CreateCompanyPrompt>
        <CreateCompanyTitle>Can't find your company?</CreateCompanyTitle>
        <InputButton text={"Add your company"} action={handleCreateCompany} />
      </CreateCompanyPrompt>
    </CompaniesListContainer>
  );
}

export default CompaniesList;
