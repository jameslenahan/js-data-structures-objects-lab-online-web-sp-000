
var driver = {}

function updateDriverWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromDriverByKey(object, key){
  const newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDrivertByKey(object, key){
  delete object[key]
  return object
}