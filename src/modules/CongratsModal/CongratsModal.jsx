import { Button, Title, Message } from './CongratsModal.styled';
const CongratsModal = () => {
  return (
    <div>
      <Title>Congratulations!🎉</Title>
      <Message>Your order has been accepted. Wait for the courier</Message>
      <Button to="/">Go shopping more</Button>
    </div>
  );
};

export default CongratsModal;
