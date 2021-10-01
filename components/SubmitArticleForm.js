import { Header } from "./Header";
import { Card } from "./Card";
import { useState } from "react";
import { Input } from "./Input";

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
          <Input
            label="Article Link"
            type="url"
            name="articleURL"
            placeholder="Enter the link to your article"
            required={true}
            pattern="https://.*"
          />
          <p className="mt-2 text-sm ">{status}</p>
          <button
            className="flex items-center w-max text-prologe-primary cursor-pointer bg-transparent font-bold ml-auto mt-6"
            type="submit"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Submit Article
          </button>
        </form>
      </div>
    </Card>
  );
};
