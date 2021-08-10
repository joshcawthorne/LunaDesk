import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";
import styled from "styled-components";
import { motion } from "framer-motion";
import { detect } from "detect-browser";

import InputField from "../shared/inputField";
import InputButton from "../shared/inputButton";
import CompaniesList from "./companiesList";
import CompanyCreation from "./companyCreation";
import JoinCompany from "./joinCompany";

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 0px;
`;

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

const SearchCompaniesContainer = styled(motion.div)`
  padding: 12px 15px;
  border: 2px solid transparent;
  border-radius: 22px;
  background-color: rgba(0, 0, 0, 0.25);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  width: calc(100% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(12px) saturate(100%);
  -webkit-backdrop-filter: blur(12px) saturate(50%);
  outline: none;
  overflow: hidden;
`;

const SearchCompaniesTitle = styled.div`
  font-size: 22px;
  margin-bottom: 20px;
`;

const NoCompanyContainer = styled.div``;

const NoCompanyText = styled.div`
  font-size: 22px;
  text-align: center;
  margin-top: 30px;
`;

const CreateCompanyPrompt = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
`;

const CreateCompanyTitle = styled.div`
  margin-bottom: 10px;
`;

const SearchResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  transition: 400ms;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SearchContainerAnim = {
  inactive: {
    height: "80px",
  },
  acitve: {
    height: "400px",
  },
};

function CompanyInput({ setCompany, setSelectedStage, firstName }) {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [creatingCompany, setCreatingCompany] = useState(false);
  const [attemptedSearch, setAttemptedSearch] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(false);
  const [selectedCompanyData, setSelectedCompanyData] = useState({});
  const [mount, setMount] = useState(true);

  useEffect(() => {
    setAttemptedSearch(false);
    setCompanies([]);
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
      setAttemptedSearch(true);
      const { data, error } = await supabase
        .from("companies")
        .select()
        .textSearch("title", inputValue, {
          config: "english",
          type: "phrase",
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

  function handleCompanySelect(company) {
    setSelectedCompanyData(company);
    setSelectedCompany(company);
  }

  const browser = detect();

  let ContainerAnim;
  if (browser) {
    if (browser.name === "firefox") {
      ContainerAnim = {
        hidden: {
          height: 0,
        },
        show: {
          height: "-moz-max-content",
          transition: {
            duration: 0.4,
            delay: 0.5,
          },
        },
      };
    } else {
      ContainerAnim = {
        hidden: {
          height: 0,
        },
        show: {
          height: "fit-content",
          transition: {
            duration: 0.4,
            delay: 0.5,
          },
        },
      };
    }
  }

  if (selectedCompany) {
    return (
      <JoinCompany
        setSelectedMasterStage={setSelectedStage}
        setSelectedCompany={setSelectedCompany}
        companyData={selectedCompanyData}
        setCompany={setCompany}
      />
    );
  }

  if (creatingCompany) {
    return (
      <CompanyCreation
        setSelectedMasterStage={setSelectedStage}
        setCreatingCompany={setCreatingCompany}
        setCompany={setCompany}
      />
    );
  }

  return (
    <Container
      variants={ContainerAnim}
      initial="hidden"
      animate={mount ? "show" : "hidden"}
    >
      <Title>Complete your Profile</Title>
      <Desc>
        Ok, <b>{firstName}, where do you work?</b>
      </Desc>
      <SearchCompaniesContainer>
        <ControlsContainer>
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
        </ControlsContainer>
        <SearchResultsContainer>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              {companies.length > 0 ? (
                <CompaniesList
                  companies={companies}
                  handleCreateCompany={handleCreateCompany}
                  handleCompanySelect={handleCompanySelect}
                />
              ) : (
                <>
                  {attemptedSearch && (
                    <NoCompanyContainer>
                      <NoCompanyText>
                        Oh no, we couldn't find "{inputValue}" 😔
                      </NoCompanyText>
                      <CreateCompanyPrompt>
                        <InputButton
                          text={"Create your company"}
                          action={handleCreateCompany}
                        />
                      </CreateCompanyPrompt>
                    </NoCompanyContainer>
                  )}
                </>
              )}
            </>
          )}
        </SearchResultsContainer>
      </SearchCompaniesContainer>
    </Container>
  );
}

export default CompanyInput;
