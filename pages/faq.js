import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

import { Card } from "../components/Card";
import { FilmNoise, Gradient } from "../components/Gradient";
import { Navigation } from "../components/Navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DiscordLink = ({ children }) => (
  <a target="_blank" href="https://discord.gg/zGk5TSSyjX" className="text-prologe-primary">
    {children}
  </a>
)

const faqs = [
  {
    id: 1,
    question: "How much will I earn?",
    answer: (
      <div>
        The short answer is that you will earn anywhere between 0 and the total
        locked value in a given call for article.
      </div>
    ),
  },
  {
    id: 2,
    question: "How can I participate?",
    answer: (
      <ol className="list-decimal list-inside">
        <li>Join our <DiscordLink>discord</DiscordLink>.</li>
        <li>Introduce yourself in the #intro channel on discord.</li>
        <li>
          Write your article and add the{" "}
          <span className="underline">prologe writer verification link </span>at
          the end of your article.
          <br />
          The link should be formatted as such: <br />
          <a href="" className="text-prologe-primary">
            https://prologe.press/writer/
          </a>{" "}
          + <span className="text-prologe-primary"> eth address. </span>
          <br />
        </li>
        <li>
          We verify entries manually so it can take up to 24h for you to get a
          confirmation that we reviewed your article.
        </li>
        <li>
          After the votes are done. we will send the funds directly to your
          address.
        </li>
      </ol>
    ),
  },
  {
    id: 3,
    question: "How do I make my article win?",
    answer: (
      <div>
        The easiest way to have your article win is to communicate a lot on <DiscordLink>discord</DiscordLink>.
        Talk to either @lrnt or @ben about the article you're writing. We'll help you on the right track.
      </div>
    )
  },
  {
    id: 4,
    question: 'How long is the abstract?',
    answer: (<div>There is no minimum length for the abstract. Its only role is to act as a low friction communication medium between prologe & you</div>)
  }
];
const Background = () => {
  return (
    <FilmNoise className="fixed top-0 ">
      <Gradient />
    </FilmNoise>
  );
};

export default function FAQ() {
  return (
    <div className="relative subpixel-antialiased ">
      <Background />

      <div className="relative h-full grid gap-y-4 md:grid-rows-6 md:grid-cols-16 md:py-14">
        <div
          className={`md:col-start-2 md:col-end-5 py-8 md:py-0 px-6 md:px-0`}
        >
          <Navigation />
        </div>
        <div
          className={`md:col-start-5 md:col-end-13 px-0 md:px-8 md:row-start-1 md:row-end-2`}
        >
          <Card>
            <div>
              <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                  <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Frequently asked questions
                  </h2>
                  <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                    {faqs.map((faq) => (
                      <Disclosure as="div" key={faq.question} className="pt-6">
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                <span className="font-medium text-gray-900">
                                  {faq.question}
                                </span>
                                <span className="ml-6 h-7 flex items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-6 w-6 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                              <p className="text-base text-gray-500">
                                {faq.answer}
                              </p>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
