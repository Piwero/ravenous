# ravenous
React app that is able to search for restaurants,  view a list of restaurants returned by the Yelp API and to sort through restaurants using a filter.


## Run server
Follow this link and activate cors anywhere
https://cors-anywhere.herokuapp.com/corsdemo

```commandline
npm run start
```

## Docker

### Build locally

```bash
cd ravenous
docker build -t ravenous .
docker run -p 8080:80 ravenous
```

The app will be available at `http://localhost:8080`.

### Publish a release

The Docker image is published to `ghcr.io/piwero/ravenous` automatically.

**Option 1 — Push a tag from the CLI:**

```bash
git tag v1.0.0
git push origin v1.0.0
```

**Option 2 — Trigger manually from GitHub:**

1. Go to **Actions** > **Build and Push Docker Image**
2. Click **Run workflow**
3. Select the bump type: **MAJOR**, **MINOR**, **PATCH**, or **RC**
4. Click **Run workflow**

The workflow finds the latest tag and calculates the next version automatically:

| Current tag | Bump  | New tag       |
|-------------|-------|---------------|
| none        | PATCH | `v0.0.1`      |
| `v0.0.1`   | RC    | `v0.0.2-rc`   |
| `v0.0.1`   | MINOR | `v0.1.0`      |
| `v0.1.0`   | PATCH | `v0.1.1`      |
| `v0.1.1`   | MAJOR | `v1.0.0`      |
