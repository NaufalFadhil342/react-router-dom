import { useNavigate } from 'react-router-dom';
import './add.css';

export const Add = () => {
  const navigate = useNavigate();

  return (
    <div className="add">
      <h1>Add Product</h1>
      <button
        onClick={() => {
          navigate('home');
        }}
      >
        Go to Home
      </button>
    </div>
  );
};
