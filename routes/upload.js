const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

/**
 * 1. 配置存储规则
 */
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, '../img'));
  },
  filename(req, file, cb) {
    // 文件名：时间戳 + 随机数 + 原始后缀
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, filename);
  }
});

/**
 * 2. 文件过滤（只允许图片）
 */
const fileFilter = (req, file, cb) => {
  const allowTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
  if (allowTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('只允许上传图片文件'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024 // 2MB
  }
});

/**
 * 3. 上传接口
 * 前端字段名：file
 */
router.post('/upload', upload.single('file'), (req, res) => {
    console.log("req.file==========", req.file);
  if (!req.file) {
    return res.status(400).json({
      code: 400,
      msg: '未接收到文件'
    });
  }

  res.send({
    code: 0,
    msg: '上传成功',
    data: {
      filename: req.file.filename,
      url: `/img/${req.file.filename}`
    }
  });
});

module.exports = router;
