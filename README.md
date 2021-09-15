![LunaDesk Logo](https://lunadesk-freeze.netlify.app/images/githubPhoto.jpg)

# LunaDesk

### What is LunaDesk?

LunaDesk helps teams work better in a hybrid working environment.

The core concept of the app is for employees to share which days they're working in the office, and which days they're working from home. We can't stop your co-workers eating your secret desk biscuits when you're not in the office, but we do make it easier to allow for better time management and to make for a more cohesive working environment.

### LET ME AT IT!

You're eager! A link to a live version is available here: https://lunadesk.co, though perhaps you'd like to finish reading this readme first? Or don't, I'm a readme not your boss.

### How did you build LunaDesk?

LunaDesk, originally named WorkFrom, was built as an entry for the Supabase Hackathon. This project was created using **NextJS** with **Supabase Auth, Storage and Database**. It also utilised libraries including (but not limited to) Framer Motion, easy-peasy, styled-components and recharts.

WorkFrom won the Supabase hackathon and the project is currently being rebuilt to make it even better.

### How does LunaDesk use Supabase?

As stated above, this project uses quite a few features of Supabase. It uses Auth to allow users to both sign-up and login using either an email address, Google account or Apple account. It uses Supabase's databases to store all data, and uses storage to store avatars for companies.

### How can I run LunaDesk on my local machine

To run the project, all you need to do is download the project to your local machine, followed by running `npm i` to install the required packages, and then `npm run-script dev` to boot it up. **Please note:** an `.env.local` file is required in the following structure to run locally:

```
PUBLIC_SUPABASE_URL=[your_url]
PUBLIC_SUPABASE_ANON_KEY=[your_key]
BASE_DOMAIN=http://localhost:3000/
```

For your convenience, you can use the following site to view the project live instead. Nifty, huh?
https://lunadesk.co

Alternatively, feel free to reach out to us via email (contact@lunadesk.co), and we'd be happy to provide you with the required keys to hook it up to the existing test database, plus the company banking details should you have any large sums of money from a recently deceased distant relative we've never heard of.

### It isn't finished?!

No. It's not. We're working on it though! Keep checking back in here to see how we're get on. Alternatively, if we're being too slow you can have a go yourself and submitting a PR.
