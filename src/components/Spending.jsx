import SpentGraph from "./SpentGraph";

const Spending = () => {
  return (
    <article>
      <h2>Spending - Last 7 days</h2>
      <SpentGraph />
      <hr />
      <section>
        <div>
          <p>Total this month</p>
          <span className="total">$478.33</span>
        </div>
        <div className="align-right">
          <span>+2.4%</span>
          <p>from last month</p>
        </div>
      </section>
    </article>
  );
};

export default Spending;
