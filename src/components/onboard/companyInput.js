import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";
import styled from "styled-components";

import InputField from "../shared/inputField";
import InputButton from "../shared/inputButton";
import CompaniesList from "./companiesList";
import CompanyCreation from "./companyCreation";

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  color: #d9c9d8;

  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  b {
    color: #fff;
    font-weight: 500;
    margin-left: 5px;
  }
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  margin-bottom: 5px;
`;

const SearchCompaniesContainer = styled.div`
  padding: 12px 24px;
  border: 2px solid transparent;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.25);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  backdrop-filter: blur(12px) saturate(100%);
  -webkit-backdrop-filter: blur(12px) saturate(50%);
  outline: none;
`;

const SearchCompaniesTitle = styled.div`
  font-size: 22px;
  margin-bottom: 20px;
`;

function CompanyInput({ setCompany, setSelectedStage, firstName }) {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [creatingCompany, setCreatingCompany] = useState(false);
  const [attemptedSearch, setAttemptedSearch] = useState(false);

  useEffect(() => {
    if (inputValue.length > 2) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputValue]);

  function progress() {
    setCompany(inputValue);
    setSelectedStage(1);
  }

  async function handleSearch() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("companies")
        .select("title, company_logo")
        .textSearch("title", inputValue, {
          config: "english",
          type: "websearch",
        });
      if (error && status !== 406) {
        throw error;
      }
      setCompanies(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleCreateCompany() {
    setCreatingCompany(true);
  }

  if (creatingCompany) {
    return <CompanyCreation />;
  }

  return (
    <div>
      <Title>Complete your Profile</Title>
      <Desc>
        Ok, <b>{firstName}, where do you work?</b>
      </Desc>
      <SearchCompaniesContainer>
        <InputField
          placeholder={"Search for Companies"}
          type={"text"}
          value={inputValue}
          setValue={setInputValue}
        />
        <InputButton
          disabled={disabled}
          action={handleSearch}
          text={"Search"}
        />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {companies.length > 0 ? (
              <CompaniesList
                companies={companies}
                handleCreateCompany={handleCreateCompany}
              />
            ) : (
              <>{attemptedSearch && <div>No company could be found</div>}</>
            )}
          </>
        )}
      </SearchCompaniesContainer>
    </div>
  );
}

export default CompanyInput;
