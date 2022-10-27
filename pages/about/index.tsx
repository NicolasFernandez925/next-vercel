import { Fragment } from "react";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function About() {
  return (
    <Fragment>
        <h1>About</h1>
    </Fragment>
  );
}

About.getLayout = function getLayout( page : JSX.Element ){
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
