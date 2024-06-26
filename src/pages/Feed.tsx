import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
import styles from "./Feed.module.css";

const Feed: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTabContainerClick = useCallback(() => {
    navigate("/feed2a");
  }, [navigate]);

  const onTabContainerClick1 = useCallback(() => {
    navigate("/feed3");
  }, [navigate]);

  return (
    <div className={styles.feed2}>
      <img className={styles.unionIcon} alt="" />
      <FrameComponent />
      <main className={styles.feed2Inner}>
        <section className={styles.frameParent}>
          <div className={styles.tabsParent}>
            <nav className={styles.tabs}>
              <div className={styles.tab} onClick={onTabContainerClick}>
                <a className={styles.info}>Info</a>
              </div>
              <div className={styles.tab1}>
                <a className={styles.info1}>Feed</a>
              </div>
              <div className={styles.tab2} onClick={onTabContainerClick1}>
                <a className={styles.info2}>Tagged</a>
              </div>
            </nav>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.tabParent}>
                  <div className={styles.tab3}>
                    <a className={styles.follow}>+ Follow</a>
                  </div>
                  <img
                    className={styles.sendIcon}
                    loading="lazy"
                    alt=""
                    src="/send@2x.png"
                  />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.followerFollowingSeparatorParent}>
                    <a className={styles.followerFollowingSeparator}>787</a>
                    <div className={styles.followers}>Followers</div>
                  </div>
                  <div className={styles.parent}>
                    <a className={styles.a}>787</a>
                    <a className={styles.following}>Following</a>
                  </div>
                </div>
                <img
                  className={styles.moreIcon}
                  loading="lazy"
                  alt=""
                  src="/more.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.imageContainerParent}>
                <div className={styles.imageContainer}>
                  <div className={styles.bgParent}>
                    <img className={styles.bgIcon} alt="" src="/bg.svg" />
                    <img
                      className={styles.imagePlaceholderIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-6@2x.png"
                    />
                    <img
                      className={styles.imageOverlayIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-1@2x.png"
                    />
                    <img
                      className={styles.imageComponentsIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-2@2x.png"
                    />
                    <img
                      className={styles.image3Icon}
                      loading="lazy"
                      alt=""
                      src="/image-3@2x.png"
                    />
                    <img
                      className={styles.image1Icon}
                      loading="lazy"
                      alt=""
                      src="/image-1@2x.png"
                    />
                  </div>
                  <div className={styles.hannahSmithWrapper}>
                    <a className={styles.hannahSmith}>JOHN DOE</a>
                  </div>
                  <div className={styles.secondaryName}>
                    <div className={styles.johnDoe}>@John Doe</div>
                  </div>
                  <div className={styles.snowslippedRoadclosureUrbaParent}>
                    <div className={styles.snowslippedRoadclosureUrbaContainer}>
                      <p className={styles.snowslipped}>#SnowSlipped</p>
                      <p className={styles.roadclosure}>#RoadClosure</p>
                      <p className={styles.urbanfarming}>#UrbanFarming</p>
                      <p className={styles.hangout}>#Hangout</p>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.group}>
                        <div className={styles.div}>
                          <img
                            className={styles.child}
                            loading="lazy"
                            alt=""
                            src="/rectangle-4@2x.png"
                          />
                        </div>
                        <div className={styles.emptyContentWrapper}>
                          <div className={styles.emptyContent}>
                            <img
                              className={styles.image9Icon}
                              alt=""
                              src="/image-9@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.imageGridContainerWrapper}>
                  <div className={styles.imageGridContainer}>
                    <div className={styles.imageGrid}>
                      <div className={styles.imageRow}>
                        <img
                          className={styles.imagePlaceholdersIcon}
                          alt=""
                          src="/rectangle-2-1@2x.png"
                        />
                        <img
                          className={styles.imagePlaceholdersIcon1}
                          alt=""
                          src="/rectangle-4-1@2x.png"
                        />
                        <img
                          className={styles.imagePlaceholdersIcon2}
                          alt=""
                          src="/rectangle-6-1@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.doubleImageRow}>
                      <img
                        className={styles.doubleImagePlaceholders}
                        alt=""
                        src="/double-image-placeholders@2x.png"
                      />
                      <img
                        className={styles.doubleImagePlaceholders1}
                        alt=""
                        src="/double-image-placeholders@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.data} />
              </div>
              <div className={styles.cardsContainerWrapper}>
                <div className={styles.cardsContainer}>
                  <div className={styles.listCard}>
                    <div className={styles.topActivityPerformers}>
                      Top Activity performers
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
                      avatar="/avatar-51@2x.png"
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Feed;
