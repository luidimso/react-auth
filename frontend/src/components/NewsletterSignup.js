import { useEffect } from 'react';
import { NavLink, useFetcher } from 'react-router-dom';

import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <>
      <input
          type="email"
          placeholder="Sign up for newsletter..."
          aria-label="Sign up for newsletter"
        />
        <NavLink to="auth">
          <button>Sign up</button>
        </NavLink>
      </>
  );
}

export default NewsletterSignup;
