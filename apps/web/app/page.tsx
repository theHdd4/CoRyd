const benefits = ['Lower member fares', 'Priority bikes and taxis', 'Predictable commute costs', 'Driver-aligned repeat demand'];
const modules = ['Auth', 'Users', 'Drivers', 'Vehicles', 'Rides', 'Payments', 'Subscriptions', 'Admin'];

export default function Home() {
  return (
    <main>
      <p className="badge">CoRyd MVP</p>
      <h1>Membership-driven mobility for everyday city travel.</h1>
      <p>CoRyd combines subscriptions, ride booking, payments, and realtime ride updates into one predictable mobility companion.</p>
      <section className="grid">
        {benefits.map((benefit) => <div className="card" key={benefit}>{benefit}</div>)}
      </section>
      <h2>Backend modules</h2>
      <section className="grid">
        {modules.map((module) => <div className="card" key={module}>{module}</div>)}
      </section>
    </main>
  );
}
