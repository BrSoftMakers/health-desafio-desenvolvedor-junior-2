interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: JSX.Element;
}

export const Modal = ({ isVisible, onClose, children }: ModalProps) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="md:w-[600px] w-[90%] mx-auto flex flex-col">
          <button className="text-white text-xl place-self-end" onClick={() => onClose()}>
            X
          </button>
          <div className="bg-white p-2 rounded">{children}</div>
        </div>
      </div>
    </>
  );
};
