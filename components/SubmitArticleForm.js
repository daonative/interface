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
    <Card className={`${className}`}>
      <Header className=" top-0 left-0 min-w-max max-w-full w-1/4 py-3">
        Submit your article
      </Header>
      <div className="text-sm p-4">
        We only accept submission from members in closed beta.{" "}
        <a href="https://discord.gg/zGk5TSSyjX" className="underline">
          Join our discord{" "}
        </a>
        to learn more.
      </div>
    </Card>
  );
};
