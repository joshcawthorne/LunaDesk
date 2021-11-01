import { ChangeEvent } from "react";
import styled from "styled-components"

import usePlacesAutocomplete from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";

interface Props {
  hasError?: number;
}

const StyledComboboxInput = styled(ComboboxInput) <Props>`
margin: 0 8px 0 0;
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 24px;
  font-size: 13px;
  color: #282a30;
  appearance: none;
  height: 48px;
  padding: 12px;
  width: 100%;
  background: ${props => props.theme.textFieldBackground};
  z-index: 1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 2px solid ${props => props.theme.modalBorder};
  box-sizing: border-box;
  transition: 400ms;
  z-index: 30;
  ::placeholder {
    opacity: 1;
  }
  :focus {
    border-width: 2px;
    border-color: #2362dc;
    outline: none;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    transition: 400ms;
  }
  
`;

const StyledComboboxPopover = styled(ComboboxPopover)`
 margin: 0 8px 0 0;
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 24px;
  font-size: 13px;
  color: #282a30;
  appearance: none;
  z-index: 30;
  padding: 12px;
  width: 100%;
  background:${props => props.theme.textFieldBackground};
  z-index: 1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-sizing: border-box;
  transition: 400ms;
  margin-top: 5px;
  ::placeholder {
    opacity: 1;
  }
  :focus {
    border-width: 2px;
    border-color: #2362dc;
    outline: none;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    transition: 400ms;
  }
`;

const StyledComboboxOption = styled(ComboboxOption) <Props>`
     margin: 0 8px 0 0;
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    padding: 10px;
  color:${props => props.theme.textPrimary};
  appearance: none;
  z-index: 30;
  background: ${props => props.theme.textFieldBackground};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  transition: 400ms;
`;

interface GooglePlacesSearch {
  setAddressValue: (value) => void,
  error: boolean,
}

function GooglePlacesSearch({ setAddressValue, error }: GooglePlacesSearch) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue
  } = usePlacesAutocomplete();

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSelect = (val: string): void => {
    setValue(val, false);
    setAddressValue(value);
  };

  const renderSuggestions = (): JSX.Element => {
    const suggestions = data.map(({ place_id, description }: any) => (
      <StyledComboboxOption key={place_id} value={description} style={{ zIndex: 30 }} />
    ));
    return (
      <>
        {suggestions}
      </>
    );
  };

  return (
    <Combobox onSelect={handleSelect} style={{ zIndex: 30 }}>
      <StyledComboboxInput
        value={value}
        onChange={handleInput}
        placeholder={"Search for Address..."}
        style={{ zIndex: 30, borderColor: error ? "#e02f3c" : "transparent" }}
      ></StyledComboboxInput>
      <StyledComboboxPopover style={{ zIndex: 30 }}>
        <ComboboxList>{status === "OK" && renderSuggestions()}</ComboboxList>
      </StyledComboboxPopover>
    </Combobox>
  )
}

export default GooglePlacesSearch
