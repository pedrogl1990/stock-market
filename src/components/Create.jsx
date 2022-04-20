export default function Create() {
  function handleChange(e) {
    console.log("handleChange: ", e.target.value);
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
