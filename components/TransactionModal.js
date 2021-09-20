import { Modal, ModalBody, ModalTitle } from "./Modal";
import { Loader } from "./Loader";

const getTitle = ({ isLoading, confirmed, error }) => {
  if (isLoading) return "Waiting For Confirmation";
  if (error) return "Transaction rejected";
  if (confirmed) return "Tx Confirmed";
  return "";
};

export const TransactionModal = ({
  isOpen,
  error,
  errorMessage,
  message,
  isLoading,
  onClose,
  confirmed,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {isLoading && <Loader className="h-32 w-32" />}
      <ModalTitle>{getTitle({ isLoading, confirmed, error })}</ModalTitle>
      <ModalBody>{errorMessage}</ModalBody>
      <ModalBody>{message}</ModalBody>
    </Modal>
  );
};
