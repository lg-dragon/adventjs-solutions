function findFirstRepeated(gifts) {
  const map1 = {}
  for (let i = 0; i < gifts.length; i++) {
    if (map1[gifts[i]] != null) {
      return gifts[i]
    }
    map1[gifts[i]]=1;
  }
  return -1
}
