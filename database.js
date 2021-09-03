var crypto = require("crypto");

export const articles = [
  {
    createdAt: 1629690443530,
    image: "/prologeblacktile.png",
    publisherAddress: "0x26Cc4f46aEC6486E7341cE91996fEeE7839a1C6C",
    claimable: "0.011600000000000001",
    contentURI:
      "https://fringe-cloth-384.notion.site/What-is-prologe-press-11a7fbce871d4dc0a3f03b388196dd9e",
  },
  {
    createdAt: 1629670322530,
    image: "/prologewhitetile.png",
    claimable: "0.003999999999999999",
    publisherAddress: "0x9890Ec25415912b2D8628C385daCA509650882bD",
    contentURI:
      "https://docs.google.com/document/d/1J1mw8bb5L6osIeyA4uC0CY5nWN6s6Pu6L1K9B0zU7xo",
  },
];

export const callForArticles = [
  {
    title: "What is prologe.press?",
    id: crypto
      .createHash("sha1")
      .update("What is prologe.press?")
      .digest("hex"),
    valueLocked: 0.027,
    deadline: new Date("2021-08-21"),
    articles,
    description: `            <div>
              <p >Create an article explaining:</p>
              <ul>
                <li>what prologe.press is</li>
                <li>who prologe.press is for</li>
                <li>what problem prologe.press solves </li>
              </ul>
            </div>
 `,
  },
  {
    id: crypto
      .createHash("sha1")
      .update(
        "A complete guide of hiring in DeFi: employee vs freelance vs grant distribution"
      )
      .digest("hex"),

    title:
      "A complete guide of hiring in DeFi: employee vs freelance vs grant distribution",
    valueLocked: 0.025,
    deadline: new Date("2021-09-22"),
  },
  {
    id: crypto
      .createHash("sha1")
      .update("Crypto and the unbanked")
      .digest("hex"),
    title: "Crypto and the unbanked",
    description: `
        <p>
          Crypto has long been pretending to bank the unbanked. It would be nice
          to see an article that answers:
        </p>
        <ul>
          <li>What has been achieved until now? </li>
          <li>
            What are the missing pieces to enable the unbanked to take part in
            the new world economy?
          </li>
          <li>What are the most interesting projects tackling this issue?</li>
        </ul>
    `,
    valueLocked: 0.05,
    deadline: new Date("2021-09-22"),
  },
  {
    id: crypto
      .createHash("sha1")
      .update("Top 100 DeFi projects + mapping")
      .digest("hex"),
    title: "Top 100 DeFi projects + mapping",
    valueLocked: "0.020",
    deadline: new Date("2021-09-22"),
  },
  {
    id: crypto
      .createHash("sha1")
      .update("Censorship resistant information guide")
      .digest("hex"),
    title: "Censorship resistant information guide",
    valueLocked: "0.015",
    deadline: new Date("2021-09-30"),
    description: `
        At which levels can your article/information on the internet get
        censored? For example:
        <li>platform-level (youtube, facebook)</li>
        <li>app-level (app stores)</li>
        <li>server-level (public cloud at google/amazon)</li>
        <li>domain-Level (domain providers)</li>
    `,
  },
];
