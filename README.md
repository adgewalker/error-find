## 'Error Find' - a simple quiz application written in React/Typescript using Next.js 13

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This app was deployed on [https://fly.io](fly.io) as [https://error-find.fly.dev/](https://error-find.fly.dev/)



## Approach and consideration

I made two major decisions when making this app:

1) It would be a non-routing SPA. Since there was no requirement to move back/forward between questions, nor to launch directly into an activity/round/question from a URL, this seemed like the best solution

2) The activities would be data driven. All activities held in the API data can be linked to from the home page, and each activity operates depending on the data held within.

In order to do this, I had to normalise the data from the API such that both 'flows' had the same shape. In other words, rather than some activities having questions which are actually rounds, every activity has at least one round containing a number of questions.

The Activity component is then responsible for deciding how to display these questions and bundle the responses back to the parent page. Likewise, the parent page is responsible for displaying the results sensibly, such that only multi-round activities have their questions split by round titles.

Everything else is standard React code using useState and useEffect hooks. I made interfaces out of every domain object, and every set of component properties.

* Note - I copied the data from the API into the app rather than fetching it directly from the browser due to the access control policy on the server