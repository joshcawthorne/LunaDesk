import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import OnboardingCard from "layouts/onboardingCard";
import TextField from "components/shared/textField";
import { InnerTitle, InnerDesc } from "components/shared";
import ThemeToggle from "components/settings/themeToggle";

function UserPreferences() {
    return (
        <OnboardingCard
            description={""}
            buttonText={"Continue"}
            buttonActive
            style={{ width: '670px', display: 'flex', flexDirection: 'column' }}
        >
            <InnerTitle>Pick your theme</InnerTitle>
            <InnerDesc>
                Are you more of a light-mode kinda person, or do you prefer to live in the shadows? Either is fine here!
            </InnerDesc>
            <ThemeToggle />
        </OnboardingCard>
    )
}

export default UserPreferences
