import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { ErrorMessage, ErrorMessageWrapper } from './styles';


const FormErrrorMessage = ({
  message,
}: {
  message?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}) => {
  return (
    <ErrorMessageWrapper>
      <ErrorMessage>
        <>{message}</>
      </ErrorMessage>
    </ErrorMessageWrapper>
  );
};

export default FormErrrorMessage;
