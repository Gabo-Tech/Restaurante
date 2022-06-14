import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reserve() {
  const [data, setData] = useState({
    name: "",
    date: ""
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const initialState = {
    name: "",
    date: ""
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    if (data.name.length < 1 /*se empieza a contar desde 0, el 1 es = a 2*/) {
      setMessage(
        "Nombre como mínimo de 2 caractéres, aquí no se discrimina a la cultura asiatica."
      );
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveData(data);
    clearState();
    setMessage("formulario enviado con éxito");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  function saveData(data) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: data.name,
        date: data.date
      })
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        onChange={handleInputChange}
        value={data.name}
        name="name"
      />
      <input
        type="date"
        placeholder="date"
        onChange={handleInputChange}
        value={data.date}
        name="date"
      />
      <button type="submit" disabled={btnDisabled}>
        Enviar
      </button>
      {message}
    </form>
  );
}
