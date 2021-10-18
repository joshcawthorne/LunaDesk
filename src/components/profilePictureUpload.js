import { useState, useEffect } from "react";
import styled from "styled-components";
import { TailSpin } from "react-loading-icons";
import { supabase } from "services/supabaseClient";

import UploadIcon from "assets/svg/icons/upload.svg";
import RemoveUploadIcon from "assets/svg/icons/removeUpload.svg";

const CameraIconContainer = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  height: 35px;
  width: 35px;
  background-color: #dfe1e4;
  border-radius: 50%;
  border-color: #0d1afc;
  border-width: 3px;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 5;
`;

const IconContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProfilePictureUpload({
  userHasProfilePicture,
  setUserHasProfilePicture,
  url,
  size,
  onUpload,
  targetBucket,
}) {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

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
        .from(targetBucket)
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      setUploading(false);
    }
  }

  return (
    <form>
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
      <label
        className="button primary block"
        htmlFor="single"
        onClick={() => setLoading(true)}
      >
        <CameraIconContainer>
          {loading ? (
            <TailSpin
              stroke="#0d1afc"
              width={"18px"}
              strokeWidth={4}
              style={{ overflow: "visible" }}
            />
          ) : (
            <IconContainer>
              {userHasProfilePicture ? (
                <RemoveUploadIcon
                  width={"24px"}
                  stroke={"#E02F3C"}
                  strokeWidth={"1.5px"}
                />
              ) : (
                <UploadIcon
                  width={"28px"}
                  stroke={"#0d1afc"}
                  strokeWidth={"1.5px"}
                />
              )}
            </IconContainer>
          )}
        </CameraIconContainer>
      </label>
    </form>
  );
}

export default ProfilePictureUpload;
