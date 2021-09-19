import { useState } from "react";
import { createCompany } from "../services/company";
import Link from "next/link";

function CreateCompany() {
  const [companyNameInput, setcompanyNameInput] = useState("");

  async function handleCreateCompany() {
    await createCompany({ companyName: companyNameInput });
  }

  return (
    <div style={{ padding: "10px" }}>
      <h1>Create a company</h1>
      <label>Company Name</label>
      <input
        value={companyNameInput}
        type="text"
        autoComplete={"no"}
        onChange={(e) => setcompanyNameInput(e.target.value)}
      />
      <button onClick={() => handleCreateCompany()}>Create company</button>
      <div style={{ marginTop: "30px" }}>
        <Link href={"company-directory"}>See company directory</Link>
      </div>
    </div>
  );
}

export default CreateCompany;
