import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
import styles from "./Feeda.module.css";

const Feeda: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuItemContainerClick = useCallback(() => {
    navigate("/21-public-post");
  }, [navigate]);

  const onMenuItemContainerClick1 = useCallback(() => {
    navigate("/22-private-post");
  }, [navigate]);

  const onMenuItemContainerClick2 = useCallback(() => {
    navigate("/feed2");
  }, [navigate]);

  const onMenuItemContainerClick3 = useCallback(() => {
    navigate("/auth");
  }, [navigate]);

  return (
    <div className={styles.feeda}>
      <section className={styles.leftSidebarParent}>
        <div className={styles.leftSidebar}>
          <div className={styles.safeSnapWrapper}>
            <div className={styles.safeSnap}>Safe Snap</div>
          </div>
          <div className={styles.list}>
            <div className={styles.menuItem}>
              <img
                className={styles.homeIcon}
                loading="lazy"
                alt=""
                src="/home.svg"
              />
              <div className={styles.upload}>Upload</div>
            </div>
            <div
              className={styles.menuItem1}
              onClick={onMenuItemContainerClick}
            >
              <img
                className={styles.bookmarkIcon}
                loading="lazy"
                alt=""
                src="/bookmark.svg"
              />
              <div
                className={styles.savedPublicPosts}
              >{`Saved public posts `}</div>
            </div>
            <div
              className={styles.menuItem2}
              onClick={onMenuItemContainerClick1}
            >
              <img
                className={styles.bookmarkIcon1}
                loading="lazy"
                alt=""
                src="/bookmark.svg"
              />
              <div
                className={styles.savedPrivatePosts}
              >{`Saved private posts `}</div>
            </div>
            <div
              className={styles.menuItem3}
              onClick={onMenuItemContainerClick2}
            >
              <img className={styles.searchIcon} alt="" src="/search.svg" />
              <div className={styles.search}>Search</div>
            </div>
            <div
              className={styles.menuItem4}
              onClick={onMenuItemContainerClick3}
            >
              <img
                className={styles.messageCircleIcon}
                loading="lazy"
                alt=""
                src="/messagecircle.svg"
              />
              <div className={styles.authorisationPage}>Authorisation page</div>
            </div>
          </div>
        </div>
        <img
          className={styles.image6Icon}
          loading="lazy"
          alt=""
          src="/image-6@2x.png"
          onClick={onMenuItemContainerClick3}
        />
        <div className={styles.content}>
          <div className={styles.tabsParent}>
            <nav className={styles.tabs}>
              <h2 className={styles.home}>Home</h2>
              <h2 className={styles.following}>Following</h2>
              <h2 className={styles.explore}>Explore</h2>
            </nav>
            <div className={styles.frameWrapper}>
              <div className={styles.uploadContainerParent}>
                <div className={styles.uploadContainer}>
                  <div className={styles.uploadInner}>
                    <div className={styles.uploadInnerChild} />
                    <div className={styles.uploadContent}>
                      <div className={styles.uploadInstructions}>
                        <div className={styles.uploadFromCameraContainer}>
                          <p className={styles.uploadFromCamera}>
                            Upload from camera
                          </p>
                          <p className={styles.dropFile}>Drop File</p>
                        </div>
                        <div className={styles.divider} />
                        <div className={styles.imagePreview}>
                          <div className={styles.imagePlaceholder} />
                          <img
                            className={styles.image4Icon}
                            alt=""
                            src="/image-4@2x.png"
                          />
                          <img
                            className={styles.image5Icon}
                            alt=""
                            src="/image-5@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.commentInputParent}>
                  <div className={styles.commentInput}>
                    <div className={styles.uploadPicture}>
                      <p className={styles.uploadPicture1}>Upload Picture</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine1}>&nbsp;</p>
                      <p className={styles.blankLine2}>&nbsp;</p>
                      <p className={styles.blankLine3}>&nbsp;</p>
                      <p className={styles.blankLine4}>&nbsp;</p>
                      <p className={styles.blankLine5}>&nbsp;</p>
                      <p className={styles.blankLine6}>&nbsp;</p>
                      <p className={styles.blankLine7}>&nbsp;</p>
                    </div>
                  </div>
                  <div className={styles.commentIconParent}>
                    <div className={styles.commentIcon}>
                      <img
                        className={styles.icnIcon}
                        loading="lazy"
                        alt=""
                        src="/icn.svg"
                      />
                    </div>
                    <div className={styles.commentBox}>
                      <div className={styles.commentHereWithContainer}>
                        <p className={styles.commentHereWith}>
                          Comment here with # tags. Enabling Location is
                          mandatory
                        </p>
                        <p className={styles.blankLine8}>&nbsp;</p>
                        <p
                          className={styles.publicFor}
                        >{` #public -> for publishing`}</p>
                        <p
                          className={styles.privateFor}
                        >{`#private -> for saving in your phone memory`}</p>
                      </div>
                      <img
                        className={styles.commentBoxChild}
                        loading="lazy"
                        alt=""
                        src="/rectangle-13.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.activity}>
        <div className={styles.listCard}>
          <div className={styles.topActivityPerformers}>
            Top Activity Performers
          </div>
          <Item
            avatar="/avatar@2x.png"
            helenaHills="Helena Hills"
            helenahills="@helenahills"
          />
          <Item
            avatar="/avatar-1@2x.png"
            helenaHills="Charles Tran"
            helenahills="@charlestran"
          />
          <Item
            avatar="/avatar-2@2x.png"
            helenaHills="Oscar Davis"
            helenahills="@oscardavis"
          />
          <Item
            avatar="/avatar-3@2x.png"
            helenaHills="Daniel Jay Park"
            helenahills="@danielj"
          />
          <Item
            avatar="/avatar-4@2x.png"
            helenaHills="Carlo Rojas"
            helenahills="@carlorojas"
          />
        </div>
        <div className={styles.listCard1}>
          <div className={styles.communitiesYouMight}>
            Communities you might like
          </div>
          <Item
            avatar="/avatar-5@2x.png"
            helenaHills="Libraries near me"
            helenahills="13.2k members"
          />
          <Item
            avatar="/avatar-6@2x.png"
            helenaHills="Sceneries near me"
            helenahills="2k members"
          />
          <Item
            avatar="/avatar-7@2x.png"
            helenaHills="Sailing near me"
            helenahills="125 members"
          />
        </div>
      </div>
    </div>
  );
};

export default Feeda;
