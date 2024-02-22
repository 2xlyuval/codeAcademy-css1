import { Header } from "./Comp/Header.jsx";
import { PageNavigation } from "./Comp/PageNavigation.jsx";
import { Cards } from "./Comp/Cards.jsx";
import { Modal } from "./Comp/Modal.jsx";
import { Footer } from "./Comp/Footer.jsx";
const { useState } = React;

export function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <section className="main-layout">
      <Header />
      {showModal && <Modal setShowModal={setShowModal} />}
      <main>
        <Cards setShowModal={setShowModal} />
        <PageNavigation />
      </main>
      <Footer />
    </section>
  );
}
