import styles from "./VideoBackground.module.scss";

function VideoBackground() {
  return (
    <>
      <video autoPlay loop muted className={styles.hero__video}>
        <source
          src="/pexels-ehab-el-gapry-6238188.mp4"
          type="video/mp4"
          alt="background video showing green light horizontally scrolling by"
        />
      </video>
    </>
  );
}

export default VideoBackground;

//video source:
//https://www.pexels.com/video/a-motion-graphic-design-6238188/
//Video by Ehab El Gapry
