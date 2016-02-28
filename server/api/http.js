export const getWorld = (req, res) => {
  console.log(req.params.id); // eslint-disable-line no-console
  return res.json({ msg: 'hello world!' });
};
