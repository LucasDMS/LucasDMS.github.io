export const get = async () => {
  const res = await fetch("http://localhost:5000/videos");

  return await res.json();
};
