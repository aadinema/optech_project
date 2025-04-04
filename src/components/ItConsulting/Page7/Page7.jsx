import React from "react";
import styles from "./page7.module.css";

const Page7 = () => {
  const data = [
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon1-2.svg",
      num: "1800+",
      paragraph: "Happy Clients",
    },
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon2-2.svg",
      num: "600+",
      paragraph: "Finished Projects",
    },
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon3-2.svg",
      num: "200+",
      paragraph: "Skilled Experts",
    },
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon4-2.svg",
      num: "26%",
      paragraph: "Clients Satisfaction",
    },
  ];

  const data2 = [
    {
      mainPara:
        "“Working with several WordPress themes and templates the last years, I can only say this is the best in every level. I use it for my company, and the reviews that I have already are all excellent. Not only the design but the code quality.”",
      heading: "Alexander Cameron",
      subPara: "Lead Developer",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/quote.svg",
    },
    {
      mainPara:
        "“ Working with several WordPress themes and templates the last years, I can only say this is the best in every level. I use it for my company, and the reviews that I have already are all excellent. Not only the design but the code quality. ”",
      heading: "Marvin McKinney",
      subPara: "Product Manager",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/quote.svg",
    },
    {
      mainPara:
        "“ Working with several WordPress themes and templates the last years, I can only say this is the best in every level. I use it for my company, and the reviews that I have already are all excellent. Not only the design but the code quality. ”",
      heading: "Brooklyn Simmons",
      subPara: "Lead Developer",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/quote.svg",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.reviewContainer}>
          {data.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>
                <img
                  src={item.img}
                  alt={`icon-${index}`}
                  className={styles.icon}
                />
              </div>
              <div className={styles.textContainer}>
                <div className={styles.numberContainer}>
                  <span className={styles.number}>{item.num}</span>
                </div>
                <p className={styles.paragraph}>{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />

      <div>
        <div className={styles.subContainer}>
          <div className={styles.mainHead}>
            <h1>
              Don’t take our word, see <br /> what our customers say
            </h1>
          </div>

          <div className={styles.cardContainer}>
            {data2.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.starContainer}>
                  <ul className={styles.starIcon}>
                    <li>
                      <i className="remixicon ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="remixicon ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="remixicon ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="remixicon ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="remixicon ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
                <p className={styles.mainPara}>{item.mainPara}</p>
                <div className={styles.userInfo}>
                  <div>
                    <h3 className={styles.heading}>{item.heading}</h3>
                    <p className={styles.subPara}>{item.subPara}</p>
                  </div>
                  <div className={styles.quoteContainer}>
                    <img
                      src={item.img}
                      alt="quote"
                      className={styles.quoteImage}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page7;
