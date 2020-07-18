---
layout: post
tags: ubuntu opensource technology
---

# Configuring Sentry onpremise

[Sentry](https://sentry.io) is an excellent product to monitor your application for error monitoring among other aspects. Having tried the SaaS version for few months we wanted to self-host their open source version org-wide.

The [onpremise](https://github.com/getsentry/onpremise) guide is fairly decent to get started but falls short in [few aspects](#missing-aspects).

## Steps

1. Install [Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04), [Docker Compose](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04)
2. Install [nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04)
3. Install [Sentry](https://github.com/getsentry/onpremise) via docker

The installation process is surprisingly straightforward. You'll be asked to set details for SMTP email, user and password.

Run `docker-compose up -d` once step 3 is complete. From here, we're on our own as we're directed to the [community](https://forum.sentry.io/c/on-premise) and [docs](https://docs.sentry.io/development/server/).

To setup the endpoint, create an nginx config and use the IP address and port to test the endpoint.

```conf
server {
  listen 80;
  location / {
    # default 9000 port
    proxy_pass 127.0.0.1:9000;
  }
}
```

## Sentry integration test

Follow the setup post login to create a project and verify if Sentry is listening to events. If you've an insecure endpoint (no SSL) the event might not get through.

Hence, test it from your local machine and observe the raised issue on Sentry endpoint. Once you've secured the endpoint, retest from the server and observe successful integration.

## Google auth integration
Access for the organization accounts to self-hosted Sentry instance can be enabled through Google authentication. An official [senty-auth-google](https://github.com/getsentry/sentry-auth-google) library is supported to help with this.

Once installed, create an entry for Google client key and secret at the end of [sentry/config.py](https://github.com/getsentry/onpremise/blob/master/sentry/sentry.conf.example.py). Use Google developer console, create OAuth credentials and map the values.

## Missing aspects

1. SSL configuration
W
e installed SSL using EFF's [certbot](https://certbot.eff.org/) and configured to work with the endpoint. Redo the Sentry integration test and make sure everything works well.

Testing from a secure application will be tricky as endpoints from unsecured (self-hosted sentry, in this case) won't load.

There is a [WIP pull request](https://github.com/getsentry/onpremise/pull/558) to document this behavior. So, we should expect smoother SSL configuration sooner or later.

2. Better README

Personally, I think the [Setup section](https://github.com/getsentry/onpremise#setup) in the README can be structured better with sub-sections on the recommended changes to each of the files: `config.yml`, `sentry.conf.py` and `.env`

3. sentry-cli vs onpremise

Our infrastructure specialist, Sagar, had questions on the differences between sentry-cli vs onpremise. While I skimmed through the docs several months ago, we couldn't precisely find them on the docs.

# Next steps

We use GitLab community edition to manage the codebase. We will be testing for the following:

- each app should be have control on: gitlab/slack integrations, user access
- custom email configuration
- adding specific people to apps, managing issue owners

Thanks for reading!

