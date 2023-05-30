import { Button } from './CongratsModal.styled';
const CongratsModal = () => {
  return (
    <div>
      <h2>Congratulation!</h2>
      <p>Your order has been accepted. Wait for the courier</p>
      <Button to="/">Go shopping more</Button>
    </div>
  );
};

export default CongratsModal;
