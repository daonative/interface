const crypto = require("crypto");

export const callForArticles = [
  {
    id: crypto.createHash("sha1").update("Women in DeFi").digest("hex"),
    currency: "eth",
    abstractDeadline: "2021-10-15",
    created: "2021-10-05",
    deadline: "2021-10-22",
    wordCount: "800+",
    title: "Women in DeFi",
    sponsors: {
      "Arjun Chand": {
        balance: "0.02",
        currency: "eth",
      },
      "Luke's Donut Mind": {
        balance: "0.005",
        currency: "eth",
      },
      virtual: {
        balance: "0.005",
        currency: "eth",
      },
      ola_afe: {
        balance: "0.01",
        currency: "eth",
      },
      rose8: {
        balance: "0.01",
        currency: "eth",
      },
    },
    description: `Put the spotlight on women in DeFi.`,
  },
  {
    id: crypto
      .createHash("sha1")
      .update("Web3 and the future of online communities")
      .digest("hex"),
    currency: "eth",
    abstractDeadline: "2021-10-15",
    created: "2021-10-05",
    deadline: "2021-10-31",
    wordCount: "800+",
    title: "Web3 and the future of online communities",
    sponsors: {
      virtual: {
        balance: "0.005",
        currency: "eth",
      },
      davanac: {
        balance: "0.02",
        currency: "eth",
      },
      "Luke's Donut Mind": {
        balance: "0.005",
        currency: "eth",
      },
      ola_afe: {
        balance: "0.01",
        currency: "eth",
      },
      Evgeny: {
        balance: "0.01",
        currency: "eth",
      },
    },
    description: `
Make a small history about the history of communities. What is a community? How did communities look like before the internet? How did web 1 and web 2 communities look like? And what's different (if anything) about web 3 communities?
`,
  },
  {
    id: crypto
      .createHash("sha1")
      .update("What remains of the crypto-anarchist spirit?")
      .digest("hex"),
    currency: "eth",
    created: "2021-10-05",
    abstractDeadline: "2021-10-15",
    deadline: "2021-10-31",
    wordCount: "800+",
    title: "What remains of the crypto-anarchist spirit?",
    sponsors: {
      virtual: {
        balance: "0.005",
        currency: "eth",
      },
      Emomert: {
        balance: "0.02",
        currency: "eth",
      },
      "Luke's Donut Mind": {
        balance: "0.005",
        currency: "eth",
      },
      "anhnt4288.near": {
        balance: "0.01",
        currency: "eth",
      },
      rose8: {
        balance: "0.01",
        currency: "eth",
      },
      prologe: {
        balance: "0.03",
        currency: "eth",
      },
    },
    description: `
Many people say that bitcoin was born out of the crypto anarchist movement and more specifically that its seed were planted in the crypto-anarchist manifesto. But what remains of it today?
`,
  },
  {
    id: crypto
      .createHash("sha1")
      .update("A comparison of DAOs and anarchist societies")
      .digest("hex"),
    currency: "eth",
    abstractDeadline: "2021-10-15",
    deadline: "2021-10-31",
    created: "2021-10-05",
    wordCount: "800+",
    title: "A comparison of DAOs and anarchist societies",
    sponsors: {
      virtual: {
        balance: "0.005",
        currency: "eth",
      },
    },
    description: `In what sense do DAOs resemble anarchistic societies? In what sense do they not?`,
  },
  {
    id: crypto
      .createHash("sha1")
      .update("How can DAOs increase the surface area of participation?")
      .digest("hex"),
    currency: "eth",
    abstractDeadline: "2021-10-15",
    created: "2021-10-05",
    deadline: "2021-10-31",
    wordCount: "800+",
    title: "How can DAOs increase the surface area of participation?",
    sponsors: {
      Evgeny: {
        balance: "0.01",
        currency: "eth",
      },
      prologe: {
        balance: "0.03",
        currency: "eth",
      },
    },
    description: `
If you're a developer you can just hop on gitcoin and earn crypto while contributing to DAOs but what happens if you don't know how to code?

Explore how people can participate in DAOs currently and how we could increase the surface area of participation.
`,
  },
  {
    id: crypto
      .createHash("sha1")
      .update(
        "A critical overview of Attack of the 50 Foot Blockchain: Bitcoin, Blockchain, Ethereum & Smart Contracts by David Gerard"
      )
      .digest("hex"),
    currency: "eth",
    abstractDeadline: "2021-10-15",
    created: "2021-10-05",
    deadline: "2021-10-31",
    wordCount: "800+",
    title:
      "A critical overview of Attack of the 50 Foot Blockchain: Bitcoin, Blockchain, Ethereum & Smart Contracts by David Gerard",
    sponsors: {
      "Luke's Donut Mind": {
        balance: "0.005",
        currency: "eth",
      },
      "anhnt4288.near": {
        balance: "0.01",
        currency: "eth",
      },
    },
    description: `
David has been very critical of the innovation that stemmed out of crypto. But is it warranted?

[https://www.goodreads.com/en/book/show/35525995-attack-of-the-50-foot-blockchain](https://www.goodreads.com/en/book/show/35525995-attack-of-the-50-foot-blockchain)

It's very important that this article explores the subject from a neutral point of view and steers clear of shilling crypto.
`,
  },
  {
    id: crypto
      .createHash("sha1")
      .update("NFTs beyond visual art")
      .digest("hex"),
    currency: "eth",
    abstractDeadline: "2021-10-15",
    created: "2021-10-05",
    deadline: "2021-10-26",
    wordCount: "800-1200",
    title: "NFTs beyond visual art",
    proposals: [5],
    sponsors: {
      "block0.ch": {
        balance: "0.2",
        currency: "eth",
      },
    },
    sponsorsWillOwnSubmissions: true,
    description: `
NFTs have mostly enjoyed wide adoption as a new way to collect visual art. However, the technology offers a wide variety of use cases. This article should dive a bit deeper into those use cases:

* Which use cases are there out there
* Which of those use cases have seen some adoption
* Which platforms do those projects use

The author accepts that the article will be published on the Block0 blog.
`,
  },
  {
    id: crypto
      .createHash("sha1")
      .update(
        "Top 3 Crypto Accounting Solutions for Businesses Using Xero or Quickbooks"
      )
      .digest("hex"),
    currency: "usdc",
    created: "2021-10-05",
    abstractDeadline: "2021-10-05",
    deadline: "2021-10-15",
    wordCount: "1000+",
    title:
      "Top 3 Crypto Accounting Solutions for Businesses Using Xero or Quickbooks",
    sponsors: {
      "request.network": {
        balance: "300",
        currency: "usdc",
      },
    },
    sponsorsWillOwnSubmissions: true,
    description: `
## What the article is about (background context):

Many businesses use popular cloud accounting software like Quickbooks and Xero to do their bookkeeping and monitoring their financial transactions. They also need to find the best way to account for their crypto assets and transactions in their current (traditional) accounting software.

This article will provide a summary of top 3 crypto accounting solutions that acts mainly as a subledger: Cryptio, Accounting, and SoftLedger.

## For whom the article is meant to be read (target audience):

Freelancers and SMBs (ex. small marketing agency) who are already using the popular accounting tools like Xero and Quickbooks, looking for an efficient way to automate crypto accounting process with their current accounting software.

## Why the article is being written (desired outcomes, and CTA):

To inform the audience about the partnership between Request and Cryptio, and how both tools combined can be a great crypto accounting solution along with their Xero or Quickbooks software.

This article must highlight the CSV feature from Request that may be useful for some businesses who only need to upload journal entries manually to their accounting software.

*Keywords: crypto accounting, quickbooks cryptocurrency, quickbooks crypto, xero crypto, accounting software for crypto,*
`,
  },
  {
    id: crypto
      .createHash("sha1")
      .update("A guide to crypto taxation and compliance in Europe")
      .digest("hex"),
    currency: "usdc",
    abstractDeadline: "2021-10-05",
    deadline: "2021-10-08",
    wordCount: "1000+",
    title: "A guide to crypto taxation and compliance in Europe",
    sponsors: {
      "request.network": {
        balance: "300",
        currency: "usdc",
      },
    },
    sponsorsWillOwnSubmissions: true,
    description: `
## What the article is about (background context):

An overview of taxes on cryptocurrency are being applied by the European parliament, as well as any other KYC/AML regulations that apply.

The article will also go deeper into a few individual European states and how each country is treating crypto taxes in their region i.e. Germany, France, UK, Spain, Malta, Portugal, plus the UK.

## For whom the article is meant to be read (target audience):

Freelancers and businesses in Europe who deal in crypto, and have to comply with tax regulations.

## Why the article is being written (desired outcomes, and CTA):

Impress upon readers (businesses and individuals) the growing importance of taxation and KYC/AML compliance, and assisting readers how to be compliant with when dealing in crypto.

The article must also highlight the ability to denominate invoices in fiat while receiving the actual payment in crypto with Request Invoicing. This feature helps businesses and individuals dealing with crypto to have a clear paper trail and to be compliant with KYC/AML, and tax laws.

*Keywords: crypto tax for business, crypto tax for freelancers, crypto compliance, KYC/AML.*
`,
  },
  {
    id: crypto
      .createHash("sha1")
      .update("Comparing The Best Crypto Wallets for Businesses")
      .digest("hex"),
    currency: "usdc",
    abstractDeadline: "2021-10-05",
    deadline: "2021-10-08",
    wordCount: "1000+",
    title: "Comparing The Best Crypto Wallets for Businesses",
    sponsors: {
      "request.network": {
        balance: "300",
        currency: "usdc",
      },
    },
    sponsorsWillOwnSubmissions: true,
    description: `
## What the article is about (background context):

Provide a feature comparison (include table) of the top 5 non-custodial crypto wallets (along with its pros and cons) that a business should consider: Gnosis Safe, Ledger, Trezor, Metamask, and Multis.co.

Highlight the key features and functionalities of various wallets which are important for businesses. Point out that they can split their crypto holdings across different wallets so they can manage risks better.

## For whom the article is meant to be read (target audience) :

Freelancers and SMBs who are likely new to crypto and looking for best practices to start accepting cryptocurrency payments for their business.

## Why the article is being written (desired outcomes, and CTA):

Inform the reader that using Request Invoicing allows them to easily integrate with all the top crypto wallets, which allows them to manage payments with ease from a single interface, even if they have multiple wallets.

The article will also mention that the Request Invoicing app is listed in Gnosis Safe App directory and that the team at Request themselves uses Gnosis, especially for doing multiple payments with their Batch Payment feature.

*Keywords: crypto wallets for business, non custodial crypto wallets, crypto wallets comparison*
`,
  },
  {
    id: crypto
      .createHash("sha1")
      .update("How to make quality crypto content?")
      .digest("hex"),
    deadline: "2021-11-01",
    abstractDeadline: "2021-10-15",
    wordCount: "250 - 1000",
    title: "How to make quality crypto content?",
    sponsors: {
      prologe: {
        balance: "0.2",
      },
    },
    sponsorsWillOwnSubmissions: true,
    description: `
We're building a community of crypto writers. Help the community strive for the best by answering the following questions:

*   Writing about crypto: what's so hard about it?
*   What does it mean to write quality content?
*   What are the common mistakes that people make?
*   Examples of bad quality vs. good quality?

At prologe.press, we aim for quality over quantity. So if you believe someone else covered some of these topics well in their writing, give them their just dues and link to them.

Your primary focus should be to answer the call. You don't necessarily need to answer all the questions listed here above.
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
        balance: "0.1",
      },
    },
    description: `
Crypto has long been pretending to bank the unbanked. It would be nice to see an article that answers:

*   What has been achieved until now?
*   What are the missing pieces to enable the unbanked to take part in the new world economy?
*   What are the most interesting projects tackling this issue?
`,
    deadline: "2021-09-22",
  },
  {
    id: crypto
      .createHash("sha1")
      .update("Top 100 DeFi projects + mapping")
      .digest("hex"),
    title: "Top 100 DeFi projects + mapping",
    created: "2021-09-01",
    deadline: "2021-10-05",
    sponsors: {
      "deficreators.com": {
        balance: "0.020",
      },
    },
    proposals: [4],
  },
  {
    id: crypto
      .createHash("sha1")
      .update("Censorship resistant information guide")
      .digest("hex"),
    title: "Censorship resistant information guide",

    sponsors: {
      prologe: {
        balance: "0.015",
      },
    },
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
        balance: "0.07",
      },
      "0x69F5Bd7021858C3270A43aD7D719c6164CA6D174": {
        balance: "0.02",
      },
    },
    title: "What is prologe.press?",
    id: crypto
      .createHash("sha1")
      .update("What is prologe.press`?")
      .digest("hex"),

    created: "2021-08-15",
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
