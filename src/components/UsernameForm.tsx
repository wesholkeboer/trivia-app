import { FormEvent } from "react";
import "./UsernameForm.css";

interface Props {
  username: string;
  setUsername: any;
  handleSubmitUsername: (e: FormEvent) => void;
}

const UsernameForm = ({
  username,
  setUsername,
  handleSubmitUsername,
}: Props) => {
  return (
    <form className='UsernameForm' onSubmit={handleSubmitUsername}>
      <label>
        enter your name:{" "}
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      {username !== "" && <button>my name is in the box now</button>}
    </form>
  );
};

export default UsernameForm;
