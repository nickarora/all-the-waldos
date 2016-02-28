export const getWorld = (req, res) => {
  console.log(req.params.id);
  return res.json({ msg: 'hello world!' });
};
