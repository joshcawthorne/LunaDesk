import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import styled from "styled-components";
import InputButton from "../../shared/inputButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  color: #d9c9d8;
  max-width: 450px;
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
  color: #ebe2ea;
  b {
    font-weight: 500;
    color: #fff;
    margin-left: 5px;
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const LogoImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const StyledInputButton = styled(InputButton)`
  margin-right: 10px;
`;
const ButtonsContainer = styled.div``;

function CompanyLogo({ companyName, setSelectedStage, setFinalValue }) {
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState(null);

  async function uploadAvatar(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  function progress() {
    setFinalValue = { url };
    setSelectedStage(5);
  }

  function skip() {
    setSelectedStage(5);
  }

  const onUpload = (filepath) => {
    console.log(filepath);
    downloadImage(filepath);
  };

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  }

  return (
    <Container>
      <Title>
        Want to add a logo for <b>Lucky Duck</b>?
      </Title>
      <Desc>
        This step is optional, and just intended to help other employees find
        your company easier!
      </Desc>
      {url !== null && (
        <LogoImageContainer>
          <LogoImage src={url} alt={companyName} />
        </LogoImageContainer>
      )}
      <label className="button primary block" htmlFor="single">
        {uploading ? "Uploading ..." : "Upload"}
      </label>
      <input
        style={{
          visibility: "hidden",
          position: "absolute",
        }}
        type="file"
        id="single"
        accept="image/*"
        onChange={uploadAvatar}
        disabled={uploading}
      />
      <ButtonsContainer>
        <StyledInputButton action={skip} text={"Skip"} />
        <InputButton action={progress} text={"Continue"} />
      </ButtonsContainer>
    </Container>
  );
}

export default CompanyLogo;
