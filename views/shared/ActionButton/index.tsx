import './style.css';
type ActionButtonProps = {
  buttonTitle: string;
  isSubmit?: boolean;
  buttonAction?: () => void;
};
const ActionButton: React.FC<ActionButtonProps> = ({
  buttonAction,
  buttonTitle,
  isSubmit,
}) => {
  return (
    <div className='action-button-ctn'>
      <button
        type={isSubmit ? 'submit' : 'button'}
        id='action-button-btn'
        onClick={buttonAction}
      >
        {buttonTitle}
      </button>
    </div>
  );
};
export default ActionButton;
