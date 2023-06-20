import React, { useRef } from 'react'

export const Modal = ({ btnName, btnStyle, children } : { btnName: string, btnStyle: string, children : React.ReactNode}) => {
  const dialog = useRef<HTMLDialogElement>(null)
  const show = () => {
    dialog.current?.showModal()
  }

  return (
    <>
      <button className={btnStyle} onClick={show}>
        {btnName}
      </button>
      <dialog ref={dialog} id="my_modal_1" className={"modal "}>
        {/* <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form> */}
        {children}
      </dialog>
    </>
  );
}
