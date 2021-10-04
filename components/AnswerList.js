import { Header } from "./Header";
import { Card } from "./Card";
import { Answer } from "./Answer";

export const AnswerList = ({ articles, className }) => {
  const hasAnswers = articles?.length > 0;
  return (
    <Card className={` ${className}`}>
      <Header className="top-0 left-0 min-w-max w-1/4 py-3">
        Answers
      </Header>
      <div className="px-4 md:px-8 pt-5 py-5">
        {hasAnswers ? (
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-10"
          >
            {articles.map((article, index) => {
              return <Answer key={index} id={index} article={article} />;
            })}
          </ul>
        ) : (
          <div className="w-full">No answers at the moment</div>
        )}
      </div>
    </Card>
  );
};
