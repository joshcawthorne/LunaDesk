import { useState, useEffect } from "react";
import {
  getAllCompanies,
  getUserCompanyData,
  getUserOwnedCompanies,
} from "../services/company";
import { setUserCompany } from "../services/auth";
import Link from "next/link";

function CompanyDirector() {
  const [companiesList, setCompaniesList] = useState([]);
  const [userCompanyData, setuserCompanyData] = useState({});
  const [ownedCompanies, setOwnedCompanies] = useState([]);
  const [noCompany, setNoCompany] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCompanies();
  }, []);

  async function fetchCompanies() {
    const companies = await getAllCompanies();
    setCompaniesList(companies.data);
    fetchUserCompany();
  }

  async function fetchUserCompany() {
    setLoading(true);
    const userCompany = await getUserCompanyData();
    let owned = await getUserOwnedCompanies();
    setOwnedCompanies(owned.data);
    if (userCompany.noCompany) {
      setNoCompany(true);
    } else {
      setNoCompany(false);
      setuserCompanyData(userCompany.data);
    }

    setLoading(false);
  }

  async function handleJoinCompany(id) {
    await setUserCompany(id);
    fetchUserCompany();
  }

  return (
    <div style={{ padding: "20px" }}>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {!noCompany ? (
            <h2 style={{ fontWeight: 400 }}>
              You're a member of <b>{userCompanyData.name}</b>
            </h2>
          ) : (
            <div>You're not currently an employee of any company</div>
          )}
          {companiesList.map((company, i) => (
            <div key={i} style={{ display: "flex", margin: "10px 0" }}>
              <div style={{ marginRight: "10px" }}>{company.name}</div>
              {userCompanyData.id !== company.id ? (
                <button onClick={() => handleJoinCompany(company.id)}>
                  [DEBUG] Join {company.name}
                </button>
              ) : (
                <div>
                  {console.log(ownedCompanies)}
                  {ownedCompanies.some((owned) => owned.id === company.id) && (
                    <Link href={"/manage/" + company.id} passHref>
                      <a>Manage {company.name}</a>
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
          <Link href={"create-company"}>Create a new company</Link>
        </div>
      )}
    </div>
  );
}

export default CompanyDirector;
