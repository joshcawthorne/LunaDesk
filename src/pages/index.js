import React from "react";
import { styled } from "styled-components";
import AppLayout from "../layouts/appLayout";
import { Button } from "src/components/shared";

function index() {
  return (
    <AppLayout>
      Index page. <Button>Cool</Button>
    </AppLayout>
  );
}

export default index;
