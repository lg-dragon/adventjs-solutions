function manufacture(gifts, materials) {
  let materials_map = {}
  let manufactured = []
  for (let i = 0; i < materials.length; i++) {
    materials_map[materials[i]] = 1;
  }
  for (let i = 0; i < gifts.length; i++) {
    let gift_is_unavailable = false
    let gift = gifts[i]
    for (let j = 0; j < gift.length; j++) {
      if (materials_map[gift[j]] != 1) {
        gift_is_unavailable = true
        break
      }
    }
    if (!gift_is_unavailable){
      manufactured.push(gift)
    }
  }
  return manufactured
}