import React from "react";
// import { render } from "react-dom";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderContainer,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Search,
  Grid,
  Row,
  Column,
} from "carbon-components-react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import { Logout20 } from "@carbon/icons-react";
import { SearchResult } from "./search-result";
import styles from "./page.css";

const bottomSheetProps = {
  overflowHeight: 64,
  shadowTip: false,
  topShadow: false,
  overlay: false,
  scrollTopAtClose: true,
};

class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="page">
        <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
              <Header aria-label="Nitrous">
                <HeaderName
                  // href="https://github.com/felixjchen/spotify-together"
                  prefix=""
                >
                  Nitrous
                </HeaderName>
                <HeaderNavigation aria-label="Nitrous">
                  <img src={this.props.profileUrl}></img>
                </HeaderNavigation>
                <HeaderGlobalBar>
                  <HeaderGlobalAction
                    id="logoutIcon"
                    aria-label="Logout"
                    onClick={() => {
                      console.log("logout button clicked");
                    }}
                  >
                    <Logout20 />
                  </HeaderGlobalAction>
                </HeaderGlobalBar>
              </Header>
              <Grid>
                <Row>
                  <Column id="queue" sm={{ span: 0 }} md={2} lg={3}>
                    Queue
                  </Column>
                  <Column sm={4} md={6} lg={9}>
                    {/* How do we pass input to sibling element in React??? */}
                    <Search
                      id="search"
                      placeHolderText={"Find a song"}
                      size={"lg"}
                      labelText="search"
                      onChange={() => {
                        console.log(document.getElementById("search").value);
                      }}
                    />
                    <SearchResult search={"d"}></SearchResult>
                  </Column>

                  <Column sm={1} md={{ span: 0 }} lg={{ span: 0 }}>
                    <SwipeableBottomSheet {...bottomSheetProps}>
                      <div
                        id="queue"
                        style={{
                          backgroundColor: "#f4f4f4",
                          height: "calc(100vh - 3rem)",
                        }}
                      >
                        Queue
                      </div>
                    </SwipeableBottomSheet>
                  </Column>
                </Row>
              </Grid>
            </>
          )}
        />
      </div>
    );
  }
}
export default Page;
