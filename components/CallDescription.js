import { Header } from "./Header";
import { Card } from "./Card";
import ReactMarkdown from "react-markdown";

export const CallDescription = ({ description, className }) => {
  if (!description) return null;

  return (
    <Card className={`p-8 pt-16 relative ${className}`}>
      <Header className="absolute top-0 left-0 min-w-max w-1/4 py-3">
        Description
      </Header>
      <ReactMarkdown className="prose prose-prologe-primary prose-sm text-gray-500 lg:max-w-none">
        {description}
      </ReactMarkdown>
    </Card>
  );
};
