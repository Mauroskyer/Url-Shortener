import { useState } from 'react';
import style from './createForm.module.css';
export default function CreateForm() {
  const [url, setUrl] = useState('');

  function handleChange(event) {
    const value = event.target.value;
    setUrl(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={url}
        onChange={handleChange}
        className={style.input}
        placeholder="Type a valid URL ..."
      />
    </form>
  );
}
