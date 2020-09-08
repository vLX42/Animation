import { SiteLayout, GlobalStyles } from "@dfds-ui/react-components";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <SiteLayout.Grid>
        <SiteLayout.Header>Hello</SiteLayout.Header>
        <SiteLayout.Main>Main content</SiteLayout.Main>
        <SiteLayout.Footer>Footer content</SiteLayout.Footer>
      </SiteLayout.Grid>
    </>
  );
}
