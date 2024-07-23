export async function fetchNYTArticles(period = 1) {
  const res = await fetch(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${process.env.NEXT_PUBLIC_NYT_API_KEY}`
  );
  const data = await res.json();
  return data.results;
}
