import { useEffect, useState, useCallback } from "react";
import { supabase } from "../../../utils/supabaseClient";
import styled from "styled-components";
import InputButton from "../../shared/inputButton";
import { useDropzone } from "react-dropzone";

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
  width: 100px;
  height: auto;
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

const UploadButton = styled.label`
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
  cursor: pointer;
  margin-bottom: 10px;
`;

const UploadZone = styled.div`
  width: 400px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: #fff;
  border-style: dashed;
`;

const UploadDisclaimer = styled.div`
  width: 400px;
  margin-bottom: 40px;
  margin-top: 10px;
  text-align: center;
`;

function CompanyLogo({ companyName, setSelectedStage, setFinalValue }) {
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState(null);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [acceptedFile, setAcceptedFile] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const onDropAccepted = useCallback((acceptedFiles) => {
    setUploading(true);
    setAcceptedFile(true);
    uploadAvatar(acceptedFiles);
  }, []);

  const onDropRejected = useCallback((acceptedFiles) => {
    if (fileRejections && fileRejections.length > 0) {
      if (fileRejections[0].errors[0].code === "file-too-large") {
        alert("Sorry, images must be less than 1mb in size.");
      } else {
        alert(fileRejections[0].errors[0].message);
      }
      acceptedFiles = [];
      setAcceptedFile(false);
      setUploading(false);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDropAccepted,
    onDropRejected,
    accept: "image/jpeg, image/png, image/jpg",
    maxFiles: 1,
    maxSize: 1000000,
    multiple: false,
  });

  async function uploadAvatar(upload) {
    const file = upload[0];
    try {
      setUploading(true);
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
    setFinalValue(url);
    setSelectedStage(5);
  }

  function skip() {
    setSelectedStage(5);
  }

  const onUpload = (filepath) => {
    downloadImage(filepath);
    setUrl(filepath);
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
      setDownloadUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  }

  return (
    <Container>
      <Title>
        Want to add a logo for <b>{companyName}</b>?
      </Title>
      <Desc>
        This step is optional, and just intended to help other employees find
        your company easier!
      </Desc>
      {url !== null && (
        <LogoImageContainer>
          <LogoImage src={downloadUrl} alt={companyName} />
        </LogoImageContainer>
      )}

      <UploadZone {...getRootProps()}>
        <input {...getInputProps()} />
        <>
          {uploading ? (
            <div>Uploading</div>
          ) : (
            <>
              {isDragActive ? (
                <p>Drop the file here...</p>
              ) : (
                <p>Drag a photo here, or click to select one.</p>
              )}
            </>
          )}
        </>
      </UploadZone>

      <UploadDisclaimer>
        Please note: Your image must be in either PNG, JPG or JPEG format, and
        no larger than 1mb in size.
      </UploadDisclaimer>

      <ButtonsContainer>
        <InputButton margin={"0 20px 0 0"} action={skip} text={"Skip"} />
        <InputButton
          action={progress}
          text={"Continue"}
          disabled={!acceptedFile}
        />
      </ButtonsContainer>
    </Container>
  );
}

export default CompanyLogo;
