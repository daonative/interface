import { Header } from "./Header";
import { Card } from "./Card";
import { CallBody } from "./StyledBody";

export const CallDescription = ({ description, className }) => {
  if (!description)
    return null;

  return (
    <Card className={`p-8 pt-16 relative ${className}`}>
      <Header className="absolute top-0 left-0 min-w-max w-1/4 py-3">
        Description
      </Header>
      <CallBody description={description} />
    </Card>
  );
};
