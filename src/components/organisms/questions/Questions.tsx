import QuestionItem from "@/components/atoms/questionItem/QuestionItem";
import style from "@/components/organisms/questions/Questions.module.scss";

const Questions = () => {
  const link = () => {
    return (
      <div className={style.link}>
        <p>
          Gift cards are divided into two primary categories: <br />
        </p>
        <p>
          Closed Gift Cards that give their holders limited spending scope and
          options regardless of the cash value in them. <br />
        </p>
        <p>
          Open Gift Cards that come with no restrictions to how a Gift Card
          holder can spend their Gift Cash.
        </p>
        <p>
          Contrary to traditional Cash gifts where your spending options are
          limited only by the direct value of the Cash amount you received,
          closed Gift cards, like Walmart or Amazon, are also limited by
          merchant and value options.
        </p>
        <p>MoreGift on the other hand, is the world’s first Open Gift Card.</p>
        <p>
          A MoreGift Card gives the owner the same level of freedom they get
          from traditional Cash gifts. Cash on a MoreGift Card can be spent like
          cash in hand or regular debit card. The only limit you have on a
          MoreGift Card is the Currency value of the Cash on it, everything else
          is boundless including currency, location, store, item, or bank - Just
          like the cash in your pocket or debit card.
        </p>
      </div>
    );
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Questions people ask</h2>
      <div className={style.wrapper}>
        <QuestionItem text="What is a DiGiT?" link={link()} />
        <QuestionItem
          text="Does Moregift Charge a fee to Send and receive Gifts?"
          link="Answer"
        />
        <QuestionItem
          text="Do I need a balance before I can Send a Cash Gift?"
          link="Answer"
        />
        <QuestionItem
          text="Can I send Gifts to someone who is not on Moregift?"
          link="Answer"
        />
        <QuestionItem
          text="How does Moregift keep my Gift Cash Safe?"
          link="Answer"
        />
      </div>
    </div>
  );
};

export default Questions;
