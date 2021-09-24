const crypto = require("crypto");

export const callForArticles = [
  {
    id: crypto
      .createHash("sha1")
      .update("How to make quality crypto content?")
      .digest("hex"),
    valueLocked: 0.2,
    deadline: "2021-11-01",
    abstractDeadline: "2021-10-15",
    wordCount: "250 - 1000",
    title: "How to make quality crypto content?",
    sponsors: {
      prologe: {
        balance: 0.2,
      },
    },
    description: `
      <div>
       <div>
          <p class="mb-3">
            We're building a community of crypto writers. Help the community
            strive for the best by answering the following questions:
          </p>
        </div>
        <div>
          <ul>
            <li data-line="0">
              <p>Writing about crypto: what's so hard about it?</p>
            </li>
            <li data-line="2">
              <p>What does it mean to write quality content?</p>
            </li>
            <li data-line="4">
              <p>What are the common mistakes that people make?</p>
            </li>
            <li data-line="6">
              <p>Examples of bad quality vs. good quality?</p>
            </li>
          </ul>
        </div>
        <div>
          <p class="mt-3">
            At prologe.press, we aim for quality over quantity. So if you
            believe someone else covered some of these topics well in their
            writing, give them their just dues and link to them.
          </p>
          <p class="mt-3">
          Your primary focus should be to answer the call. You don't necessarily need to answer all the questions listed here above.
          </p>
        </div>
      </div>
    `,
  },
  {
    id: crypto
      .createHash("sha1")
      .update("Crypto and the unbanked")
      .digest("hex"),
    title: "Crypto and the unbanked",
    proposals: [2, 3],
    sponsors: {
      prologe: {
        balance: 0.1,
      },
    },
    description: `
        <p>
          Crypto has long been pretending to bank the unbanked. It would be nice
          to see an article that answers:
        </p>
        <ul>
          <li>What has been achieved until now?</li>
          <li>
            What are the missing pieces to enable the unbanked to take part in
            the new world economy?
          </li>
          <li>What are the most interesting projects tackling this issue?</li>
        </ul>
    `,
    valueLocked: 0.1,
    deadline: "2021-09-22",
  },
  {
    id: crypto
      .createHash("sha1")
      .update("Top 100 DeFi projects + mapping")
      .digest("hex"),
    title: "Top 100 DeFi projects + mapping",
    valueLocked: "0.020",
    deadline: "2021-10-05",
    sponsors: {
      prologe: {
        balance: 0.015,
      },
    },
  },
  {
    id: crypto
      .createHash("sha1")
      .update("Censorship resistant information guide")
      .digest("hex"),
    title: "Censorship resistant information guide",
    sponsors: {
      prologe: {
        balance: 0.015,
      },
    },
    valueLocked: "0.1",
    deadline: "2021-11-01",
    abstractDeadline: "2021-10-15",
    description: `
        At which levels can your article/information on the internet get
        censored? For example:
        <li>platform-level (youtube, facebook)</li>
        <li>app-level (app stores)</li>
        <li>server-level (public cloud at google/amazon)</li>
        <li>domain-Level (domain providers)</li>
    `,
  },
  {
    sponsors: {
      "0x9890Ec25415912b2D8628C385daCA509650882bD": {
        balance: 0.07,
      },
      "0x69F5Bd7021858C3270A43aD7D719c6164CA6D174": {
        balance: 0.02,
      },
    },
    title: "What is prologe.press?",
    id: crypto
      .createHash("sha1")
      .update("What is prologe.press`?")
      .digest("hex"),
    valueLocked: 0.027,
    deadline: "2021-08-21",
    proposals: [0, 1],
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
  ,
];
