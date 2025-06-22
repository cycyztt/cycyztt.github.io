var posts=["2025/06/22/hello-world/","2023/10/15/我的产品/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };