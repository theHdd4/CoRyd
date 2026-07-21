import { getCustomerLandingData } from './data';
import styles from './page.module.css';

export default async function CustomerLandingPage() {
  const data = await getCustomerLandingData();

  return (
    <main className={styles.pageShell}>
      <header className={styles.header}>
        <a className={styles.logo} href="/landing"><span>≡</span>CoRyd</a>
        <nav className={styles.nav}>{data.navItems.map((item) => <a href="#" key={item}>{item}</a>)}</nav>
        <div className={styles.authActions}><a href="/login">Log in</a><a href="/login">Sign up</a></div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>{data.hero.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h1>
          <p>{data.hero.description}</p>
          <div className={styles.heroActions}><a href="/login">{data.hero.primaryCta}</a><button><span>▷</span>{data.hero.secondaryCta}</button></div>
          <div className={styles.cities}><small>Available in</small><div>{data.cities.map((city) => <span key={city.name}><b>{city.icon}</b>{city.name}</span>)}</div></div>
        </div>
        <div className={styles.heroArt}>
          <img src="/assets/customer-landing-hero.png" alt="CoRyd bike taxi and car on a city road" />
          <div className={styles.planCallout}><span>▣</span><p>{data.hero.subscriptionCallout.replace('₹199/month', '')}<strong>₹199/month</strong></p></div>
        </div>
      </section>

      <section className={styles.benefits}>
        <h2>Why riders choose CoRyd</h2>
        <div>{data.benefits.map((benefit) => <article key={benefit.title}><span>{benefit.icon}</span><h3>{benefit.title}</h3><p>{benefit.description}</p></article>)}</div>
      </section>

      <section className={styles.membership}>
        <div className={styles.membershipIntro}><small>MEMBERSHIP PLANS</small><h2>More rides.<br />More value.</h2><p>Simple plans. Big savings.<br />Cancel anytime.</p><a href="#">View all plans</a></div>
        <div className={styles.planGrid}>{data.plans.map((plan) => <article className={plan.highlighted ? styles.featuredPlan : ''} key={plan.name}>{plan.badge && <em>{plan.badge}</em>}<div><h3>{plan.name}</h3><span>{plan.icon}</span></div><p><strong>{plan.price}</strong> {plan.suffix}</p><ul>{plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul></article>)}</div>
        <p className={styles.planNote}>▧ All plans include member-only pricing on bikes and taxis.</p>
      </section>

      <footer className={styles.footer}>
        <div><a className={styles.footerLogo} href="/landing"><span>≡</span>CoRyd</a><p>© 2024 CoRyd Mobility Pvt. Ltd.<br />All rights reserved.</p></div>
        {data.footerLinks.map((group) => <nav key={group.join('-')}>{group.map((item) => <a href="#" key={item}>{item}</a>)}</nav>)}
        <div><strong>Follow us</strong><p className={styles.socials}><span>◎</span><span>𝕏</span><span>in</span></p></div>
      </footer>
    </main>
  );
}
