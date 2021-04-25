function isTouching (random1,random2) {
    if (random1.x - random2.x < random2.width/2 + random1.width/2
      && random2.x - random1.x < random2.width/2 + random1.width/2
      && random1.y - random2.y < random2.height/2 + random1.height/2
      && random2.y - random1.y < random2.height/2 + random1.height/2) {
    return true
  }
  else {
    return false
   }
  }