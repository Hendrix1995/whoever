const { posts } = require('../../models');
const { users } = require('../../models');

module.exports = {
  // 4번째 : sideBar 작성글 누르면 내가 썼던글 다 나옴ㅋㅋ
  post: async (req, res) => {
    const userInfo = await users
      .findOne({
        where: { id: req.body.id }
      })
      .catch((err) => res.json(err));
    if (!userInfo) {
      return res.status(404).json('없는 요청입니다');
    } else {
      const result = await posts
        .findAll({
          where: { userId: req.body.userId }
        })
        .catch((err) => res.json(err));
      if (!result) {
        return res.status(404).json('작성한 글이 없습니다');
      }
      res.status(200).json(result);
    }
  }
};
