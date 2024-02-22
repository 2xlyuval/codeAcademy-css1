import { Header } from "./Comp/Header.jsx";
import { PageNavigation } from "./Comp/PageNavigation.jsx";
import { Cards } from "./Comp/Cards.jsx";
import { Modal } from "./Comp/Modal.jsx";
import { Footer } from "./Comp/Footer.jsx";
const { useState } = React;

export function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (state) => {
    setShowModal(state);
    document.body.style.overflow = showModal ? "auto" : "hidden";
  };
  return (
    <section className="main-layout">
      <Header />
      {showModal && <Modal toggleModal={toggleModal} />}
      <main>
        <Cards toggleModal={toggleModal} />
        <PageNavigation />
      </main>
      <Footer />
    </section>
  );
}
