import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (!showModal) {
      setShowModal(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Wenomechainsama Tumajarbisaun Wifenlooof Eselifterbraun
        Anweculbetugtbaby Aslonskysrblu Yuaksoinocenow Buchyulaidsosun
      </p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Show Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
