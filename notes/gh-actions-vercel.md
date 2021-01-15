---
title: Github Actions For Vercel
slug: gh-actions-vercel
---

I am using Jest to run tests for a [[nextjs]] site on Vercel using three strategies:

1. Import the component that a page runs and test with [[jest]] and [@testing-library](https://testing-library.com/docs/react-testing-library/intro).
2. Use Jest to unit test utility functions my API routes use.
3. Use fetch to call the API routes and test results.

## Testing Vercel API routes

This approach is inspired by [[laravel]][http testing](https://laravel.com/docs/7.x/http-tests)//laravel.com/docs/7.x/http

At first I hardcoded the URL for my current PR's preview URL into the Github action.

```js
let appUrl = "https://whatever.jpollock412.vercel.app";
test("Gets a 200", async () => {
	expect.assertions(1);
	await fetch(`${appUrl}/api/hello`)
		.then((r) => {
			expect(r.status).toBe(200);
		})
		.catch((e) => console.log(e));
});
```

That only worked beacuse I already had the PR. It's not reusable between PRs. Also, it runs the test on the previous commit in the likely case the Github action runs before the deployment is completed. I used [this action to wait for the preview URL to update](https://github.com/patrickedqvist/wait-for-vercel-preview)

## Trigger A Deployment From Another Repostiory

- [Vercel Deploy Hooks](https://vercel.com/docs/more/deploy-hooks)
- [Github Secrets](https://docs.github.com/en/actions/reference/encrypted-secrets)
- [curl Github Action](https://github.com/marketplace/actions/github-action-for-curl)
  This git repo manages content for a [garden.joshpress.net](https://garden.joshpress.net). The source code for that site is in a different repo. Pushing to that repo triggers deployment on Vercel.

I set up a [build hook](https://vercel.com/docs/more/deploy-hooks) on reference and then used a Github action to call it when this repo is pushed to. I used a Github repo secret for the deploy hook URL for security. If you look through the git history of this repo, you will see a hardcoded webhook URL. Then I remembered you can do that beacuse it's public. So I revoked that webhook and made a new one for the secret.

```yml
name: Meadow Halloween [CD]

on:
  push:
    branches: [master]

jobs:
  curl:
    runs-on: ubuntu-latest
    steps:
      # Trigger vercel webhook
      - name: Vercel Deploy
        uses: wei/curl@master
		with:
          args: ${{ secrets.VERCEL_DEPLOY_HOOK }}
```
