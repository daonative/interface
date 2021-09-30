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
We're building a community of crypto writers. Help the community strive for the best by answering the following questions:

*   Writing about crypto: what's so hard about it?
*   What does it mean to write quality content?
*   What are the common mistakes that people make?
*   Examples of bad quality vs. good quality?

At prologe.press, we aim for quality over quantity. So if you believe someone else covered some of these topics well in their writing, give them their just dues and link to them.

Your primary focus should be to answer the call. You don't necessarily need to answer all the questions listed here above.
`
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
Crypto has long been pretending to bank the unbanked. It would be nice to see an article that answers:

*   What has been achieved until now?
*   What are the missing pieces to enable the unbanked to take part in the new world economy?
*   What are the most interesting projects tackling this issue?
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
At which levels can your article/information on the internet get censored? For example:

* platform-level (youtube, facebook)
* app-level (app stores)
* server-level (public cloud at google/amazon)
* domain-Level (domain providers)
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
    description: `

Create an article explaining:

* what prologe.press is
* who prologe.press is for
* what problem prologe.press solves
`,
  },
];
