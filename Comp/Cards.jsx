export function Cards({ setShowModal }) {
  const cards = [
    {
      imgSrc: "./assets/img/card1-img.png",
      title: "Duis aute irure dolor in henderit in voluptate.",
      description: [
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
      ],
    },
    {
      imgSrc: "./assets/img/card2-img.png",
      title: "Duis aute irure dolor in henderit in voluptate.",
      description: [
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
      ],
    },
    {
      imgSrc: "./assets/img/card3-img.png",
      title: "Duis aute irure dolor in henderit in voluptate.",
      description: [
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
      ],
    },
  ];
  return (
    <section className="cards-container">
      {cards.map((card, idx) => (
        <Card
          key={idx}
          imgSrc={card.imgSrc}
          title={card.title}
          description={card.description}
          setShowModal={setShowModal}
        />
      ))}
    </section>
  );
}

function Card({ imgSrc, title, description, setShowModal }) {
  return (
    <section className="card">
      <img src={imgSrc} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        {description.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
        <button
          onClick={() => setShowModal(true)}
          className="continue-reading-btn"
        >
          Continue Reading <span>&#x2192;</span>
        </button>
      </div>
    </section>
  );
}
