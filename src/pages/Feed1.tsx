import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
import styles from "./Feed1.module.css";

const Feed1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTabContainerClick = useCallback(() => {
    navigate("/feed2");
  }, [navigate]);

  return (
    <div className={styles.feed3}>
      <FrameComponent />
      <main className={styles.feed3Inner}>
        <section className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.tabsParent}>
              <nav className={styles.tabs}>
                <div className={styles.tab}>
                  <a className={styles.info}>Info</a>
                </div>
                <div className={styles.tab1} onClick={onTabContainerClick}>
                  <a className={styles.info1}>Feed</a>
                </div>
                <div className={styles.tab2}>
                  <a className={styles.info2}>Tagged</a>
                </div>
              </nav>
              <div className={styles.frameWrapper}>
                <div className={styles.bgParent}>
                  <img
                    className={styles.bgIcon}
                    loading="lazy"
                    alt=""
                    src="/bg.svg"
                  />
                  <div className={styles.frameContainer}>
                    <div className={styles.hannahSmithParent}>
                      <a className={styles.hannahSmith}>JOHN DOE</a>
                      <div className={styles.johnDoe}>@John Doe</div>
                    </div>
                    <div className={styles.feedWrapper}>
                      <div className={styles.feed}>
                        <div className={styles.text}>
                          <div className={styles.snowslippedHarshSnow}>
                            #SnowSlipped, #Harsh_snow
                          </div>
                          <div className={styles.kMembers}>13.2k members</div>
                        </div>
                        <div className={styles.text1}>
                          <div className={styles.roadclosure}>#RoadClosure</div>
                          <div className={styles.kMembers1}>13.2k members</div>
                        </div>
                        <div className={styles.text2}>
                          <div className={styles.hangout}>#Hangout</div>
                          <div className={styles.kMembers2}>13.2k members</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.text3}>
                    <div className={styles.urbanfarming}>#UrbanFarming</div>
                    <div className={styles.kMembers3}>13.2k members</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
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
                  <div className={styles.frameParent3}>
                    <div className={styles.parent}>
                      <a className={styles.a}>787</a>
                      <a className={styles.followers}>Followers</a>
                    </div>
                    <div className={styles.group}>
                      <a className={styles.a1}>787</a>
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
                <div className={styles.listCardWrapper}>
                  <div className={styles.listCard}>
                    <div className={styles.topActivitiesPerformers}>
                      Top Activities performers
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
                </div>
              </div>
            </div>
          </div>
          <div className={styles.listCardContainer}>
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
        </section>
      </main>
      <div className={styles.data} />
    </div>
  );
};

export default Feed1;
