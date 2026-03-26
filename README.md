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
3. Enter the version tag (e.g. `v1.0.0`)
4. Click **Run workflow**

This will create the git tag and build + push the Docker image to GHCR.
