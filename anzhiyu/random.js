var posts=["posts/2d3be824.html","posts/e919b2cc.html","posts/76920b79.html","posts/60740eb5.html","posts/5e0b5a44.html","posts/6887151b.html","posts/942b1ba7.html","posts/61431281.html","posts/43cca95f.html","posts/23dc1fa1.html","posts/d28ea01a.html","posts/bf58abd7.html","posts/c203e0e4.html","posts/b7e9a660.html","posts/fdab4ef2.html","posts/1e597e71.html","posts/dc19d218.html","posts/61d83c03.html","posts/668d8513.html","posts/a8a4f08c.html","posts/bfa1c04f.html","posts/a3526d68.html","posts/14abf26.html","posts/8e7ae4b7.html","posts/6a1ed024.html","posts/f360eb4.html","posts/8896d0a5.html","posts/d81abf34.html","posts/c67fec4a.html","posts/50e96a11.html","posts/4a17b156.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };