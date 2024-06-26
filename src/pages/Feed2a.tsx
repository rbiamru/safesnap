import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import Btn from "../components/Btn";
import Item from "../components/Item";
import styles from "./Feed2a.module.css";

const Feed2a: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuItemContainerClick = useCallback(() => {
    navigate("/21-public-post");
  }, [navigate]);

  const onTabClick = useCallback(() => {
    navigate("/feed2");
  }, [navigate]);

  return (
    <div className={styles.feed2a}>
      <FrameComponent onMenuItemContainerClick={onMenuItemContainerClick} />
      <div className={styles.rightPane}>
        <div className={styles.tabsfeedParent}>
          <div className={styles.tabsfeed}>
            <div className={styles.tabsContainer}>
              <nav className={styles.tabs}>
                <Button variant="outline-primary" />
                <button className={styles.tab} onClick={onTabClick}>
                  <a className={styles.info}>Feed</a>
                </button>
                <Button variant="primary" />
              </nav>
            </div>
            <div className={styles.bgParent}>
              <img className={styles.bgIcon} alt="" src="/bg1.svg" />
              <div className={styles.aboutWrapper}>
                <div className={styles.about}>
                  <a className={styles.about1}>About:</a>
                  <div className={styles.fashionBeautyLifestyleContainer}>
                    <p className={styles.travellerWithPassion}>
                      <span>
                        <span className={styles.travellerWithPassion1}>
                          👜 Traveller with passion
                        </span>
                      </span>
                    </p>
                    <p className={styles.founderOfUnemployedyouth}>
                      <span>
                        <span>{`🙌 Founder of `}</span>
                        <span className={styles.unemployedyouth}>
                          @unemployedYouth
                        </span>
                      </span>
                    </p>
                    <p className={styles.waterloo}>
                      <span>
                        <span>📍 Waterloo</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.buttons}>
                <Btn instagram="/instagram.svg" instagram1="Instagram: " />
                <Btn
                  instagram="/twitter@2x.png"
                  instagram1="Twitter: "
                  propBorder="1px solid rgba(41, 152, 255, 0.74)"
                />
                <div className={styles.btn}>
                  <img
                    className={styles.youtubeIcon}
                    loading="lazy"
                    alt=""
                    src="/youtube@2x.png"
                  />
                  <div className={styles.youtubeHannahSuperWrapper}>
                    <div className={styles.youtubeHannahSuper}>
                      <span>{`Youtube: `}</span>
                      <span className={styles.johnDoe}>{`@John_Doe `}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.btn1}>
                  <img
                    className={styles.socialIconsBlack}
                    loading="lazy"
                    alt=""
                    src="/social-icons-black@2x.png"
                  />
                  <div className={styles.facebookWrapper}>
                    <a className={styles.facebook}>Facebook</a>
                  </div>
                </div>
                <Btn
                  instagram="/telegram@2x.png"
                  instagram1="Telegram: "
                  propBorder="1px solid rgba(40, 152, 255, 0.61)"
                />
              </div>
            </div>
          </div>
          <a className={styles.hannahSmith}>JOHN DOE</a>
          <a className={styles.johnDoe1}>@John Doe</a>
        </div>
      </div>
      <div className={styles.bgGroup}>
        <img className={styles.bgIcon1} alt="" src="/bg-1.svg" />
        <div className={styles.tabsfeed1}>
          <div className={styles.feed}>
            <img
              className={styles.feedChild}
              alt=""
              src="/rectangle-6@2x.png"
            />
            <img className={styles.feedItem} alt="" src="/rectangle-1@2x.png" />
            <div className={styles.div}>
              <img
                className={styles.child}
                alt=""
                src="/rectangle-2-1@2x.png"
              />
              <img className={styles.item} alt="" src="/rectangle-4-1@2x.png" />
              <img
                className={styles.inner}
                alt=""
                src="/rectangle-6-1@2x.png"
              />
            </div>
            <div className={styles.div1}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/double-image-placeholders@2x.png"
              />
              <img
                className={styles.child1}
                alt=""
                src="/double-image-placeholders@2x.png"
              />
            </div>
            <div className={styles.div2}>
              <img
                className={styles.child2}
                alt=""
                src="/rectangle-5-1@2x.png"
              />
            </div>
            <div className={styles.div3}>
              <img className={styles.child3} alt="" src="/rectangle-4@2x.png" />
            </div>
            <img
              className={styles.feedInner}
              alt=""
              src="/rectangle-2@2x.png"
            />
            <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
            <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.bottomPane}>
        <div className={styles.userActions}>
          <div className={styles.actionButtons}>
            <div className={styles.buttonContainer}>
              <button className={styles.tab1}>
                <a className={styles.follow}>+ Follow</a>
              </button>
              <img
                className={styles.sendIcon}
                loading="lazy"
                alt=""
                src="/send@2x.png"
              />
            </div>
            <div className={styles.followerCounts}>
              <div className={styles.countValues}>
                <a className={styles.countSeparator}>787</a>
                <div className={styles.followers}>Followers</div>
              </div>
              <div className={styles.countValues1}>
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
          <div className={styles.activityFeed}>
            <div className={styles.topPerformers}>
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
        </div>
      </div>
      <div className={styles.data} />
    </div>
  );
};

export default Feed2a;
