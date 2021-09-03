import { Header } from "./Header";
import { Card } from "./Card";
import { useState } from "react";

export const SubmitArticleForm = ({ id, title, className }) => {
  const [status, setStatus] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        setStatus(
          "We will be in touch with you on discord. It may take up to 24th to receive a response from us."
        );
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
        setStatus("Oops! There was a problem submitting your form");
      });
  };
  return (
    <Card className={`p-4 pt-16 ${className}`}>
      <Header className="absolute top-0 left-0 min-w-max max-w-full w-1/4 py-3">
        Submit your article
      </Header>
      <span>
        We only accept submission from members in closed beta. Join our discord
        to learn more.
      </span>
      <div className="flex items-start mt-4">
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mdoyppor"
          method="POST"
          className="w-full"
        >
          <input type="hidden" name="callId" value={id} />

          <input type="hidden" name="callTitle" value={title} />
          <label
            htmlFor="articleURL"
            class="block text-sm font-medium text-gray-600 font-archivo"
          >
            Article Link
          </label>
          <div class="mt-1 flex rounded-md shadow-sm mb-3">
            <input
              type="url"
              pattern="https://.*"
              name="articleURL"
              class="flex-1 min-w-0 block w-full px-3 py-2 focus:ring-prologe-primary focus:border-prologe-primary sm:text-sm border-prologe-light"
              placeholder="Enter the link to your article"
            />
          </div>
          <p className="mt-2 text-sm ">{status}</p>

          <button
            className="flex items-center w-max text-prologe-primary cursor-pointer bg-transparent font-bold ml-auto mt-6"
            type="submit"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Sumbit Article
          </button>
        </form>
      </div>
    </Card>
  );
};
