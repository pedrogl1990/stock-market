import { useState } from "react";

export default function Create() {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    price: 0,
  });

  function handleChange(e) {
    console.log("handleChange: ", e.target.value);

    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome
            <input
              onChange={handleChange}
              value={formData.name}
              type="text"
              name="name"
              required
              minLength="4"
              maxLength="60"
            />
          </label>
        </div>
        <div>
          <label>
            Código
            <input
              onChange={handleChange}
              value={formData.code}
              type="text"
              name="code"
              required
              minLength="3"
              maxLength="3"
            />
          </label>
        </div>
        <div>
          <label>
            Preço
            <input
              onChange={handleChange}
              value={formData.price}
              type="number"
              name="price"
              required
              minLength="1"
              maxLength="9999"
            />
          </label>
        </div>
      </form>
      <button type="submit">Guardar</button>
    </main>
  );
}
