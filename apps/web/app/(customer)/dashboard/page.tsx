import { getCustomerDashboardData } from './data';
import styles from './page.module.css';

const navItems = ['Home', 'My Rides', 'Membership', 'Wallet', 'Saved Places', 'Refer & Earn', 'Support', 'Settings'];
const navIcons = ['⌂', '▰', '♕', '▣', '♡', '♧', '?', '⚙'];
const actions = [ ['▣', 'Schedule'], ['▰', 'Rentals'], ['⬡', 'Safety'], ['◖', 'Help'] ];

export default async function CustomerDashboardPage() {
  const data = await getCustomerDashboardData();

  return (
    <main className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}><span>≡</span>CoRyd</div>
        <nav className={styles.nav}>{navItems.map((item, index) => <a className={index === 0 ? styles.activeNav : ''} href="#" key={item}><span>{navIcons[index]}</span>{item}</a>)}</nav>
        <div className={styles.plusSmall}><div>♛</div><strong>CoRyd Plus</strong><p>Unlimited rides.<br />Zero worries.</p><a href="#">Upgrade Now →</a></div>
      </aside>

      <section className={styles.content}>
        <header className={styles.header}>
          <div><h1>Good morning, {data.user.name} 👋</h1><p>Where are you going today?</p></div>
          <div className={styles.headerActions}><button>⌖ {data.user.city}⌄</button><button className={styles.bell}>♧<span>{data.user.notifications}</span></button><button>{data.user.avatar}⌄</button></div>
        </header>

        <div className={styles.layoutGrid}>
          <section className={styles.leftColumn}>
            <div className={styles.mapCard}>
              <div className={styles.searchBox}><div className={styles.searchRow}><span className={styles.dot} /> <div><small>Pickup location</small><strong>Current location</strong></div><button>⌾</button></div><div className={styles.searchRow}><span className={styles.square} /> <p>Where do you want to go?</p></div></div>
              <div className={styles.map}><span>DLF Cyber City</span><span>SECTOR 29</span><span>SUSHANT LOK</span><span>MG ROAD</span><div className={styles.route} /><div className={styles.startPin} /><div className={styles.endPin}>●</div><button>⌾</button></div>
            </div>

            <div className={styles.rideHeader}><h2>Choose a ride</h2><a href="#">See all</a></div>
            <div className={styles.rideCards}>{data.rideOptions.map((ride) => <article className={`${styles.rideCard} ${ride.id === 'cab' ? styles.selectedRide : ''}`} key={ride.id}><div className={styles.vehicle}>{ride.icon}</div><div><h3>{ride.label} <span>♙ {ride.riders}</span></h3><p>{ride.description}</p><small>◉ {ride.eta}</small><strong>{ride.fare}</strong></div>{ride.badge && <em>{ride.badge}</em>}<button>→</button></article>)}</div>

            <div className={styles.places}><h3>Where to?</h3><div>{data.savedPlaces.map((place) => <button key={place.label}><span>{place.icon}</span><strong>{place.label}</strong><small>{place.detail}</small></button>)}<button><span>＋</span><strong>Add Place</strong></button></div></div>

            <div className={styles.bottomGrid}><section className={styles.promo}><div><h2>Save more with<br />CoRyd Plus</h2><p>Lower fares, priority support<br />and exclusive offers.</p><button>Upgrade Now →</button></div><div className={styles.promoArt}>🚗 🛵</div><small>● ● ●</small></section><section className={styles.recent}><div><h2>Recent Rides</h2><a>View all</a></div>{data.recentRides.map((ride) => <article key={ride.destination}><span className={styles[ride.accent]} /><div><strong>{ride.destination}</strong><p>{ride.origin}</p></div><time>{ride.date}</time><b>{ride.fare}</b><em>{ride.status}</em></article>)}</section></div>
          </section>

          <aside className={styles.rightColumn}>
            <section className={styles.plusCard}><h2>CoRyd Plus ♛</h2><p>Unlimited rides. Zero worries.</p><div><span>Member since<strong>{data.membership.memberSince}</strong></span><span>Valid till<strong>{data.membership.validTill}</strong></span></div><button>Manage Plan</button></section>
            <section className={styles.wallet}><h3>Wallet Balance</h3><strong>{data.walletBalance}</strong><button>＋</button></section>
            <section className={styles.quick}>{actions.map(([icon, label]) => <button key={label}><span>{icon}</span>{label}</button>)}</section>
            <section className={styles.offers}><div><h3>You have 2 active offers</h3><a>Apply</a></div>{data.offers.map((offer) => <article key={offer.title}><span>{offer.icon}</span><div><strong>{offer.title}</strong><p>{offer.description}</p></div><a>APPLY</a></article>)}</section>
          </aside>
        </div>
      </section>
    </main>
  );
}
