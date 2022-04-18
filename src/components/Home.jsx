export default function Home({ stocks }) {
  console.log(stocks);
  return (
    <main>
      {stocks.map((stock, index) => (
        <section key={index}>
          <h2>{stock.name}</h2>
          <h3>{stock.code}</h3>
          <div>{stock.price}</div>
        </section>
      ))}
    </main>
  );
}
