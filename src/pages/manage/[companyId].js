import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  getCompanyData,
  getCompanyEmployees,
  getUserOwnedCompanies,
  makeUserAdmin,
} from "../../services/company";

import { removeEmployee } from "../../services/auth";

function ManageCompany() {
  const [companyData, setCompanyData] = useState({});
  const [companyNameInput, setCompanyNameInput] = useState("");
  const [companyEmployees, setCompanyEmployees] = useState([]);
  const [ownedCompanies, setOwnedCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { companyId } = router.query;

  useEffect(() => {
    if (companyId !== undefined) {
      fetchCompanyData();
    }
  }, [companyId]);

  async function fetchCompanyData() {
    console.log(companyId);
    const companyDataObj = await getCompanyData(companyId);
    const employees = await getCompanyEmployees(companyId);
    const owned = await getUserOwnedCompanies();

    setOwnedCompanies(owned.data);
    setCompanyData(companyDataObj.data);
    setCompanyEmployees(employees.data);
    setCompanyNameInput(companyDataObj.data.name);
    setLoading(false);
  }

  async function handleRemoveEmployee(id) {
    await removeEmployee(id);
    fetchCompanyData();
  }

  async function handleMakeAdmin(userId) {
    await makeUserAdmin(userId, companyId);
    fetchCompanyData();
  }

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link href={"/company-directory"}>Back to company directory</Link>

      <h1 style={{ fontWeight: 400 }}>
        Manage <b>{companyData.name}</b>
      </h1>
      {ownedCompanies.some((owned) => owned.id === companyData.id) && (
        <h2 style={{ fontWeight: 400 }}>
          You Own <b>{companyData.name}</b>
        </h2>
      )}
      <div>
        <label>Update Name</label>
        <input
          value={companyNameInput}
          onChange={(e) => setCompanyNameInput(e.target.value)}
        />
      </div>
      <div>
        <p>Employees of {companyData.name}</p>
        {companyEmployees.length === 0 && (
          <div>{companyData.name} has no Employees</div>
        )}
        {companyEmployees.map((employee, i) => (
          <div key={i} style={{ display: "flex" }}>
            {console.log(employee)}
            {employee.first_name + " " + employee.last_name} |---|
            {employee.user_uuid === companyData.created_by ? (
              <div style={{ marginLeft: "5px", opacity: 0.5 }}>
                {" "}
                Creator of {companyData.name} (cannot be removed)
              </div>
            ) : (
              <div>
                {employee.company_admin ? (
                  <a
                    style={{
                      color: "red",
                      textDecoration: "underline",
                      marginLeft: "5px",
                    }}
                    onClick={() => handleMakeAdmin(employee.user_uuid)}
                  >
                    Remove {employee.first_name} as an administrator of{" "}
                    {companyData.name}
                  </a>
                ) : (
                  <a
                    style={{
                      color: "blue",
                      textDecoration: "underline",
                      marginLeft: "5px",
                    }}
                    onClick={() => handleMakeAdmin(employee.user_uuid)}
                  >
                    Make {employee.first_name} an administrator of{" "}
                    {companyData.name}
                  </a>
                )}{" "}
                |---|
                <a
                  style={{
                    color: "red",
                    textDecoration: "underline",
                    marginLeft: "5px",
                  }}
                  onClick={() => handleRemoveEmployee(employee.user_uuid)}
                >
                  Remove {employee.first_name} from {companyData.name}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageCompany;
